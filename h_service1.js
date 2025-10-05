import { View, Text, TextInput, StyleSheet, Image, useColorScheme, Alert } from 'react-native';
import { TouchableOpacity, Keyboard, Dimensions, StatusBar } from 'react-native';
import { Animated, Platform, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/FontAwesome';
import { useRef, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { AppLoading } from './s_load_spin';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { Network } from './t_network';
import moment from 'moment';
import axios from 'axios';



export const Service1 = () => {
   const setShowRender = userStore(state => state.setShowRender);
   const { user, setIsSpin, darkMode } = useContext(UserContext);
   const { setShow_render } = useContext(UserContext);
   const [active, setActive] = useState('');


   const [network_id, setNetwork_id] = useState('');
   const [phone_number, setPhone_number] = useState('');
   const [amount, setAmount] = useState('');
   const [error1, setError1] = useState('');
   const [error2, setError2] = useState('');
   const [error3, setError3] = useState('');
   const [visible, setVisible] = useState(false);
   const [vis, setVis] = useState(false);
   
   const [data, setData] = useState(null);
   const [err, setErr] = useState(null);
   const [spin, setSpin] = useState(false);

   const date = Date.now();




   const navigator = useNavigation();
   const back = () => {
      navigator.goBack();
   }

   const go = () => {
      navigator.navigate('MoPay', {screen: 'History'});
   }


   



   const check_phone = (value) => {
      const clean = value.replace(/\s/g, '')
      setPhone_number(clean);
      if (!/^(?:\+234|0)[789][01]\d{8}$/.test(clean)) {
         return setError2('please Enter a valid Phone Number')
      }
      setError2('');
      Keyboard.dismiss();
      return;
   }

   const check_amount = (value) => {
      setAmount(value);
      const max = 5000;
      const min = 100;
      if (value < min) {
         return setError3('amount must be at less than 100 naira')
      }
      if (value > max) {
         return setError3('maximum amount 5k');
      }

      setError3('');
      return true;
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
      if (!/^(?:\+234|0)[789][01]\d{8}$/.test(phone_number)) {
         return setError2('please Enter a valid Phone Number')
      }
      if (network_id && phone_number && amount) {
         setVis(true);
      }
      setError1('');
      setError2('');
      setError3('');
      return;
   }







   const buy_now = async () => {
      const net = await NetInfo.fetch();
      if (!net.isConnected || !net.isInternetReachable) {
         setVis(true); setActive('2'); setErr('Unable to connect Please try again later');
         return;
      }

      setSpin(true); setVis(false);

      try {
         const response = await axios.post('https://maskawasubapi.com/buy/data', {
            "network_id": network_id.id,
            "phone_number": phone_number,
            "type": "vtu"
         },
      {
         timeout: 8000,
         headers: {
            "Content-Type": "application/json"
         }
      });
      if (response.data) {
         setData(response.data); setActive('2'); setVis(true);
      }
      return;
      } catch (err) {
         if (err) {
            setErr(err.message); setActive('2'); setVis(true);
         }
         return;
      } finally {
         setSpin(false);
      }
   }















   useEffect(() => {
      if (network_id) {
         return setError1('');
      }
      return;
   }, [network_id]);






 const screnWidth = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(screnWidth)).current;

   useEffect(() => {
      const timer = setTimeout(() => {
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
   }, 100);
   return () => clearTimeout(timer);
   }, [vis]);
 




 return (
    <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>

    {/*---------------------------------header---------------------------*/}
    <View style={[styles.header, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <TouchableOpacity style={styles.back} onPress={() => back()}>
    <Ionicons name="arrow-back-outline" size={30} color='blue'/>
    </TouchableOpacity>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
    Buy Airtime</Text>

    <TouchableOpacity style={styles.transaction} onPress={() => go()}>
    <Icon name="book" size={20} color={darkMode ? '#000' : 'ivory'}/>
    </TouchableOpacity>
    </View>






   
   {/*-------------------------------------home----------------------------*/}
    <View style={[styles.home_container]}>
    <View style={[styles.form1, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    <View style={styles.image_container}>
   {Network.map((item) => (
    <TouchableOpacity key={item.id} style={[styles.synbol, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}
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
    inputMode="numeric" keyboardType='numeric' textContentType='number' placeholderTextColor='gray'
    style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
    {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}




    <TextInput value={amount} placeholder='100-5000' onChangeText={check_amount} returnKeyType='done'
    keyboardType='numeric' placeholderTextColor='gray' style={[styles.input,
    {color: darkMode ? '#000' : 'ivory'}]}/>
    {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

    <TouchableOpacity style={styles.submit} onPress={() =>
    {Keyboard.dismiss(); check_other(); setActive('1')}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </View>
    </View>








    {/*---------------------------ovar-lay---------------------------*/}
    {visible && (
    <View style={styles.overLay}>
     
    <TouchableWithoutFeedback onPress={() => setVis(false)}>
      <View style={{height: '50%', width: '100%'}}></View>
    </TouchableWithoutFeedback>
    


    {/*-------------------------------active-1--------------------------*/}
    {active === '1' && (
    <Animated.View style={[styles.other_container, {transform: [{translateY: slide}],
    backgroundColor: darkMode ? '#fff' : '#000', textAlign: 'center', alignItems: 'center', padding: 10}]}>

    <Image source={network_id.logo} resizeMode="cover" style={styles.image1}/>
    
    


    {/*------------------------------other----------------------------*/}
    <View style={{textAlign: 'left', justifyContent: 'space-between', flexDirection: 'row', width: '100%', padding: 20,
    marginBottom: 10}}>

    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly',
    textAlign: 'left', gap: 15}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Network</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Phone Number</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Amount</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>time</Text>
    </View>


    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly',
    gap: 15}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{network_id.id}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{phone_number}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{amount} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{moment(date).format('hh:mm A, MMM D')}</Text>
    </View>
    </View>


    {/*------------------------------bottom----------------------------------*/}
    <TouchableOpacity style={{height: 50, width: '90%', textAlign: 'center', alignItems: 'center', 
    justifyContent: 'center', backgroundColor: '#00cc99', borderTopLeftRadius: 20,
    borderBottomRightRadius: 20}} onPress={() => {buy_now()}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>

    </Animated.View>
    )}






    {/*--------------------------active-2-----------------------------*/}
    {active === '2' && (
    <Animated.View style={{height: '100%', width: '100%', backgroundColor: darkMode ? '#ddd' : '#000',
    flexDirection: 'column', transform: [{translateX: slide}]}}>

    {/*--------------------------------------thead-----------------------------------*/}
    <View style={{height: 100, width: '100%', position: 'relative', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'}}>
      <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => {setVis(false)}}>
         <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>Done</Text>
      </TouchableOpacity>
    </View>




    {/*----------------------------home-error------------------------------*/}
    {err && (<View style={{height: '60%', width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', flexDirection: 'column', gap: 20}}>
    <Ionicons name='warning-outline' size={50} color='red'/>

    <View style={{height: 'auto', width: 100, backgroundColor: darkMode ? 'rgba(25,25,25,0.20)' : '#2a2a2a',
    borderRadius: 10, flexDirection: 'column', textAlign: 'center', alignItems: 'center', flexWrap: 'wrap', padding: 10}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', gap: 10}}>{err}</Text>
    </View>

    <TouchableOpacity style={{backgroundColor: darkMode ? 'rgba(29, 63, 53, 0.2)' : '#2a2a2a',
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, height: 40,
    width: 100}} onPress={() => {buy_now()}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>On Refresh</Text>
    </TouchableOpacity>
    </View>)}
    
    


    {/*---------------------------home-success------------------------------*/}
    {data && (<View></View>)}
    </Animated.View>
    )}
    </View>
    )}






    {spin && (<View style={styles.spin}><AppLoading/></View>)}


    </View>
 )
}



const styles = StyleSheet.create({
 App: {backgroundColor: '#ddd', position: 'relative', flex: 1, zIndex: 4},

 header: {height: 55, width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 5},

 back: {height: 25, width: 30, position: 'absolute', left: 20, bottom: 2},

 transaction: {height: 'auto', width: 'auto', position: 'absolute', right: 20},





 home_container: {flexDirection: 'column', padding: 30, gap: 5, textAlign: 'center', alignItems: 'center'},
 form1: {backgroundColor: '#fff', height: 'auto', width: '100%', textAlign: 'left',
 padding: 10, borderRadius: 10, justifyContent: 'center', gap: 10},

 image_container: {height: 'auto', width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
 justifyContent: 'space-between'},
 synbol: {height: 60, width: 60, backgroundColor: '#fff', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', borderRadius: 10, position: 'relative'},
 image: {height: 60, width: 60, borderRadius: 10},


 selected: {backgroundColor: 'rgba(25,25,25,0.80)', height: 60, width: 60, position: 'absolute',
 left: 0, right: 0, bottom: 0, zIndex: 10, borderRadius: 5, textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 10},


 input: {height: 50, width: '100%', padding: 10, fontSize: 12, fontWeight: 'bold',
 borderColor: 'gray', borderWidth: 2, borderRadius: 10},

 submit: {backgroundColor: '#00cc99', height: 50, width:'100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'center', padding: 10, borderTopLeftRadius: 20, borderBottomRightRadius: 20},








 

 overLay: {backgroundColor: 'rgba(25,25,25,0.80)', position: 'absolute', left: 0, right: 0, bottom: 0,
 top: 0, justifyContent: 'flex-end', height: '100%', width: '100%', zIndex: 5, flexDirection: 'column'},

 other_container: {backgroundColor: '#fff', height: 'auto', flexDirection: 'column', borderTopLeftRadius: 40,
 borderTopRightRadius: 40, position: 'relative', zIndex: 5, maxHeight: '50%'},


 image1: {height: 40, width: 40, borderRadius: 50, marginBottom: 5},






 spin: {position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, flex: 1, zIndex: 100}
})