import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, Keyboard, Dimensions } from 'react-native';
import { Animated, Platform } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { Network } from './t_network';



export const Service1 = () => {
   const setShowRender = userStore(state => state.setShowRender);
   const { user } = useContext(UserContext);
   const { setShow_render } = useContext(UserContext);


   const [network_id, setNetwork_id] = useState('');
   const [phone_number, setPhone_number] = useState('');
   const [amount, setAmount] = useState('');
   const [error1, setError1] = useState('');
   const [error2, setError2] = useState('');
   const [error3, setError3] = useState('');
   const [visible, setVisible] = useState(false);
   const [vis, setVis] = useState(false);



   const check_phone = (value) => {
      setPhone_number(value);
      if (!/^(?:\+234|0)[789][01]\d{8}$/.test(value)) {
         return setError2('please Enter a valid Phone Number')
      }
      setError2('');
      Keyboard.dismiss();
      return;
   }


   const check_other = () => {
      if (!network_id) {
         return setError1('Network Is required');
      }

      if (!phone_number || phone_number.trim() === '') {
         return setError2('please Enter your phone number');
      }

      if (!amount || amount.trim() === '') {
         return setError3('Please Enter and amount');
      }

      if (amount.startsWith(0)) {
         return setError3('Invalid Amount');
      }

      if (amount < 100) {
         return setError3('Amount must be at last than 100 Naira');
      }

      if (amount > 5500) {
         return setError3('Amount Hight Limit 5000k');
      }
      if (network_id && phone_number && amount) {
         open();
      }
      setError1('');
      setError2('');
      setError3('');
      return;
   }





   useEffect(() => {
      if (network_id) {
         return setError1('');
      } else if (phone_number) {
         return setError2('');
      } else if (amount) {
         return setError3('');
      }
      return;
   });









 const screnWidth = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(screnWidth)).current;
 
 const open = () => {
   setVis(true);
 }
 const close = () => {
   setVis(false);
 }
   useEffect(() => {
      if (vis) {
         setVisible(true);
         Animated.timing(slide, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
         }).start();
      } else {
         Animated.timing(slide, {
            toValue: screnWidth,
            duration: 300,
            useNativeDriver: true
         }).start(() => {
            setVisible(false);
         })
      }
   }, [vis]);
 


 return (
    <View style={styles.Home}>
    <View style={styles.header}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Buy Airtime</Text>
    </View>

    <View style={styles.home_container}>
    <View style={styles.form1}>
    <View style={styles.image_container}>
   {Network.map((item) => (
    <TouchableOpacity key={item.id} style={[styles.synbol]}
    onPress={() => setNetwork_id(item)}>
    <Image source={item.logo} style={styles.image} resizeMode='cover'/>

    {network_id === item && (
    <Animated.View style={[styles.selected]}>
    <Text>✅</Text>
    </Animated.View>)}
    </TouchableOpacity>
   ))}
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

    <TextInput value={phone_number} placeholder='Mobile Phone' onChangeText={check_phone} returnKeyType='done'
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'}
    textContentType={Platform.OS === 'android' ? 'telephoneNumber' : 'telephoneNumber'} style={styles.input}/>
    {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

    <TextInput value={amount} placeholder='100-5000' onChangeText={setAmount} returnKeyType='done'
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'}
    textContentType='flightNumber' style={styles.input}/>
    {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

    <TouchableOpacity style={styles.submit} onPress={() => {Keyboard.dismiss(); check_other();}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </View>
    </View>


    {visible && (
    <View style={styles.overLay}>
    <Animated.View style={[styles.other_container, {transform: [{translateY: slide}]}]}>
    <View style={styles.thead1}>
    <TouchableOpacity style={styles.close1} onPress={() => {close()}}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Close</Text>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#00cc99'}}>Other</Text>
    </View>

    </Animated.View>
    </View>
    )}

    </View>
 )
}



const styles = StyleSheet.create({
 Home: {backgroundColor: '#fff', position: 'relative', height: '100%', width: '100%'},
 header: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

 back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

 home_container: {flexDirection: 'column', padding: 20, gap: 5, textAlign: 'center', alignItems: 'center'},
 form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', textAlign: 'left',
 padding: 10, borderRadius: 10, justifyContent: 'center', gap: 10},

 image_container: {height: 'auto', width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
 justifyContent: 'space-between'},
 synbol: {height: 60, width: 60, backgroundColor: '#fff', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', borderRadius: 10, position: 'relative'},
 image: {height: 60, width: 60, borderRadius: 10},


 selected: {backgroundColor: 'rgba(25,25,25,0.80)', height: 60, width: 60, position: 'absolute',
 left: 0, right: 0, bottom: 0, zIndex: 10, borderRadius: 5, textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 10},


 input: {height: 50, width: '100%', padding: 10, fontSize: 15, fontWeight: 'bold',
 borderColor: 'gray', borderWidth: 2, borderRadius: 10},

 submit: {backgroundColor: '#00cc99', height: 60, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 10, borderRadius: 10},
 

 overLay: {backgroundColor: 'rgba(25,25,25,0.80)', position: 'absolute', left: 0, right: 0, bottom: 0,
 top: 0, justifyContent: 'flex-end', height: '100%', width: '100%'},

 other_container: {backgroundColor: '#fff', height: '60%', flexDirection: 'column', borderTopLeftRadius: 20,
 borderTopRightRadius: 20, padding: 10},

 thead1: {height: 40, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
 padding: 5, position: 'relative', borderBottomColor: '#00cc99', borderBottomWidth: 1, borderRadius: 20},
 close1: {position: 'absolute', left: 20}
})