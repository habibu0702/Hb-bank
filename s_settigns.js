import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Modal, TextInput, StatusBar, Vibration } from 'react-native';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, ScrollView, Alert, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { useState, useEffect, useRef  } from 'react';
import { BlurView } from 'expo-blur';
import { s_navigation } from './s_btn-json';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import i18n from './a_l-swap-lan';



export const Profile = () => {
 const { user, updateImage, darkMode, setIsSpin  } = useContext(UserContext);
 const showSTRender = userStore(state => state.showSTRender);
 const setShowSTRender = userStore(state => state.setShowSTRender);
 const setSyncForm = userStore(state => state.setSyncForm);
 const LoggedIn = userStore(state => state.LoggedIn);
 const { setRender3 } = useContext(UserContext);
 const [hash, setHash] = useState(false);
 const [modal, setModal] = useState(false);
 const [showModal, setShowModal] = useState(false);




 const insets = useSafeAreaInsets();





 const haptic = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (Platform.OS === 'android') {
      Vibration.vibrate(10);
    }
  }




  let last = 0;
 const trigger = () => {
  const now = Date.now();
  if (now - last > 500) {
    haptic();
    last = now;
  }
 }



 

 


 const OPEN = () => {
  if (!showSTRender) {
    setShowSTRender();
  } else {
    return null;
  }
 }






  const upload = async () => {
    const checkGalery = await ImagePicker.requestCameraPermissionsAsync();
    if (checkGalery.granted === false) {
      Alert.alert('Camera Not AlloW');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'images',
      quality: 1
    });

    if (!result.canceled) {
      const photoUrl = result.assets[0].uri;
      updateImage('image', photoUrl);
      trigger();
    } else {
      return null;
    }
  };






  const LogOut = () => {
    setIsSpin(true);
    trigger();
    setTimeout(() => {
      setIsSpin(false);
      LoggedIn(false);
      setSyncForm();
    }, 1000);
  }









 useEffect(() => {
  const listen = scrollY.addListener(({ value }) => {
    if (value >= 100 && !hash) {
      trigger();
      setHash(true);
    } else if (value < 100 && hash) {
    setHash(false);
    trigger();
    }
  });
  return () => scrollY.removeListener(listen);
 }, [hash]);






 const screnWidth = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(screnWidth)).current;
 useEffect(() => {
  if (showModal) {
    setModal(true);
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  } else {
    Animated.timing(slide, {
      toValue: screnWidth,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      setModal(false)
    });
  }
 }, [showModal])












  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 70],
    extrapolate: 'clamp'
  });



  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const scaleImage = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const scaleLablee = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const headerRadius = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [20, 3],
    extrapolate: 'clamp'
  });

  const backgroundY1 = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['#fff', '#fff'],
    extrapolate: 'clamp'
  });



  const backgroundY2 = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['#121212', '#2a2a2a'],
    extrapolate: 'clamp'
  });









  const handler = (value) => {
    if (value === 'camera') {
      upload();
    } else if (value === 'logout') {
      LogOut();
    } else if (value === 'lang') {
      setShowModal(true);
    } else if (value) {
      setRender3(value); OPEN();
    } else {
      return null;
    }
  }






  return (
    <View style={{flex: 1, position: 'relative', backgroundColor: darkMode ? '#ddd' : '#000', gap: 10,
    paddingBottom: insets.bottom + 62}}>

    <BlurView intensity={2} style={{flex: 1}}>
    <Animated.View style={[{flex: 1}]}>
    <View style={styles.homeScreens}>


    <Animated.View style={[styles.header4, {height: headerHeight, borderBottomLeftRadius: headerRadius,
    borderBottomRightRadius: headerRadius, backgroundColor: darkMode ? backgroundY1 : backgroundY2}]}>
    
    <Animated.View style={[styles.headerLable, {transform: [{scale: scaleLablee}]}]}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{i18n.t('settings')}</Text>
    </Animated.View>
  
    <Animated.View style={[{transform: [{scale: scaleImage}]}, {textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', flexDirection: 'column', gap: 10}, {opacity: opacity}]}>
    <Image source={user.image ? {uri: user.image} : require('./assets/apple.png')}
    style={[styles.image4]}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>@{user.fullName || 'Guest'}</Text>
    </Animated.View>
    </Animated.View>






    

    {/*------------------------------------------home-----------------------------------*/}
    <Animated.ScrollView onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: {y: scrollY}}}], { useNativeDriver: false})} scrollEventThrottle={16}
    style={{backgroundColor: darkMode ? '#fff' : '#121212'}} overScrollMode="never">
    <View style={[styles.homeSettings]}>




    <View style={[styles.settin_container_btn, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    {s_navigation.map((key) => (
    <TouchableOpacity key={key.name} onPress={() => {handler(key.screen)}} style={styles.change}>
    {key.name ? <Ionicons name={key.name} size={20} color='#fff' style={styles.icon}/> :
    <Icon name={key.name} size={20} color='#fff' style={styles.icon}/>}
    <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{key.lable}</Text>
    <Ionicons name={key.forward} size={20} color='gray' style={styles.forward}/>
    </TouchableOpacity>
    ))}
    </View>

 </View>
   </Animated.ScrollView>
</View>
</Animated.View>


    



    {/*----------------------------------language-list----------------------------*/}
    {modal && (
    <Modal visible={modal} transparent={true} animationType='none'>
    <View style={{flex: 1}}>
    <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
      <View style={{height: '60%', width: '100%'}}></View>
    </TouchableWithoutFeedback>


    <Animated.View style={{backgroundColor: darkMode ? '#dddddd' : '#000', height: '40%', width: '100%',
    borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', left: 0, right: 0,
    bottom: 0, transform: [{translateY: slide}]}}>

    <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', padding: 10}}>
    <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Select Laguage</Text>
    </View>
    
    </Animated.View>
    </View>
    </Modal>)}

</BlurView>
</View>
  )
}










const styles = StyleSheet.create({
  homeScreens: { backgroundColor: 'transparent', flex: 1},

  header4: { backgroundColor: '#e6f0fa', height: 70, width: '100%', padding: 15, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 15, position: 'relative',
  marginBottom: 10},

  headerLable: {position: 'absolute', left: 20, right: 0},


  homeSettings: {flexDirection: 'column', padding: 15, textAlign: 'center', justifyContent: 'center',
  gap: 20, alignItems: 'center', paddingVertical: 10},
 
  image4: {height: 80, width: 80, borderRadius: 50, borderWidth: 2, borderColor: 'gray'},


  uploadImage: {backgroundColor: '#ddd', height: 50, width: '100%', borderRadius: 10, gap: 10,
  padding: 10, textAlign: 'left',  flexDirection: 'row', alignItems: 'center', elevation: 4},








  settin_container_btn: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column', 
  elevation: 4, padding: 10, borderRadius: 10, gap: 15},
  
  change: {height: 50, width: '100%', textAlign: 'left', justifyContent: 'left', flexDirection: 'row',
  gap: 20, alignItems: 'center', paddingVertical: 1, position: 'relative'},
  lableChange: {fontWeight: 'bold'},

  forward: {position: 'absolute', right: 0},


  

  icon: {backgroundColor: 'rgba(25, 25, 25, 0.30)', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},





  Render: {backgroundColor: '#fff', height: '100%', width: '100%', position: 'absolute',
  left: 0, right: 0, bottom: 0, zIndex: 199, borderRadius: 10}

 })