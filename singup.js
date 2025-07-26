import { View, Text, Alert, StyleSheet, Modal } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import InputLable from "./lable";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useStore } from "./true";
import axios from "axios";




export default function SignUp() {
  const Toggle = useStore(state => state.Toggle);


 const [first_name, setFirst_name] = useState('');
 const [last_name, setLast_name] = useState('');
 const [user_name, setUser_name] = useState('');
 const [password, setPasswoed] = useState('');
 const [confirm_password, setConfirm_password] = useState('');
 const [phone_number, setPhone_number] = useState('');
 const [pin, setPin] = useState('');
 const [confirm_pin, setConfirm_pin] = useState('');

 const [hidden, setHidden] = useState(true);

 const [field, setField] = useState('');


 
 const [spin, setSpin] = useState(false);


 const [err1, setErr1] = useState('');
 const [err2, setErr2] = useState('');
 const [err3, setErr3] = useState('');
 const [err4, setErr4] = useState('');
 const [err5, setErr5] = useState('');
 const [err6, setErr6] = useState('');



 

 


  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();


  useEffect(() => {
   setTimeout(() => {
      setField('');
   }, 2000)
  }, [field]);






  const check_first_name = (value) => {
    setFirst_name(value);
    if (first_name.length < 4) {
      setErr1('First name Is require');
      return false;
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      setErr1('Please Enter a valid first name');
      return false;
    }
      setErr1('');
      return true;
  }
  








 const check_last_name = (value) => {
  setLast_name(value);
    if (last_name.length < 4) {
      setErr2('Last name Is require');
      return false;
    }
    if (!/^[a-zA-Z]{4,}$/.test(value)) {
      setErr2('Please Enter a valid Last name');
      return false;
    }
      setErr2('');
    return true;
  }






  const check_user_name = (value) => {
    setUser_name(value);
    if (user_name.length < 4) {
      setErr3('User name Is required');
      return false;
    }
    if (!/^[a-zA-Z0-9_]+(?:#[a-zA-Z0-9_]+)?$/.test(value)) {
      setErr3('Username must be unique and can Include letters numbers and underscore');
      return false;
    }
      setErr3('');
    return true;
  }







  const check_phone_number = (value) => {
    setPhone_number(value);
  if (!/^(?:\+234|0)[789][01]\d{8}$/.test(value)) {
      setErr4('Please Inter a valid Phone Number');
      return false;
    }
      setErr4('');
      return true;
  }
  

 

 

  const check_password = (value) => {
    setPasswoed(value);
    if (password.length < 8) {
      setErr5('password must be at least 8 characters');
      return false;
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
      setErr5('Include at least one uppercase letter');
      return false;
    } 
      setErr5('');
      return true;
  }







  const check_confirm_password = (value) => {
    setConfirm_password(value);
    if (value !== password) {
      setErr6('Password does not match');
      return false;
    }
    setErr6('');
    return true;
  }
  












 useEffect(() => {
   if (spin === true) {
      setTimeout(() => {
         setSpin(false);
         setFirst_name('');
         setLast_name('');
         setUser_name('');
         setPhone_number('');
         setPasswoed('');
         setConfirm_password('');
      }, 5000);
   }
  }, [spin]);












 const register = async () => {
  
  if (!first_name || first_name.trim() === '') {
      setErr1('please enter your first_name?');
      return;
    }
    if (!check_first_name(first_name)) {
      Alert.alert('wee');
      return;
    }

    if (!last_name || last_name.trim() === '') {
      setErr2('please enter your first_name?');
      return;
    }

    if (!check_last_name(last_name)) {
      Alert.alert('2')
      return;
    }

    if (!user_name || user_name.trim() === '') {
      setErr3('please enter your User_name?');
      return;
    }

    if (!check_user_name(user_name)) {
      Alert.alert('3');
      return;
    }

      if (!phone_number || phone_number.trim() === '') {
      setErr4('please enter your phone_number?');
      return;
    }

    if (!check_phone_number(phone_number)) {
      Alert.alert('4');
      return;
    }

     if (!password || password.trim() === '') {
      setErr5('please enter your password?');
      return;
    }

    if (!check_password(password)) {
      Alert.alert('5');
      return;
    }

    if (!confirm_password || confirm_password.trim() === '') {
      setErr6('please confirm your password?');
      return;
    }

    if (!check_confirm_password(confirm_password)) {
      Alert.alert('6');
      return;
    }
    if (first_name && last_name && user_name && phone_number && password && confirm_password) {
    let data = {first_name, last_name, user_name, phone_number, password};
    console.log(data);

    try {
      setSpin(true);
      const response = await axios.post('http://localhost:5000/api/signUp', {
        fist_name: first_name,
        las_name: last_name,
        use_name: user_name,
        phone_numbe: phone_number,
        passwor: password
      });
      console.log('SUCCESS', response.data);
      Alert.alert('success');
    } catch (err) {
      console.error('send error:', err.response?.data || err.message);
      Alert.alert('error');
      setSpin(false);
    }
    
    }
 }





































 return (

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ position: 'relative'}}>
    <View style={styles.singUpHome}>

    <View style={styles.header}>
    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'}}>Create your Account</Text>
    </View>
    

    <View style={styles.singUpContainer}>
    
    <View style={styles.singUp} keyboardShouldPersistTaps="handled">
    <InputLable value={first_name} placeholder="First Name" onChangeText={check_first_name}
    style={styles.input1} textContentType="name" returnKeyType="next" label="Fist Name"
    onSubmitEditing={() => ref2.current.focus()} />
    {err1 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err1}</Text>)}

    <InputLable value={last_name} placeholder="Last Name" onChangeText={check_last_name}
    style={styles.input1} textContentType="name" returnKeyType="next" label="Last Name"
    ref={ref2} onSubmitEditing={() => ref3.current.focus()} />
    {err2 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err2}</Text>)}
    
    <InputLable value={user_name} placeholder="User name" onChangeText={check_user_name}
    style={styles.input1} textContentType="name" label="User Name" />
    {err3 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err3}</Text>)}

    <TextInput value={phone_number} placeholder='Mobile Number' onChangeText={check_phone_number} maxLength={11}
    style={styles.input1} textContentType='pad-phone' keyboardType="numeric" label="Mobile Number" />
    {err4 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err4}</Text>)}


    
    
     <View style={styles.joinEye}>
    <TextInput value={password} placeholder="Password" onChangeText={check_password}
    style={styles.input1} textContentType="password" returnKeyType="next" ref={ref4}
    onSubmitEditing={() => ref4.current.focus()} secureTextEntry={hidden} label="password" />

     <TouchableOpacity style={styles.hidePassword} onPress={() => setHidden(!hidden)}>
    <Icon name={hidden ? 'eye-slash' : 'eye'} size={24} color='gray'/>
    </TouchableOpacity></View>
    {err5 && (<Text style={{color: 'red', fontStyle:  15, fontWeight: 'bold'}}>{err5}</Text>)}

    <TextInput value={confirm_password} placeholder="Confirm password" onChangeText={check_confirm_password}
    style={styles.input1} textContentType="password" returnKeyType="done" ref={ref5} label="Confirm password"
    onSubmitEditing={() => ref5.current.focus()} secureTextEntry={hidden}/>
    {err6 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err6}</Text>)}
    
    <TouchableOpacity style={styles.goLogin} onPress={Toggle}>
    <Text style={{color: 'blue'}}>Already have an Account? Log In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.submit} onPress={register}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Sign Up</Text>
    </TouchableOpacity>
    </View>
    </View>


    {field && (<View style={styles.field1}><Text>{field}</Text></View>)}

    {spin && (
      <View style={styles.spinContainer}>
      <ActivityIndicator size={100} color='#00cc99' />
      <Text>wait a few minutes...</Text>
      </View>
    )}

    </View>
    </KeyboardAvoidingView>
    
 )
}



