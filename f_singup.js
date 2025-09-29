import { View, Text, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import { ScrollView, TouchableOpacity, Platform, Animated } from 'react-native';
import { ActivityIndicator, Vibration } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import axios from 'axios';
import * as Haptics from 'expo-haptics';




export const SignUpForm = () => {
 const { setSyncForm } = useContext(UserContext);
 const { register } = useContext(UserContext);
 const [eye, setEye] = useState(true);




 const [full_name, setFull_name] = useState('');
 const [user_name, setUser_name] = useState('');
 const [phone_number, setPhone_number] = useState('');
 const [password, setPassword] = useState('');
 const [try_password, setTry_password] = useState('');
 const [loadin, setLoadin] = useState(false);


 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');
 const [error3, setError3] = useState('');
 const [error4, setError4] = useState('');
 const [error5, setError5] = useState('');
 




 const ref1 = useRef();
 const ref2 = useRef();
 const ref3 = useRef();
 const ref4 = useRef();
 const ref5 = useRef();






 const checkName1 = (value) => {
    setFull_name(value);
    if (!/^[A-Za-z]{4,}(?: [A-Za-z]{4,})+$/.test(value.trim())) {
        setError1('Please Enter a valid Full Name');
        return false;
    }
    setError1('');
    return true;
 }


 

 const checkName2 = (value) => {
    setUser_name(value);
    if (!/^[a-zA-Z0-9._]{4,}$/.test(value)) {
        return setError2('Please Enter a shoot User Name');
    }
    return setError2('');
 }



 const checkNum = (value) => {
    const clean = value.replace(/\s/g, '');
    setPhone_number(clean);
    if (!/^(\+234|0)[789][01][0-9]{8}$/.test(clean)) {
        return setError3('please Enter a valid Phone Number');
    }
    return setError3('');
 }



 const chePass1 = (value) => {
    setPassword(value);
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
        return setError4('Password must be at least 8 characters include a number and an uppercase letter! example| join12@A');
    }
    setError4('');
    return;
 }



 const checkPass2 = (value) => {
    setTry_password(value);
    if (password !== value) {
        return setError5('password doest Not Match');
    }
    return setError5('');
 }







 const addUser = async () => {
    if (!full_name || full_name.trim() === '') {
        return setError1('Full Name Is Required');
    }
    if (!user_name || user_name.trim() === '') {
        return setError2('UserName Is Required');
    }
    if (!phone_number || phone_number.trim() === '') {
        return setError3('Please Enter your phone number');
    }
    if (!password || password.trim() === '') {
        return setError4('Please Enter your password');
    }
    if (try_password !== password || try_password === password.trim() === '') {
        return setError5('Please Re-Enter Your password')
    }

     if (!/^[A-Za-z]{4,}(?: [A-Za-z]{4,})+$/.test(full_name.trim())) {
        setError1('Please Enter a valid Full Name');
        return false;
    }
     if (!/^[a-zA-Z0-9._]{4,}$/.test(user_name)) {
        return setError2('Please Enter a shoot User Name');
    }
     if (!/^(\+234|0)[789][01][0-9]{8}$/.test(phone_number)) {
        return setError3('please Enter a valid Phone Number');
    }
    if (!full_name || !user_name || !phone_number || !password || !try_password) {
        return;
    }
    const image = '' || '';
    const data = {full_name: full_name, userName: user_name, phone: phone_number, password: password, image: image};
    setLoadin(true); 
        if (data) {
            register(data);
            Alert.alert('12345');
            setTimeout(() => {
                setLoadin(false);
            }, 3000);
        }
 }







 const bounce = useRef(new Animated.Value(0)).current;
 useEffect(() => {
    Animated.spring(bounce, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true
    }).start();
 }, []);





 const haptic = async () => {
     await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
     if (Platform.OS === 'android') {
       Vibration.vibrate(10);
     }
   }

 

 return (
    <Animated.View style={[styles.Home, {transform: [{scale: bounce}]}]}>
    <LinearGradient style={{height: '100%', width: '100%', borderRadius: 20}} colors={['ivory', '#000']}>
    <View style={styles.header1}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
    Create Account
    </Text>
    </View>

    <ScrollView style={{flex: 1, padding: 20}}>
        <View style={styles.form1}>

            <View style={styles.join}>
            <Icon name='user' size={20} color='#000'/>
            <TextInput value={full_name} placeholder='First name & Last name' onChangeText={checkName1}
            returnKeyType='go' textContentType='name' style={styles.input1} onSubmitEditing={() => ref2.current?.focus()}/>
            </View>
            {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

            <View style={styles.join}>
            <Icon name='user-o' size={20} color='#000'/>
            <TextInput value={user_name} placeholder='username' onChangeText={checkName2} returnKeyType='go'
            textContentType='name' style={styles.input1} ref={ref2} onSubmitEditing={() => ref3.current.focus()}/>
            </View>
            {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

            <View style={styles.join}>
            <Icon name='phone' size={20} color='#000'/>
            <TextInput value={phone_number} placeholder='Mobile Phone Number' onChangeText={checkNum} returnKeyType='go'
            textContentType={Platform.OS === 'android' ? 'telephoneNumber' : 'telephoneNumber'} maxLength={11}
            inputMode={Platform.OS === 'android' ? 'number-pad' : 'numeric'} style={styles.input1} ref={ref3}
            onSubmitEditing={() => ref4.current.focus()}/>
            </View>
            {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

            <View style={styles.join}>
            <Icon name='lock' size={20} color='#000'/>
            <TextInput value={password} placeholder='Password' onChangeText={chePass1} returnKeyType='go'
            textContentType='newPassword' secureTextEntry={eye} style={styles.input1} maxLength={20}/>
            <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)} ref={ref4}
            onSubmitEditing={() => ref5.current.focus()}>
            <Icon name={eye ? 'eye-slash' : 'eye'} size={20} color='#000'/>
            </TouchableOpacity>
            </View>
            {error4 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error4}</Text>)}

            <View style={styles.join}>
            <Icon name='lock' size={20} color='#000'/>
            <TextInput value={try_password} placeholder='Re-Enter your Password' onChangeText={checkPass2}
            returnKeyType='done' textContentType='newPassword' secureTextEntry={eye} style={styles.input1}
            maxLength={20} ref={ref5}/>
            </View>
            {error5 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error5}</Text>)}

            <TouchableOpacity style={styles.submit_btn} onPress={() => addUser()}>
            {loadin ? <ActivityIndicator size='small' color='#fff'/>
            : <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Next</Text> }
            </TouchableOpacity>
        </View>

            <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', 
            flexDirection: 'row', justifyContent: 'center', padding: 10, gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'ivory'}}>Already Have An Account?</Text>
            <TouchableOpacity style={styles.back} onPress={() => {setSyncForm(true); haptic()}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Login Now</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
    </LinearGradient>
    </Animated.View>
 )
}



const styles = StyleSheet.create({
    Home: {backgroundColor: 'transparent', flex: 1, borderRadius: 20},

    header1: {backgroundColor: 'transparent', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 20},


    form1: {backgroundColor: 'rgba(255,255,255,0.30)', height: 'auto', width: '100%', flexDirection: 'column', gap: 10,
    padding: 10, borderRadius: 20, marginBottom: 15},

    join: {height: 50, width: '100%', textAlign: 'left', alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row', borderWidth: 2, borderColor: '#fff', gap: 10, padding: 10,
    borderRadius: 10, position: 'relative'},

    input1: {height: 50, width: '100%', fontSize: 15, fontWeight: 'bold'},

    eye: {position: 'absolute', right: 8, height: 50, width: 40, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'},

    submit_btn: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20}
})