import { View, Text, Alert, StyleSheet, Modal } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import InputLable from "./lable";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { userStore } from "./true";
import axios from "axios";




export default function SignUp() {
  const Toggle = userStore(state => state.Toggle);


 const [first_name, setFirst_name] = useState('');
 const [last_name, setLast_name] = useState('');
 const [user_name, setUser_name] = useState('');
 const [password, setPassword] = useState('');
 const [confirm_password, setConfirm_password] = useState('');
 const [phone_number, setPhone_number] = useState('');
 const [pin, setPin] = useState('');
 const [confirm_pin, setConfirm_pin] = useState('');

 const [hidden, setHidden] = useState(true);



 
 const [spin, setSpin] = useState(false);
 const [finish, setFinish] = useState(false);


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
    if (first_name === '') {
      setErr1('');
    }
    if (last_name === '') {
      setErr2('');
    }
    if (user_name === '') {
      setErr3('')
    }
  });






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
    setPassword(value);
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





 return (
    <View style={styles.singUpHome}>

    <View style={styles.header}>
    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'}}>Create your Account</Text>
    </View>
    

    <View style={styles.singUpContainer}>
    
    <View style={styles.form1} keyboardShouldPersistTaps="handled">
    <TextInput value={first_name} placeholder="First Name" onChangeText={check_first_name}
    style={styles.input1} textContentType="name" returnKeyType="go"
    onSubmitEditing={() => ref2.current.focus()} />
    {err1 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err1}</Text>)}

    <TextInput value={last_name} placeholder="Last Name" onChangeText={check_last_name}
    style={styles.input1} textContentType="name" returnKeyType="go" ref={ref2}
    onSubmitEditing={() => ref3.current.focus()} />
    {err2 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err2}</Text>)}
    
    <TextInput value={user_name} placeholder="User name" onChangeText={check_user_name} ref={ref3}
    returnKeyType="done" onSubmitEditing={() => ref3.current.focus()}
    style={styles.input1} textContentType="name" />
    {err3 && (<Text style={{color: 'red', fontSize: 15, fontWeight: 'bold'}}>{err3}</Text>)}

    
    <TouchableOpacity style={styles.goLogin} onPress={Toggle}>
    <Text style={{color: 'blue'}}>Already have an Account? Log In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.submit} onPress={() => {setFinish(true)}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Next</Text>
    </TouchableOpacity>
    </View>
    </View>





    {finish && ( <Modal visible={finish} animationType="slide" presentationStyle="pageSheet"
    onRequestClose={() => setFinish(false)}>
    {finish && (<View style={styles.singUpContainer2}>
    <View style={styles.thead}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Comfirm your SignUp</Text>
    </View>
    <View style={styles.singUpHome2}>
    
    <View style={styles.form2}>
    <TextInput value={phone_number} placeholder="Mobile number" textContentType="phone-pad" returnKeyType="go"
    onChangeText={check_phone_number} style={styles.input2} keyboardType="numeric"/>
    
    <View style={styles.input_eye}>
    <TextInput value={password} placeholder="password" textContentType="password" returnKeyType="go"
    onChangeText={check_password} style={styles.input2} secureTextEntry={hidden}/>
    <TouchableOpacity style={styles.eye} onPress={() => setHidden(!hidden)}>
    <Icon name={hidden ? "eye-slash" : "eye"} size={30} color='#000'/>
    </TouchableOpacity>
    </View>

     <TextInput value={confirm_password} placeholder="comfirm password" textContentType="password" returnKeyType="go"
    onChangeText={check_confirm_password} style={styles.input2} secureTextEntry={hidden}/>

    <TouchableOpacity style={styles.submit2}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Finish</Text>
    </TouchableOpacity>
    </View>
    </View>

    </View>)}
    </Modal>)}


    {spin && (
      <View style={styles.spinContainer}>
      <ActivityIndicator size={100} color='#00cc99' />
      <Text>wait a few minutes...</Text>
      </View>
    )}

    </View>
 )
}
































const styles = StyleSheet.create({
 singUpHome: {backgroundColor: 'royalblue', position: 'relative', height: '100%', width: '100%'},
 header: {backgroundColor: 'royalblue', height: 100, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 20, textAlign: 'center', justifyContent: 'center'},

 singUpContainer: {backgroundColor: '#fff', height: '80%', position: 'absolute', left: 0,
 right: 0, bottom: 0, padding: 20, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 },

 form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', padding: 10, borderRadius: 20, gap: 15,
 position: 'relative', textAlign: 'center', justifyContent: 'center'},

 input1: {backgroundColor: 'transparent', padding: 5, height: 45, borderRadius: 10, fontSize: 15, fontWeight: 'bold',
 width: '100%', borderColor: '#000', borderWidth: 2},

 
 submit: {backgroundColor: '#00cc99', height: 60, width: '100%', borderTopLeftRadius: 20, fontSize: 15,
 fontWeight: 'bold',
 borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center'},

 hidePassword: {right: 50, height: 40, width: 50, textAlign: 'center', alignItems: 'center', justifyContent: 'center', 
 backgroundColor: '#fff', zIndex: 5, borderRadius: 10},














 singUpContainer2: {backgroundColor: '#FFF', flex: 1},
 thead: {backgroundColor: '#e6f0fa', height: 100, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center'},
 singUpHome2: {flex: 1, padding: 20},
 form2: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', padding: 10, flexDirection: 'column',
 gap: 10, borderRadius: 10},

 input2: {height: 45, width: '100%', padding: 10, borderColor: '#000', borderWidth: 2, borderRadius: 10,
 fontSize: 15, fontWeight: 'bold'},

 input_eye: {height: 45, width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
 justifyContent: 'space-between', position: 'relative'},
 eye: {height: 40, width: 50, textAlign: 'center', alignItems: 'center', justifyContent: 'center',
 backgroundColor: '#e6f0fa', position: 'relative', right: 53},

 submit2: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20},



 spinContainer: {backgroundColor: '#fff', height: '100%', width: '100%', textAlign: 'center', flex: 1,
 alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 0, zIndex: 20
 }
})