const styles = StyleSheet.create({
 singUpHome: {backgroundColor: 'royalblue', position: 'relative', height: '100%', width: '100%', padding: Platform.select({
 android: 5, default: 10, ios: 0.1})},
 header: {backgroundColor: 'royalblue', height: 100, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 20, textAlign: 'center', justifyContent: 'center'},

 singUpContainer: {backgroundColor: '#fff', left: 0, zIndex: 20, height: '100%', padding: 20,
 width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20
 },

 singUp: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', padding: 10, borderRadius: 20, gap: 15,
 position: 'relative', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 2,
 shadowRadius: 5, elevation: 5, textAlign: 'center', justifyContent: 'center'},

 input1: {backgroundColor: '#fff', padding: 5, height: 40, borderRadius: 10, fontSize: 15, fontWeight: 'bold',
 width: '100%'},

 joinEye: {height: 'auto', width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
  justifyContent: 'space-between'
 },
 
 submit: {backgroundColor: '#00cc99', height: 60, width: '100%', borderTopLeftRadius: 20, fontSize: 15,
 fontWeight: 'bold',
 borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center'},

 hidePassword: {right: 50, height: 40, width: 50, textAlign: 'center', alignItems: 'center', justifyContent: 'center', 
 backgroundColor: '#fff', zIndex: 5, borderRadius: 10},

 field1: {backgroundColor: 'red', height: 90, width: '90%', borderRadius: 20, textAlign: 'center',
 alignItems: 'center', justifyContent: 'center', position: 'absolute',  left: 20, right: 20, top: 15, zIndex: 22},

 spinContainer: {backgroundColor: '#fff', height: '100%', width: '100%', textAlign: 'center', flex: 1,
 alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 0, zIndex: 20
 }
})