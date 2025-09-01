import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity, Platform, Animated } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';




export const SignUpForm = () => {
 const setSyncForm = userStore(state => state.setSyncForm);
 const [eye, setEye] = useState(true);


 const bounce = useRef(new Animated.Value(0)).current;
 useEffect(() => {
    Animated.spring(bounce, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true
    }).start();
 }, []);

 

 return (
    <Animated.View style={[styles.Home, {transform: [{scale: bounce}]}]}>
    <View style={styles.header1}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>Create Account</Text>
    </View>

    <ScrollView style={{flex: 1, padding: 20}}>
        <View style={styles.form1}>
            <TextInput value={null} placeholder='full name' onChangeText={null} returnKeyType='go'
            textContentType='familyName' style={styles.input1}/>

            <TextInput value={null} placeholder='username' onChangeText={null} returnKeyType='go'
            textContentType='name' style={styles.input1}/>

            <TextInput value={null} placeholder='Mobile Phone' onChangeText={null} returnKeyType='go'
            textContentType={Platform.OS === 'android' ? 'telephoneNumber' : 'telephoneNumber'} 
            keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'} style={styles.input1}/>

            <TextInput value={null} placeholder='Password' onChangeText={null} returnKeyType='go'
            textContentType='newPassword' secureTextEntry={eye} style={styles.input1}/>

            <TextInput value={null} placeholder='Re-Enter-Password' onChangeText={null} returnKeyType='done'
            textContentType='newPassword' secureTextEntry={eye} style={styles.input1}/>

            <TouchableOpacity style={styles.submit_btn}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Next</Text>
            </TouchableOpacity>
        </View>

            <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', 
            flexDirection: 'row', justifyContent: 'center', padding: 10, gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>You Have An Account?</Text>
            <TouchableOpacity style={styles.back} onPress={() => setSyncForm()}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Login Now</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
    </Animated.View>
 )
}



const styles = StyleSheet.create({
    Home: {backgroundColor: 'ivory', flex: 1, borderRadius: 20},

    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 20},


    form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column', gap: 10,
    padding: 10, borderRadius: 20, marginBottom: 15},

    input1: {height: 50, width: '100%', padding: 10, borderWidth: 2, borderColor: '#fff', borderRadius: 10,
    fontSize: 15, fontWeight: 'bold'},

    submit_btn: {backgroundColor: '#00cc99', height: 60, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20}
})