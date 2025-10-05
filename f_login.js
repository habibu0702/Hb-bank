import { View, Text, TextInput, StyleSheet, ScrollView, Alert, Keyboard } from "react-native";
import { TouchableOpacity, Platform, Animated, Dimensions, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Vibration } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as LocalAuthentication from 'expo-local-authentication';
import { KeyboardAvoidingView } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context";
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import axios from "axios";
import i18n from './a_l-swap-lan';




export const LoginForms = () => {
  const { Login, setLogin} = useContext(UserContext);
  const [eye, setEye] = useState(true);

  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [visible, setVisible] = useState(false);
  const [loadin, setLoading] = useState(false);
  const [Finger, setFinger] = useState(false);


  const navigator = useNavigation();


  const GOPAGE = () => {
    navigator.navigate('SignUp');
    haptic();
  }





  const haptic = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (Platform.OS === 'android') {
      Vibration.vibrate(10);
    }
  }



  const speak = () => {
      const text = "congratilation Log in successfully";
      Speech.speak(text, {
        language: 'ha-EN',
        pitch: 1.0,
        rate: 0.9
      });
    }






  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        LoggedIn();
      }, 3000)
    }
  }, [visible]);







  useEffect(() => {
    if (user_name) {
      setError1('');
    } 
    if (password) {
      setError2('');
    }
  }, [user_name, password]);









  const author = async () => {
    const succ = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Unlock Account',
      fallbackLabel: 'Use Pin'
    });
    if (succ.success) {
      setFinger(true);
    }
  }
  useEffect(() => {
    author();
  }, []);





  const slide_lock = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(slide_lock, {
      toValue: 1,
      friction: 2,
      tension: 100,
      useNativeDriver: false
    }).start();
  })




  const screnWidth = Dimensions.get('window').width;
  const slide1 = useRef(new Animated.Value(1)).current;
  const slide2 = useRef(new Animated.Value(screnWidth)).current;
;

const name = 'habibu';
const pass = "habibu070@A";
  const LogIn = async () => {
    if (!user_name || user_name.trim() === '') {
      return setError1('username Is required');
    }

    if (!password || password.trim() === '') {
      return setError2('password Is required');
    }
    if (user_name !== name) {
      return setError1('Invalid username');
    }
    if (password !== pass) {
      return setError2('Invalid password');
    }
    setLoading(true);
    Keyboard.dismiss();
    haptic();

    try {
      const response = await axios.post('https://172.20.3:5000/008812/login', {
        "user_name": user_name,
        "password": password
      },
    {
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('successufly', response.data);
    return true
    } catch (err) {
      console.log('somethign wont wronw please try again letter');
      return false;
    } finally {
      setLoading(false);
      setLogin(true);
      speak();
    }
  }




  return (
    <SafeAreaView edges={[]} style={{flex: 1, position: 'relative'}}>
      <LinearGradient colors={['royalblue', '#00cc99']} start={{x: 0, y: 0}} end={{x: 0, y: 1}}
      style={{height: '100%', width: '100%'}}>


        <Animated.View style={[styles.App1]}>
      <View style={styles.header}>

        <Animated.View style={[styles.lock_container, {transform: [{scale: slide_lock}]}]}>
          {visible ? <Icon name="unlock" size={40} color='#fff'/> : <Icon name="lock" size={40} color='#fff'/>}
        </Animated.View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            {i18n.t('welcome_back')}
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}></Text>
      </View>

      <LinearGradient colors={['ivory', '#e1bee7']} style={styles.Home}
      start={{x: 1, y: 0}} end={{x: 0, y: 1}}>
        <View style={styles.form1}>

        <View style={styles.role}>
        <Icon name="user" size={24} color='#000'/>
        <TextInput value={user_name} placeholder="UserName" keyboardType='name-phone-pad' returnKeyType="done"
        textContentType='username' onChangeText={setUser_name} style={styles.input}/>
        </View>
        {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

        <View style={styles.role}>
          <Icon name="lock" size={24} color='#000'/>
         <TextInput value={password} placeholder="Password" keyboardType='visible-password' returnKeyType="done"
         textContentType='password' onChangeText={setPassword} secureTextEntry={eye}  style={styles.input}/>
         <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)}>
          <Icon name={eye ? 'eye-slash' : 'eye'} size={20} color='#000'/>
         </TouchableOpacity>
         </View>
         {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

         
          <TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Forgot Password</Text>
          </TouchableOpacity>

      
         <TouchableOpacity style={styles.submit_btn} onPress={() => {LogIn()}}>
         {loadin ?
         <>
         <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>please wait...</Text>
         <ActivityIndicator size={20} color='#000'/>
         </>
         :
         <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>{i18n.t('login')}</Text>}
         </TouchableOpacity>
         </View>

        

        <View style={styles.role_go}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>No Account Yet?</Text>
        <TouchableOpacity onPress={() => GOPAGE()}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Register Now</Text>
          </TouchableOpacity>
          </View>
      </LinearGradient>
      </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  App1: {flex: 1, position: 'relative'},

  header: {height: '20%', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'column', gap: 3, padding: 20},
  
  lock_container: {backgroundColor: 'rgba(255,255,255,0.60)', height: 60, width: 60, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', padding: 10, shadowColor: '#000', shadowOpacity: 6,
  shadowOffset: {width: 0, height: 2}, shadowRadius: 10, elevation: 8, borderRadius: 50},


  Home: {height: '70%', width: '100%', position: 'absolute', left: 0, right: 0, zIndex: 5,
  bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20},


  form1: {backgroundColor: 'rgba(255,255,255,0.30)', height: 'auto', width: '100%', padding: 10,
  flexDirection: 'column', gap: 10, borderRadius: 10, marginBottom: 20},

  role: {height: 50, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
  flexDirection:'row', gap: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 10, position: 'relative'},

  input: {height: 50, width: '100%', padding: 10, fontSize: 15, fontWeight: 'bold'},

  eye: {position: 'absolute', right: 8, height: 50, width: 40, zIndex: 2, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center'},

  role_go: {height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'row', padding: 5, gap: 10},
  

  submit_btn: {backgroundColor: '#00cc99', height: 55, width: '100%', textAlign: 'center', alignItems: 'center', gap: 10,
  flexDirection: 'row', justifyContent: 'center', padding: 10, borderTopLeftRadius: 20, borderBottomRightRadius: 20},





  App2: {height: '100%', width: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, zIndex: 2,
  borderRadius: 20}
})