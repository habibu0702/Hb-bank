import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Modal, TextInput, StatusBar } from 'react-native';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, ScrollView, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { useState, useEffect, useRef  } from 'react';
import { Dimensions } from 'react-native';



export const Profile = () => {
 const { user, uploadImage } = useContext(UserContext);
 const showSTRender = userStore(state => state.showSTRender);
 const setShowSTRender = userStore(state => state.setShowSTRender);
 const setSyncForm = userStore(state => state.setSyncForm);
 const LoggedIn = userStore(state => state.LoggedIn);
 const { setRender3 } = useContext(UserContext);
 const setIsloading = userStore(state => state.setIsloading);

 






 




 const screnWidth = Dimensions.get('window').width;
 const slide1 = useRef(new Animated.Value(1)).current;
 const slide2 = useRef(new Animated.Value(screnWidth)).current;

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



  const login = () => {
    setIsloading();
    setTimeout(() => {
      setIsloading();
      LoggedIn();
      setSyncForm();
    }, 1000);
  }



  return (
    <LinearGradient style={{flex: 1, position: 'relative'}} colors={['#000', '#00CC99']}>
    <Animated.View style={[[{flex: 1}], [{transform: [{translateX: slide1 }]}]]}>
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
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Set Profile Image</Text>
    </TouchableOpacity>



    <View style={styles.settin_container_btn}>
    
    <TouchableOpacity style={styles.change} onPress={() =>
    {setRender3('user_info'); OPEN()}}>
    <Icon name='user-circle-o' size={20} color='#fff' style={styles.user_icon} />
    <Text style={styles.lableChange}>My Info</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() =>
    {setRender3('policy_security'); OPEN()}}>
    <Icon name='lock' size={20} color='#fff' style={styles.pass_icon}/>
    <Text style={styles.lableChange}>Privacy & Security</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() =>
    {setRender3('faq'); OPEN()}}>
    <Icon name='question' size={20} color='#fff' style={styles.su_icon}/>
    <Text style={styles.lableChange}>FAQ</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() =>
    {setRender3('about'); OPEN()}}>
    <Icon name='exclamation' size={18} color='#fff' style={styles.about_icon} />
    <Text style={styles.lableChange}>About</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => {login()}}>
    <Icon name='sign-out' size={20} color='#fff' style={styles.log_icon} />
    <Text style={[styles.lableChange, [{color: 'red'}]]}>Log Out</Text>
    </TouchableOpacity>
    </View>

 </View>
   </ScrollView>
</View>
</Animated.View>
</LinearGradient>
  )
}










const styles = StyleSheet.create({
  homeScreens: { backgroundColor: 'transparent', flex: 1},

   header4: { backgroundColor: '#e6f0fa', height: 70, width: '100%', padding: 15, textAlign: 'left',
   justifyContent: 'flex-end', borderRadius: 10},


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


  user_icon: {backgroundColor: 'blue', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},

   pass_icon: {backgroundColor: 'gray', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},

  su_icon: {backgroundColor: '#00ffcc', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},

  about_icon: {backgroundColor: '#006600', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},

   log_icon: {backgroundColor: 'red', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 5, borderRadius: 5},





  Render: {backgroundColor: '#fff', height: '100%', width: '100%', position: 'absolute',
  left: 0, right: 0, bottom: 0, zIndex: 199, borderRadius: 10}

 })