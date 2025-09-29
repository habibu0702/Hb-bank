import { View, Text, TextInput, StyleSheet, ScrollView, Animated } from 'react-native';
import { TouchableOpacity, Platform, Image, Dimensions, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from './s_load_spin';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import { Bil_synbol } from './t_bill_synbol';
import * as Haptics from 'expo-haptics';
import moment from 'moment';
import axios from 'axios';



export const Service4 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { darkMode } = useContext(UserContext);
 const [bill_name, setBilname] = useState({id: 'kano eletricity'});
 const [type, setType] = useState('prepaid');
 const [number, setNumber] = useState('');
 const [amount, setAmount] = useState('');
 const [visible, setVisible] = useState(false);
 const [vis, setVis] = useState(false);
 const [active, setActive] = useState('');
 const [spin, setSpin] = useState(false);


 const [err, setErr] = useState(null);
 const [result, setResult] = useState('');



 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');
 const [error3, setError3] = useState('');
 const [error4, setError4] = useState('');

 const time = Date.now();


 let last = 0;
 const haptic = async () => {
 const now = Date.now();
 if (now - last > 500) {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    last = now;
 }
 }


 const GetType = (value) => {
    setType(value); haptic(); Keyboard.dismiss();
 }


 const open = (value) => {
    if (value === '1') {
    setVis(true); setActive(value); Keyboard.dismiss();
    } else if (value === '2') {
        if (!number || number.trim() === '') {
            return setError2('please Enter Your Meter Number');
        }
        if (!amount || amount.trim() === '') {
            return setError3('Please Enter amount');
        }
        setVis(true); setActive(value); Keyboard.dismiss();
        setError2(''); setError3('');
        return;
    }
 }





 const send = async () => {
    setSpin(true); setVis(false);

    try {
    const response = await axios.post('https://www.maskawasub.com/buy/cable', {
        "cable_name": bill_name.id,
        "type": type,
        "meter_number": number,
    },
  {
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
  });

   console.log(response.data);
   return;
    } catch (err) {
        setActive('3'); setVis('true'); setErr(err.message);
        return;
    } finally {
        setSpin(false);
    }
 }
 





 const screen = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(screen)).current;

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
            toValue: screen,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            setVisible(false);
        })
    }
 }, [vis]);



 return (
    <View style={[styles.App1, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={(() =>
    {setShowRender(false)})}>
    <Ionicons name='chevron-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>Pay Electricity Bill Now</Text>
    </View>




    

    {/*-----------------------------------------home-----------------------------*/}
    <View style={styles.home_container}>

    <View style={[styles.form1, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    <View style={styles.synbol_table}>
    <Image source={bill_name.logo ? bill_name.logo : require('./assets/kedco.png')} resizeMode='cover' style={styles.logo}/>
    <TouchableOpacity style={styles.select_btn} onPress={() => {open('1')}}>

    {bill_name.id ? <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
    {bill_name.id}</Text>
    :
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{bill_name.id}</Text>}

    {vis ? <Ionicons name="caret-up-outline" size={15} color='gray'/> :
     <Ionicons name='caret-down-outline' size={15} color='gray'/>}
    </TouchableOpacity>
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}


    {/*--------------------------------type------------------------------------*/}
    <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', gap: 10}}>
    
    <TouchableOpacity style={[{backgroundColor: darkMode ? '#ddd' : '#000', height: 40, width: '45%',
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20,
    borderBottomRightRadius: 20}, type === 'prepaid' && styles.type]} onPress={() => GetType('prepaid')}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>PrePaid</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[{backgroundColor: darkMode ? '#ddd' : '#000', height: 40, width: '45%',
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20,
    borderBottomRightRadius: 20}, type === 'postpaid' && styles.type]} onPress={() => GetType('postpaid')}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>PostPaid</Text>
    </TouchableOpacity>

    </View>



    <TextInput value={number} placeholder='meter number' onChangeText={setNumber} returnKeyType='Done'
    inputMode={Platform.OS === 'android' ? 'number-pad' : 'numeric'} placeholderTextColor="gray"
    style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
    {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}



    <TextInput value={amount} placeholder='amount' onChangeText={setAmount} returnKeyType='done'
    inputMode={Platform.OS === 'android' ? 'number-pad' : 'numeric'} placeholderTextColor="gray"
    style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
    {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}
    


    <TouchableOpacity style={styles.submit_btn} onPress={() => open('2')}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Next</Text>
    </TouchableOpacity>
    </View>
    </View>







    {/*--------------------------------over-lay-----------------------*/}
    {visible && (<View style={styles.overLay}>
    <TouchableWithoutFeedback onPress={() => setVis(false)}>
        <View style={{height: '50%', width: '100%'}}></View>
    </TouchableWithoutFeedback>
    


    {/*-------------------------active-2------------------------------*/}
    {active === '1' && (
    <Animated.View style={[styles.home_overLay, {transform: [{translateY: slide}],
    backgroundColor: darkMode ? '#fff' : '#000'}]}>


    {/*------------------------thead----------------------------------*/}
    <View style={styles.thead1}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Select Provider</Text>
    </View>


    {/*--------------------------biller-list--------------------------*/}
    <ScrollView style={{flexDirection: 'column', padding: 20, gap: 20}}>
    {Bil_synbol.map((item) => (
    <TouchableOpacity key={item.id} style={styles.name_btn} onPress={() =>
    {setBilname(item); setVis(false)}}>

    <Image source={item.logo} resizeMode='cover' style={styles.synbol_logo}/>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{item.id}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>
    )}





    {/*----------------------------------active-2-----------------------------*/}
    {active === '2' && (
    <Animated.View style={{backgroundColor: darkMode ? '#fff' : '#000', height: 'auto', width: '100%',
    borderTopLeftRadius: 20, borderTopRightRadius: 20, textAlign: 'center', alignItems: 'center',
    padding: 10, gap: 10, transform: [{translateY: slide}]}}>
    
    <Image source={bill_name.logo} resizeMode="cover" style={{height: 40, width: 40, borderRadius: 50,
    borderWidth: 1, borderColor: 'gray'}}/>

    <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 20}}>
    
    <View style={{height: 'auto', width:  'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 15}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>user</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>type</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Meter Number</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>amount</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>time</Text>
    </View>

    <View style={{height: 'auto', width:  'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 15}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{bill_name.id}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{type}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{number}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{amount} NGN</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{moment(time).format('hh: mm A, MMM D')}</Text>
    </View>
    </View>

    <TouchableOpacity style={{height: 45, width: '90%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', backgroundColor: '#00cc99', borderTopLeftRadius: 20,
    borderBottomRightRadius: 20}} onPress={() => {send()}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </Animated.View>)}





    {/*--------------------------active-3--------------------------------------*/}
    {active === '3' && (
        <Animated.View style={{backgroundColor: darkMode ? '#ddd' : '#000', height: '100%', width: '100%',
        transform: [{translateX: slide}]}}>

        <View style={{height: 80, width: '100%', textAlign: 'right', alignItems: 'center',
        flexDirection: 'row', justifyContent: 'right', padding: 20}}>

        <TouchableOpacity onPress={() => {setVis(false)}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>Done</Text>
        </TouchableOpacity>
        </View>


        {/*---------------------------------------err---------------------*/}
        {err && (
            <View style={{height: '60%', width: '100%', textAlign: 'center', alignItems: 'center',
            flexDirection: 'column', justifyContent: 'center', gap: 10}}>
            <Ionicons name="warning-outline" size={50} color='red'/>

            <View style={{height: 'auto', width: 100, textAlign: 'center', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', borderRadius: 10,
            padding: 10, gap: 10, backgroundColor: '#2a2a2a'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'red', textAlign: 'center',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10}}>{err}</Text>
            </View>
            </View>
        )}

        </Animated.View>
    )}

    </View>)}




     
    {spin && (
    <View style={{position: 'absolute', height: '100%', width: '100%', left: 0, right: 0, bottom: 0, top: 0}}>
    <AppLoading/></View>)}

    </View>
 )
}


const styles = StyleSheet.create({
    App1: {backgroundColor: '#ddd', height: '100%', width: '100%', position: 'relative'},
    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 10},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},







    home_container: {flexDirection: 'column', padding: 20},

    form1: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column', gap: 15,
    padding: 10, borderRadius: 10},

    synbol_table: {height: 50, width: '100%', borderWidth: 1, borderColor: 'gray', padding: 5, textAlign: 'center',
    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'nowrap', gap: 5,
    borderRadius: 10},

    select_btn: {height: 50, width: '90%', textAlign: 'left', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 15},

    logo: {height: 40, width: 40, borderRadius: 50, borderWidth: 1, borderColor: 'gray'},

    input: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 10,
    fontSize: 15, fontWeight: 'bold'},

    submit_btn: {backgroundColor: '#00cc99', height: 55, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', padding: 10, borderTopLeftRadius: 20, borderBottomRightRadius: 20},



    overLay: {backgroundColor: 'rgba(25,25,25,0.80)', position: 'absolute', height: '100%', width: '100%',
    left: 0, right: 0, bottom: 0, top: 0, zIndex: 20, justifyContent: 'flex-end'},

    home_overLay: {backgroundColor: '#fff', height: '50%', width: '100%', borderTopLeftRadius: 20,
    borderTopRightRadius: 20, padding: 10},

    thead1: {height: 30, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    borderBottomWidth: 1, borderBottomColor: '#00cc99', borderRadius: 20},
    synbol_logo: {height: 30, width: 30, borderRadius: 50, borderWidth: 1, borderColor: 'gray'},
    type: {backgroundColor: '#00cc99'},

    name_btn: {height: 50, width: '100%', alignItems: 'center', flexDirection: 'row', gap: 15,
    borderRadius: 10, marginBottom: 20, padding: 5}
})