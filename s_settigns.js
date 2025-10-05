import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Modal, TextInput, StatusBar, Vibration } from 'react-native';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, ScrollView, Alert, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
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



export const SettingsScreen = () => {
 const { user, updateImage, darkMode, setIsSpin  } = useContext(UserContext);
 const setSyncForm = userStore(state => state.setSyncForm);
 const LoggedIn = userStore(state => state.LoggedIn);
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












 const navigator = useNavigation();
  const handler = (value) => {
    if (value === 'camera') {
      upload();
    } else if (value === 'logout') {
      LogOut();
    } else if (value) {
    navigator.navigate(value);
    } else {
      return null;
    }
  }






  return (
    <View style={{flex: 1, position: 'relative', backgroundColor: darkMode ? '#ddd' : '#000'}}>

    {/*------------------------header-----------------------------------------*/}
    <View style={[styles.header, {backgroundColor: darkMode ? '#ddd' : '#2a2a2a'}]}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
    marginLeft: 20, padding: 2}}>{i18n.t('settings')}</Text>
    </View>






    

    {/*------------------------------------------home-----------------------------------*/}
    <ScrollView style={{backgroundColor: darkMode ? '#ddd' : '#2a2a2a', padding: 20}}>


    {/*--------------------------------user-info----------------------------------------*/}
    <View style={[styles.user_info, {backgroundColor: darkMode ? '#fff' : 'black'}]}>
    <Image source={user.image ? {uri: user.image} : require('./assets/apple.png')} style={styles.image}/>

    <View style={styles.user_button}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory', marginTop: 5}}>
    {user.fullName}</Text>

    <TouchableOpacity style={styles.user_btn}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
    Go To Your Profile</Text>
    <Ionicons name="chevron-forward-outline" size={20} color='gray' style={{position: 'absolute', right: 10}}/>
    </TouchableOpacity>
    </View>
    </View>



    {/*------------------------------------bottom----------------------------------------*/}
    <View style={[styles.button_container, {backgroundColor: darkMode ? '#fff' : 'black'}]}>
    {s_navigation.map((key) => (
    <TouchableOpacity key={key.name} onPress={() => {handler(key.screen)}} style={styles.button}>
    {key.name ? <Ionicons name={key.name} size={20} color='#fff' style={styles.icon}/> :
    <Icon name={key.name} size={20} color='#fff' style={styles.icon}/>}
    <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{key.lable}</Text>
    <Ionicons name={key.forward} size={20} color='gray' style={styles.forward}/>
    </TouchableOpacity>
    ))}
    </View>
   </ScrollView>


    



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
</View>
  )
}










const styles = StyleSheet.create({

  header: { backgroundColor: '#e6f0fa', height: 50, width: '100%', justifyContent: 'flex-end'},


  user_info: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center', position: 'relative',
  flexDirection: 'row', padding: 10, gap: 10, borderRadius: 10, marginBottom: 10},
  image: {height: 60, width: 60, borderRadius: 50, borderWidth: 2, borderColor: 'gray', resizeMode: 'contain'},

  user_button: {textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10,
  height: 70, width: '80%'},

  user_btn: {height: 30, width: '100%', borderTopWidth: 1, borderTopColor: 'gray', position: 'relative',
  textAlign: 'center', justifyContent: 'center'},


  uploadImage: {backgroundColor: '#180101ff', height: 50, width: '100%', borderRadius: 10, gap: 10,
  padding: 10, textAlign: 'left',  flexDirection: 'row', alignItems: 'center', elevation: 4},








  button_container: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column', 
  elevation: 4, borderRadius: 10, padding: 10, gap: 15},
  
  button: {height: 50, width: '100%', textAlign: 'left', justifyContent: 'left', flexDirection: 'row',
  gap: 20, alignItems: 'center', paddingVertical: 1, position: 'relative'},
  lableChange: {fontWeight: 'bold'},

  forward: {position: 'absolute', right: 0},


  

  icon: {backgroundColor: 'rgba(25, 25, 25, 0.30)', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5}

 })