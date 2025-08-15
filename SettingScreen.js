import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Modal, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, ScrollView, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { useState, useEffect, useRef  } from 'react';
import { Dimensions } from 'react-native';
import { userStore } from './true';
import MyWebsite from './myWeb';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';



export default function Profile() {
 const { user, uploadImage } = useContext(UserContext);
 const LoggedIn = userStore(state => state.LoggedIn);
 const show_website = userStore(state => state.show_website);
 const show_website_container = userStore(state => state.show_website_container);
 const password_container = userStore(state => state.password_container);
 const show_password_container = userStore(state => state.show_password_container);
 const profile_container = userStore(state => state.profile_container);
 const show_profile_container = userStore(state => state.show_profile_container);







 const [password, setPassword] = useState('');
 const [new_password, setNewpassword] = useState('');
 const [try_new_password, setTry_new_password] = useState('');
 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');




 const check_new_password = (value) => {
  setNewpassword(value);
  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*&]{8,}$/.test(value)) {
    return setError1('password must be at last one later an UperCase');
  } else {
    setError1('');
  }
  return true;
 }


  const check_try_new_password = (value) => {
  setTry_new_password(value);
  if (value !== new_password) {
    return setError2('password does not match');
  } else {
    setError2('');
  }
  return true;
 }






 const handled_change_password = () => {
  if (!password || !password.trim() === '') {
    return Alert.alert('Please enter your password');
  }
  if (!new_password || !new_password.trim() === '') {
    return {success: false, message: 'Please enter a new password'}
  }
  if (!try_new_password || try_new_password !== new_password) {
    return {success: false, message: 'Please Comfirm your password'}
  }
  return true;
 }







 useEffect(() => {
  if (!password === '') {
    setError1('');
  }
  if (!new_password === '') {
    setError2('');
  }
 });















 const screnWidth = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(1)).current;
 const to = useRef(new Animated.Value(100)).current;

 useEffect(() => {
  if (Platform.OS === 'android' && password_container === true) {
    Animated.timing(slide, {
      toValue: password_container ? 0.9 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  } else {
    Animated.timing(slide, {
      toValue: password_container ? 1 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  }
 }, [password_container]);









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

      uploadImage({ image: photoUrl });
    }
  };







  const support = '2348112150091';
  const message = 'ina nemen qarin bayani';

  const handleSupport = async () => {
    const url = `watsapp://send?phone=${support}&text=${encodeURIComponent(message)}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(`https://wa.me/${support}?text=${encodeURIComponent(message)}`);
      }
    } catch (err) {
      Alert.alert('dont have a watsapp go to download');
    }
  }



 


  const PageWebsite = () => {
    return <MyWebsite/>
  }




  return (

    <Animated.View style={[[{flex: 1}], [{transform: [{scale: slide }]}]]}>
    <View style={styles.homeScreens}>
    <View style={styles.header4}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Settings</Text>
    </View>



    <ScrollView>
    <View style={styles.homeSettings}>
    <Image source={user.image ? { uri: user.image } : require('./assets/default-profile.png')} style={styles.image4}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>{user.userName}</Text>

    <TouchableOpacity style={styles.uploadImage} onPress={upload}>
      <Ionicons name='camera' size={24} color='gray' />
      <Text style={styles.lableUpload}>Set Profile Image</Text>
    </TouchableOpacity>



    <View style={styles.settin_container_btn}>
    
    <TouchableOpacity style={styles.change} onPress={() => show_profile_container()}>
    <Icon name='user-circle-o' size={24} color='gray' />
    <Text style={styles.lableChange}>Your Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => show_password_container()}>
    <Icon name='lock' size={24} color='gray' />
    <Text style={styles.lableChange}>Login Password</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={handleSupport}>
    <Icon name='whatsapp' size={24} color='#25d366' style={styles.waIcon}/>
    <Text style={styles.lableChange}>Customer Support</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => {show_website_container()}}>
    <Icon name='question-circle' size={24} color='gray' />
    <Text style={styles.lableChange}>Abaute</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={LoggedIn}>
    <Icon name='sign-out' size={24} color='red' />
    <Text style={[styles.lableChange, [{color: 'red'}]]}>Log Out</Text>
    </TouchableOpacity>
    </View>

 </View>
   </ScrollView>
