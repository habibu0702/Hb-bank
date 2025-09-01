import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';




export const Send_Zpay = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { user } = useContext(UserContext);


 return (
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>Withdraw To Only Zpay</Text>
    </View>

    <View style={styles.container1}>
    <View style={styles.form1}>
    <TextInput value={null} placeholder='User ID -123456789' keyboardType='numeric' style={styles.input}/>
    <TouchableOpacity style={styles.check_btn}>
    <Text>Check ID</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
 )
}


const styles = StyleSheet.create({
 Home: {backgroundColor: '#000', position: 'relative', height: '100%', width: '100%'},

 header1: {backgroundColor: 'rgba(255,255,255,0.60)', height: 70, width: '100%', position: 'relative',
 textAlign: 'center', alignItems: 'center', justifyContent: 'flex-end', borderRadius: 10, padding: 15},

 back: { height: 30, width: 30, fontSize: 15, fontWeight: 'bold', position: 'absolute', left: 20, bottom: 8},

 container1: {flexDirection: 'column', gap: 20, padding: 20},
 form1: {backgroundColor: 'rgba(190, 186, 186, 1)', height: 'auto', width: '100%', flexDirection: 'column', gap: 10,
 borderRadius: 10, padding: 10},
 input: {height: 60, width: '100%', borderRadius: 10},
 check_btn: {backgroundColor: '#00cc99', height: 60, width: '100%', borderRadius: 10, textAlign: 'center',
 alignItems: 'center', justifyContent: 'center'}
})