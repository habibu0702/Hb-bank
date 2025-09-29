import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';




export const Send_Zpay = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { user, darkMode } = useContext(UserContext);
 const [recipient, setRecipient] = useState('');
 const [error, setError] = useState('');



 const haptic = async () => {
   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
 }

 const speak = () => {
   const status = "transaction successful";
   Speech.speak(status, {
      language: 'en-US',
      pitch: 0.9,
      rate: 0.9
   })
 }



 const send = async () => {
   if (!recipient || recipient.trim() === '') {
      return setError('recipient Is required');
   }
   Alert.alert('success');
   haptic();
   speak();
   return;
 }


 return (
    <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
      <BlurView intensity={1000} tint="light" style={{height: '100%', width: '100%'}}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Send To MoPay</Text>
    </View>




    {/*--------------------------home---------------------------*/}

    <View style={styles.home}>
    <View style={[styles.form1, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Recipient Account</Text>
    <TextInput value={recipient} placeholder='User ID example-1234' inputMode='numeric'
    textContentType="number" onChangeText={setRecipient} placeholderTextColor='gray'
    style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
    {error && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error}</Text>)}


    <TouchableOpacity style={styles.check_btn} onPress={() =>
      {send(); Keyboard.dismiss()}}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Next</Text>
    </TouchableOpacity>
    </View>
   

    <View style={[styles.table, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
      <View style={{flexDirection: 'row', padding: 10, gap: 15, width: '100%', borderBottomWidth: 1}}>
         <TouchableOpacity style={styles.recent_btn}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Recent</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.recent_btn}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Favorites</Text>
         </TouchableOpacity>
      </View>
    </View>
    </View>
    </BlurView>
    </View>
 )
}


const styles = StyleSheet.create({
 App: {position: 'relative', height: '100%', width: '100%'},

 header1: {height: 70, width: '100%', position: 'relative', textAlign: 'center', alignItems: 'center',
 justifyContent: 'flex-end', borderRadius: 10, padding: 15},

 back: { height: 30, width: 30, fontSize: 15, fontWeight: 'bold', position: 'absolute', left: 20, bottom: 8},










 home: {flexDirection: 'column', gap: 20, padding: 20},

 form1: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column', gap: 5,
 borderRadius: 10, padding: 10, textAlign: 'left', justifyContent: 'center'},

 input: {height: 50, width: '100%', fontSize: 15, fontWeight: 'bold', borderRadius: 10},

 check_btn: {backgroundColor: '#00cc99', height: 60, width: '100%', borderRadius: 10, textAlign: 'center',
 alignItems: 'center', justifyContent: 'center'},





 table: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column', minHeight: 200,
 borderRadius: 10},

 recent_btn: {height: 'auto', width: 'auto', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
 padding: 5}
})