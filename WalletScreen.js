import React, { useState } from 'react';
import { View, Text, Button, Header, StyleSheet} from 'react-native';
import { useContext } from 'react';
import { UserContext } from './context';



function WalletScreen () {
const { user } = useContext(UserContext);


 return (
 <View style={styles.page2}>

 <View style={styles.header2}>
 <Text style={styles.text}>soon</Text>
 </View>

 <View style={styles.page2Container}>

 <View style={styles.wallet2}>
   <Text>{user.balance}</Text>
   <Text>Soon</Text>
   <Text>Soon</Text>
   </View>


   </View>
   </View>
   )};



const styles = StyleSheet.create({
 page2: { backgroundColor: '#ddd', flexDirection: 'column',
 gap: 10
 },    

 header2: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'left', borderBottomRightRadius: 20, 
 padding: 20, alignItems: 'left', justifyContent: 'center', fontWeight: 'bold', borderBottomLeftRadius: 20
 },   text: {fontSize: 20, fontWeight: 'bold'},

 page2Container: {height: '100%', width: '100%', padding: 20},

 wallet2: {backgroundColor: '#00cc99', height: 150, width: '100%', padding: 10, borderBottomRightRadius: 20,
 borderTopLeftRadius: 20, boxShadow: '0 0 10px rgba(0,0,0,0.30)',
 flexDirection: 'column', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 4, shadowColor: '#000',
 paddingHorizontal: 20, paddingVertical: 15
 }
});

export default WalletScreen;