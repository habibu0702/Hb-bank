import React, { useState } from 'react';
import { View, Text, Button, Header, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import { UserContext } from './context';



function WalletScreen () {
const { user, deposit, withdraw } = useContext(UserContext);



const get = () => {
  deposit(100000);
}
 return (
 <View style={styles.page2}>

 <View style={styles.header2}>
 <Text style={styles.text}>Wallet</Text>
 </View>

 <View style={styles.page2Container}>

 <View style={styles.wallet2}>
  <Text style={{fontSize: 15, fontWeight: 'bold'}}>My Balance</Text>
 <Text style={{fontSize: 15, fontWeight: 'bold'}}>&#8358; {user.balance.toLocaleString('en-NG', {
  maximumFractionDigits: 2, minimumFractionDigits: 2
 })}</Text>
 </View>


 <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', padding: 10,
  justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#e6f0fa',
  borderTopLeftRadius: 20, borderBottomRightRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 2},
  shadowOpacity: 2, shadowRadius: 5, elevation: 5}}>

 <TouchableOpacity style={styles.transferBtn}>
 <Icon name='user-o' size={20} color='gray' />
 <Text style={{fontSize: 10, fontWeight: 'bold'}}>To Friens</Text>
 </TouchableOpacity>
    
 <TouchableOpacity style={styles.transferBtn} onPress={get}>
 <Icon name='bank' size={20} color='gray' />
 <Text style={{fontSize: 10, fontWeight: 'bold'}}>Withdraw</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.transferBtn}>
 <Icon name='credit-card-alt' size={20} color='gray' />
 <Text STYLE={{fontSize: 10, fontWeight: 'bold'}}>ATM</Text>
 </TouchableOpacity>
  </View>


   </View>
   </View>
   )};



const styles = StyleSheet.create({
 page2: { backgroundColor: '#ddd', flexDirection: 'column',
 gap: 10
 },    

 header2: {backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center', borderBottomRightRadius: 20, 
 padding: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', borderBottomLeftRadius: 20
 },   text: {fontSize: 20, fontWeight: 'bold'},

 page2Container: {height: '100%', width: '100%', padding: 20, gap: 20},

 wallet2: {backgroundColor: '#e6f0fa', height: 150, width: '100%', padding: 20, borderBottomRightRadius: 20,
 borderTopLeftRadius: 20, boxShadow: '0 0 10px rgba(0,0,0,0.30)',
 flexDirection: 'column', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 4, shadowColor: '#000',
 paddingHorizontal: 20, paddingVertical: 15, gap: 30},

 transferBtn: {height: 60, width: 60, textAlign: 'center', alignItems: 'center', justifyContent: 'center',
 flexDirection: 'column', gap: 10} 
});

export default WalletScreen;