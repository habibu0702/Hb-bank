import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from "react-native";
import { TouchableOpacity, Platform, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context";
import { userStore } from "./true";
import { SignUpForm } from "./f_singup";




export const LoginForms = () => {

  const [user_name, setUser_name] = useState('');
  const [password, setPassword] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const LoggedIn = userStore(state => state.LoggedIn);



  
 const name = 'habibu';
 const pass = 'habibu070@A';

  const logIn = () => {
    if (user_name !== name) {
      return setError1('wrown username');
    }
    if (password !== pass) {
      return setError2('wrown password');
    }
    if (user_name && password) {
    LoggedIn(); setError1(''); setError2('');
    return;
    }
  }


  useEffect(() => {
    if (user_name) {
      setError1('');
    } 
    if (password) {
      setError2('');
    }
  }, [user_name, password]);












 const Logign = userStore(state => state.Logign);
 const SignUp = userStore(state => state.SignUp);
 const setLogign = userStore(state => state.setLogign);
 const setSignUp = userStore(state => state.setSignUp);
 const syncForm = userStore(state => state.syncForm);
 const setSyncForm = userStore(state => state.setSyncForm);
 const [eye, setEye] = useState(true);


  const slide_lock = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(slide_lock, {
      toValue: 1,
      friction: 1,
      tension: 200,
      useNativeDriver: false
    }).start();
  })




  const screnWidth = Dimensions.get('window').width;
  const slide1 = useRef(new Animated.Value(1)).current;
  const slide2 = useRef(new Animated.Value(screnWidth)).current;




  useEffect(() => {
    const timer1 = setTimeout(() => {
    if(!syncForm) {
      setLogign();
      Animated.timing(slide1, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide1, {
        toValue: -screnWidth * 0.60,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        setLogign();
      })
    }
  }, 100);
  return () => clearTimeout(timer1);
  }, [syncForm]);







  useEffect(() => {
    const timer2 = setTimeout(() => {
    if(syncForm) {
      setSignUp();
      Animated.timing(slide2, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(slide2, {
        toValue: screnWidth,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setSignUp();
      })
    }
  }, 100);
  return () => clearTimeout(timer2);
  }, [syncForm]);




  return (
    <SafeAreaView edges={[]} style={{flex: 1, position: 'relative'}}>
      <LinearGradient colors={['#000', '#00cc99']} start={{x: 0, y: 0}} end={{x: 0, y: 1}}
      style={{height: '100%', width: '100%'}}>

      {SignUp && (
        <Animated.View style={[styles.App2, {transform: [{translateX: slide2}]}]}>
          <SignUpForm/>
        </Animated.View>
      )}


      {Logign && (
        <Animated.View style={[styles.App1, {transform: [{translateX: slide1}]}]}>
      <View style={styles.header}>

        <Animated.View style={[styles.lock_container, {transform: [{scale: slide_lock}]}]}>
          <Icon name="lock" size={40} color='#fff'/>
        </Animated.View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
            Unlock Your Account
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Regain Full Access</Text>
      </View>


      <LinearGradient colors={['ivory', '#000']} style={styles.Home}
      start={{x: 1, y: 0.2}} end={{x: 1, y: 1}}>
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
         </View>
         {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

         
          <TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Forgot Password</Text>
          </TouchableOpacity>

      
         <TouchableOpacity style={styles.submit_btn} onPress={logIn}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Log In</Text>
         </TouchableOpacity>
         </View>

        

        <View style={styles.role_go}>
        <Text style={{fontSize: 15}}>No Account Yet?</Text>
        <TouchableOpacity onPress={() => {setSyncForm()}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Register Now</Text>
          </TouchableOpacity>
          </View>
      </LinearGradient>
      </Animated.View>)}
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  App1: {flex: 1, position: 'relative'},

  header: {height: '30%', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'column', gap: 3, padding: 20},
  
  lock_container: {backgroundColor: 'rgba(255,255,255,0.60)', height: 60, width: 60, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', padding: 10, shadowColor: '#000', shadowOpacity: 6,
  shadowOffset: {width: 0, height: 2}, shadowRadius: 10, elevation: 8, borderRadius: 50},


  Home: {height: '70%', width: '100%', position: 'absolute', left: 0, right: 0,
  bottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20},


  form1: {backgroundColor: 'rgba(255,255,255,0.30)', height: 'auto', width: '100%', padding: 10,
  flexDirection: 'column', gap: 10, borderRadius: 10, marginBottom: 20},

  role: {height: 50, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
  flexDirection:'row', gap: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 10},

  role_go: {height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'row', padding: 5, gap: 10},
  
  input: {height: 50, width: '100%', padding: 10, fontSize: 15, fontWeight: 'bold'},

  submit_btn: {backgroundColor: '#00cc99', height: 60, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 10, borderTopLeftRadius: 20, borderBottomRightRadius: 20},





  App2: {height: '100%', width: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 199,
  borderRadius: 20}
})