import { View, Text, Alert, StyleSheet, Modal } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import InputLable from "./lable";
import { useState, useEffect } from "react";
import { useRef } from "react";




export default function SingUp() {

 const [fist_name, setFist_name] = useState('');
 const [last_name, setLast_name] = useState('');
 const [user_name, setUser_name] = useState('');
 const [password, setPasswoed] = useState('');
 const [confirm_password, setConfirm_password] = useState('');
 const [phone, setPhone] = useState('');
 const [pin, setPin] = useState('');
 const [confirm_pin, setConfirm_pin] = useState('');

 const [hidden, setHidden] = useState(true);

 const [field, setField] = useState('');


 const [registers, setRegisters] = useState('');
 const [spin, setSpin] = useState(false)



 

 


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



 const register = () => {
  if (!fist_name) {
   return setField('Please Enter Your Fist Name');
  } else if (!last_name) {
    setField('Please Enter your Last Name');
 } else if (!user_name) {
   return setField('please Enter you User Name');
 } else if (!phone) {
   return setField('Please Enter your Mobile Number');
 } else if (!password) {
   return setField('Please Enter your pasasword');
 } else if (password !== confirm_password) {
   return setField('Please Confirm your password');
 }


 if (fist_name && last_name && user_name && phone && password && confirm_password) {
   const data = {fist_name, last_name, user_name, phone, password}
  console.log(data);
  setSpin(true);
 }
 }


 useEffect(() => {
   if (spin === true) {
      setTimeout(() => {
         setSpin(false);
         setFist_name('');
         setLast_name('');
         setUser_name('');
         setPhone('');
         setPasswoed('');
         setConfirm_password('');
         Alert.alert('Registaretion Successful');
      }, 5000);
   }
  }, [spin]);






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
    <InputLable value={fist_name} placeholder="Fist Name" onChangeText={setFist_name}
    style={styles.input1} textContentType="name" returnKeyType="next" label="Fist Name"
    onSubmitEditing={() => ref2.current.focus()} />

    <InputLable value={last_name} placeholder="Last Name" onChangeText={setLast_name}
    style={styles.input1} textContentType="name" returnKeyType="next" label="Last Name"
    ref={ref2} onSubmitEditing={() => ref3.current.focus()} />
    
    <InputLable value={user_name} placeholder="User name" onChangeText={setUser_name}
    style={styles.input1} textContentType="name" label="User Name" />

    <InputLable value={phone} placeholder='Mobile Number' onChangeText={setPhone}
    style={styles.input1} textContentType='phone' keybordeType='numeric' label="Mobile Number" />


    <TouchableOpacity style={styles.hidePassword} onPress={() => setHidden(!hidden)}>
    <Icon name={hidden ? 'eye-slash' : 'eye'} size={24} color='gray'/>
    </TouchableOpacity>

    <TextInput value={password} placeholder="Password" onChangeText={setPasswoed}
    style={styles.input1} textContentType="password" returnKeyType="next" ref={ref4}
    onSubmitEditing={() => ref4.current.focus()} secureTextEntry={hidden} label="password"/>

    <TextInput value={confirm_password} placeholder="Confirm password" onChangeText={setConfirm_password}
    style={styles.input1} textContentType="password" returnKeyType="done" ref={ref5} label="Confirm password"
    onSubmitEditing={() => ref5.current.focus()} secureTextEntry={hidden}/>
    
    <TouchableOpacity style={styles.goLogin}>
    <Text style={{color: 'blue'}}>Already have an Account? Log In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.submit} onPress={register}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Sing Up</Text>
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
 shadowRadius: 5, elevation: 5},

 input1: {backgroundColor: '#fff', padding: 5, height: 50, borderRadius: 10, fontSize: 15, fontWeight: 'bold'},
 
 submit: {backgroundColor: '#00cc99', height: 60, width: '100%', borderTopLeftRadius: 20, fontSize: 15,
 fontWeight: 'bold',
 borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center'},

 hidePassword: {position: 'absolute', right: 20, bottom: 185, height: 40, width: 60, textAlign: 'center',
 alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6f0fa', zIndex: 5, borderRadius: 10},

 field1: {backgroundColor: 'red', height: 90, width: '90%', borderRadius: 20, textAlign: 'center',
 alignItems: 'center', justifyContent: 'center', position: 'absolute',  left: 20, right: 20, top: 15, zIndex: 22},

 spinContainer: {backgroundColor: '#fff', height: '100%', width: '100%', textAlign: 'center', flex: 1,
 alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 0, zIndex: 20
 }
})