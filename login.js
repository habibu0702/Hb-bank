import { View, Text, Alert, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { useState, useEffect } from "react";
import { useStore } from "./true";



export default function Logign() {
  const Toggle = useStore(state => state.Toggle);

 const [user_name, setUser_name] = useState('');
 const [password, setPassword] = useState('');
 const [eye, setEye] = useState(true);


 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');


 const getLogin = async () => {
  if (!user_name || user_name.trim() === '') {
    setError1('Please Enter your User name');
    return;
  }
  if (!password || password.trim() === '') {
    setError2('Please Enter your password');
    return;
  }
 }
 
 return (

  <View style={styles.home}>

  <View style={styles.slideImageContainer}>

  </View>



  <View style={styles.loginHome}>
  <View style={styles.formLogin}>
  <View style={styles.joinInput}>
  <Icon name="user" size={24} color='#000' />
  <TextInput value={user_name} placeholder="User name" style={styles.input} onChangeText={setUser_name}
  returnKeyType="next" textContentType="user name" />
  </View>
  {error1 && (<Text style={{fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}
  
  <View style={styles.joinInput}>
  <Icon name="lock" size={24} color='#000' />
  <TextInput value={password} placeholder="Password" style={styles.input} onChangeText={setPassword}
  returnKeyType="done" textContentType="password" secureTextEntry={eye} />

  <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)}>
  <Icon name={eye ? 'eye-slash' : 'eye'} size={24} color='#000'/>
  </TouchableOpacity>
  </View>
  {error2 && (<Text style={{fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}
  <TouchableOpacity onPress={Toggle}>
  <Text style={{fontWeight: 'bold', color: 'royalblue'}}>Don't Have and account? sign Up</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.submit} onPress={getLogin}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Login</Text>
  </TouchableOpacity>
  </View>
  </View>
  </View>
 )
}

const styles = StyleSheet.create({
    home: {flex: 1, backgroundColor: 'royalblue', position: 'relative'},
    loginHome: {backgroundColor: '#fff', height: '70%', padding: 20, position: 'absolute', bottom: 0, left: 0,
    width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: '#000', shadowOpacity: 2,
    shadowOffset: {width: 0, height: 2}, shadowRadius: 5, elevation: 5},

    formLogin: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column', textAlign: 'center',
    justifyContent: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 2,
    shadowRadius: 5, elevation: 5, borderRadius: 20, gap: 10, padding: 10},

    joinInput: { height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row', borderWidth: 2, borderColor: 'gray', padding: 10, gap: 10, borderRadius: 10},

    input: {height: 40, width: '90%', position: 'relative', fontSize: 18, fontWeight: 'bold'},
    eye: {position: 'absolute', right: 10, zIndex: 2, height: 60, width: 55, backgroundColor: '#e6f0fa',
    textAlign: 'center', alignItems: 'center', justifyContent: 'center'
    },

    submit: {backgroundColor: '#00cc99', height: 60, width: '100%', padding: 10, borderTopLeftRadius: 20,
    borderBottomRightRadius: 20, textAlign: 'center', alignItems: 'center', justifyContent: 'center'
    }
})