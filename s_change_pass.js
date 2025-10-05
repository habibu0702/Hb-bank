import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { ActivityIndicator, Vibration } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import axios from 'axios';
import * as Haptics from 'expo-haptics';



export const App_pass = () => {
    const [eye, setEye] = useState(true);
    const { darkMode } = useContext(UserContext);



    const [last_password, setLast_password] = useState('');
    const [new_password, setNew_password] = useState('');
    const [try_password, setTry_password] = useState('');
    const [loadin, setLoadin] = useState(false);


    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');






    const haptic = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        if (Platform.OS === 'android') {
            Vibration.vibrate(10);
        }
    }








    const update_pass = async () => {
        if (!last_password || last_password.trim() === '') {
            return setError1('Password Is required');
        }
        if (!new_password || new_password.trim() === '') {
            return setError2('new password Is required');
        }
        if (new_password !== try_password || new_password === try_password.trim() === '') {
            return setError3('Re-Enter password Is required');
        }

        setLoadin(true);
        haptic();

        try {
            const response = await axios.post('https://172.30.3:5000/008812/update', {
                "last_password": last_password,
                "new_password": new_password,
            },
        {
            headers: {
                "Content-Type": "application/json"
            }
        });
        setError1(''); setError2(''); setError3('');
        console.log('successful', response.data);
        return;
        } catch (err) {
            console.log('something wont wrown please try againg latter');
            return;
        } finally {
            setLoadin(false);
            haptic();
        }
    }


    return (
        <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
        
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        style={styles.Home}>
            <View style={[styles.form, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
                <TextInput value={last_password} placeholder='Enter Last Password' onChangeText={setLast_password}
                returnKeyType='go' textContentType="password" keyboardType="visible-password"
                style={styles.input}/>
                {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}
                
                <View style={styles.eye_btn}>
                <TextInput value={new_password} placeholder='New Password' onChangeText={setNew_password}
                returnKeyType='go' textContentType="password" keyboardType="visible-password"
                secureTextEntry={eye}
                style={{height: 50, width: '90%'}}/>
                </View>
                {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

                <TextInput value={try_password} placeholder='Re-Enter Passsord' onChangeText={setTry_password}
                returnKeyType='go' textContentType="password" keyboardType="visible-password"
                secureTextEntry={eye}
                style={styles.input}/>
                {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

                <TouchableOpacity style={styles.update} onPress={update_pass}>
                    {loadin ?
                    <>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>Update...</Text>
                    <ActivityIndicator size="small" color="#000"/>
                    </>
                    :
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Update</Text>}
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles = StyleSheet.create({
    App: {height: '100%', width: '100%'},
    


   
    Home: {flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 20, height: '60%'},

    form: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', borderRadius: 20, padding: 10, gap: 10},

    eye_btn: {height: 50, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row', padding: 10, borderRadius: 10, borderWidth: 2, borderColor: '#fff'},

    input: {height: 50, width: '100%', borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 10,
    fontSize: 16, fontWeight: 'bold'},

    update: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, gap: 15}
})