</View>




















 {profile_container && (
  <Modal visible={profile_container} onRequestClose={() => {show_profile_container()}}
  animationType='slide' presentationStyle='pageSheet'>
  {profile_container && (
  <View style={styles.profile_container}>
  <View style={styles.profile_container_header}>
  <TouchableOpacity onPress={() => {show_profile_container()}}>
  <Icon name='minus' size={40} color='#00cc99'/>
  </TouchableOpacity>
  </View>
  </View>
  )}
  </Modal>
 )}
































  {password_container && (
  <Modal visible={password_container} onRequestClose={() => {show_password_container()}}
  animationType='slide' presentationStyle='pageSheet'>
  {password_container && (
  <View style={styles.password_container}>
  <View style={styles.password_container_header}>
  <TouchableOpacity style={styles.back} onPress={() => {show_password_container()}}>
  <Icon name='minus' size={40} color='#00cc99'/>
  </TouchableOpacity>
  </View>
   
  <View style={styles.home_change_password}>
  <View style={styles.form1}>
  <TextInput value={password} onChangeText={setPassword} style={styles.input_password}
  returnKeyType='go' placeholder='Password' textContentType='password'/>

  <TextInput value={new_password} onChangeText={check_new_password} style={styles.input_password}
  returnKeyType='go' placeholder='New Password' textContentType='password'/>
  {error1 && (<Text style={styles.error}>{error1}</Text>)}

  <TextInput value={try_new_password} onChangeText={check_try_new_password} style={styles.input_password}
  returnKeyType='done' placeholder='Try New Password' textContentType='password'/>
  {error2 && (<Text style={styles.error}>{error2}</Text>)}

  <TouchableOpacity style={styles.change_password_btn} onPress={() => {handled_change_password()}}>
  <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Comfirm</Text>
  </TouchableOpacity>
  </View>
  </View>

  </View>
  )}
  </Modal>
  )}


 


















 
  {show_website && (
  <Modal visible={show_website} animationType='slide'
  onRequestClose={() => {show_website_container()}} presentationStyle='pageSheet'>
  {show_website && (
  <Animated.View style={[styles.myWebsite]}>
      {PageWebsite()}
  </Animated.View>)}
    </Modal>)}


</Animated.View>
  )
}



const styles = StyleSheet.create({
  homeScreens: { backgroundColor: '#fff', height: '90%', width: '100%'},

   header4: { backgroundColor: '#e6f0fa', height: 70, width: '100%', padding: 20, textAlign: 'left',
   justifyContent: 'center'},


  homeSettings: {flexDirection: 'column', padding: 20, textAlign: 'center', justifyContent: 'center',
  gap: 20, alignItems: 'center', paddingVertical: 10},
 
  image4: { height: 100, width: 100, borderRadius: 50, borderWidth: 2, borderColor: 'gray'},


















  uploadImage: {backgroundColor: '#fff', height: 60, width: '100%', borderRadius: 10, gap: 10,
  padding: 10, textAlign: 'left',  flexDirection: 'row', alignItems: 'center', shadowColor: '#000',
  shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4},








  settin_container_btn: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column',
  shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.3, shadowRadius: 4, 
  elevation: 4, padding: 10, borderRadius: 10, gap: 15},
  change: {height: 50, width: '100%', textAlign: 'left', justifyContent: 'left', flexDirection: 'row',
  gap: 20, alignItems: 'center', paddingVertical: 1},
  lableChange: {fontWeight: 'bold'},

















  profile_container: { backgroundColor: '#fff', flex: 1},
  profile_container_header: { backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center',
  alignItems: 'center', justifyContent: 'center'},
























  password_container: { backgroundColor: '#fff', flex: 1},
  password_container_header: { backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', marginBottom: 15},
  home_change_password: {height: '100%', width: '100%', padding: 20},

  form1: {backgroundColor: 'rgba(25,25,25,0.80)', height: 'auto', width: '100%', textAlign: 'left',
  alignItems: 'left', flexDirection: 'column', gap: 10, padding: 10, borderRadius: 20},
  input_password: { backgroundColor: '#ddd', height: 40, width: '100%', padding: 10, borderRadius: 10,
  fontSize: 15, fontWeight: 'bold'},
  change_password_btn: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20},

  error: {fontSize: 15, fontWeight: 'bold', color: 'red'},




  myWebsite: {backgroundColor: '#fff', flex: 1}
})