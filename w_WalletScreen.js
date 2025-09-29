import React, { useState } from 'react';
import { View, Text, Button, Header, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';



export const Wallet =  () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);
 const { user, getLanguage } = useContext(UserContext);



 const get = () => {
  getLanguage('ha')
}
 return (
 <View style={styles.App}>
 <View style={styles.header1}>
  <TouchableOpacity style={styles.back} onPress={() =>
    {setShowSTRender()}}>
    <Ionicons name='chevron-back-outline' size={30} color='#000'/>
  </TouchableOpacity>
 <Text style={{fontSize: 15, fontWeight: 'bold'}}>Wallet</Text>
 </View>





 {/*-----------------------home-----------------------------*/}

 <View style={styles.home}>

 <View style={styles.wallet}>
  <Text style={{fontSize: 15, fontWeight: 'bold'}}>My Balance</Text>
 <Text style={{fontSize: 15, fontWeight: 'bold'}}>&#8358; {user.balance.toLocaleString('en-NG', {
  maximumFractionDigits: 2, minimumFractionDigits: 2
 })}</Text>
 </View>


 <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', padding: 10,
  justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#fff',
  borderTopLeftRadius: 20, borderBottomRightRadius: 20, gap: 10}}>

 <TouchableOpacity style={styles.transferBtn}>
 <Icon name='user-o' size={20} color='gray' />
 <Text style={{fontSize: 10, fontWeight: 'bold'}}>To Friens</Text>
 </TouchableOpacity>
    
 <TouchableOpacity style={styles.transferBtn} onPress={get}>
 <Icon name='bank' size={20} color='gray' />
 <Text style={{fontSize: 10, fontWeight: 'bold'}}>Withdraw</Text>
 </TouchableOpacity>
  </View>


   </View>
   </View>
   )};



const styles = StyleSheet.create({
 App: { backgroundColor: '#ddd', flexDirection: 'column', gap: 10},    

 header1: {height: 90, width: '100%', textAlign: 'center', borderBottomRightRadius: 20, 
 padding: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', borderBottomLeftRadius: 20,
 position: 'relative'},

 back: {position: 'absolute', left: 18},









 home: {height: '100%', width: '100%', padding: 20, gap: 20},

 wallet: {backgroundColor: '#fff', height: 150, width: '100%', padding: 20, borderBottomRightRadius: 20,
 borderTopLeftRadius: 20, flexDirection: 'column', paddingHorizontal: 20, paddingVertical: 15, gap: 30},



 transferBtn: {backgroundColor: '#00cc99', height: 60, width: '45%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', flexDirection: 'column', borderRadius: 10, gap: 10} 
});