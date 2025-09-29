import { View, Text, TextInput, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity, Image, Alert, Keyboard } from 'react-native';
import { ScrollView, Platform, Dimensions, Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';4
import { AppLoading } from './s_load_spin';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { TV_plans } from './t_tv_plans';
import { TV_logo } from './t_tv_logo';
import axios from 'axios';
import moment from 'moment';



export const Service3 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { darkMode } = useContext(UserContext);
 const [network_id, setNetwork_id] = useState('');
 const [smartNumber, setSmartNumber] = useState('');
 const [plan, setPlan] = useState('');
 const [visible, setVisible] = useState(false);
 const [active, setActive] = useState('');
 const [vis, setVis] = useState(false);
 const [spin, setSpin] = useState(false);

 const [data, setData] = useState(null);
 const [err, setErr] = useState('');


 const time = Date.now();




 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');
 const [error3, setError3] = useState('');

 const open = () => {
    if (!network_id) {
      return setError1('Please select Cable name');
    }
    setVis(true); setError1(''); setActive('1');
    Keyboard.dismiss();
    return true;
 }


 const close = () => {
    const time = setTimeout(() => {
        setVis(false)
    }, 100);
    return () => clearTimeout(time);
 }




 const views = () => {
    if (!network_id) {
        return setError1('please select Cable name');
    }
    if (!smartNumber || smartNumber.trim() === '') {
        return setError2('Please Enter a valid a Smart Card Number');
    }
    if (!plan) {
        return setError3('Please Select service');
    }
    setActive('2'); setVis(true); setError1('');
    setError2(''); setError3(''); Keyboard.dismiss();
    return;
 }







 const send = async () => {
    setVis(false); setSpin(true);

    try {
        const response = await axios.post('https://www.maskawasub.com/buy/data/', {
            "cable_name": network_id.id,
            "smart_number": smartNumber
        },
    {
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        }
    });
    setData(response.data);
    return;
    } catch (err) {
        if (err.request) {
            setErr('Network error Please check your internet connection')
        }
        setActive('3'); setVis(true);
    } finally {
        setSpin(false)
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
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(slide, {
            toValue: screen,
            duration: 300,
            useNativeDriver: false
        }).start(() => {
            setVisible(false);
        });
    }
 }, [vis]);




 
 return (
    <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender(false)}}>
    <Ionicons name='chevron-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', color: darkMode ? '#000' : 'ivory'}}>
    Supscription TV Now</Text>
    </View>




    <View style={styles.Home}>
    <View style={[styles.form1, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>

    <View style={styles.table1}>
    {TV_logo.map((key) => (
    <TouchableOpacity key={key.id} style={styles.select_btn} onPress={() =>
    {setNetwork_id(key); setPlan(null)}}>
    <Image source={key.logo} style={styles.logo}/>
    {network_id === key && (<View style={styles.selected}><Text>✅</Text></View>)}
    </TouchableOpacity>
    ))}
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}


    <TextInput value={smartNumber} placeholder='SmartCard Number' onChangeText={setSmartNumber}
    inputMode={Platform.OS === 'android' ? 'number-pad' : 'numeric'} returnKeyType='done'
    style={[styles.input1, {color: darkMode ? '#000' : 'ivory'}]} placeholderTextColor='gray'/>
    {error2 && (<Text style={{fontSize: 12, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}


    
    <View style={{height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', padding: 10, borderWidth: 2,
    borderColor: 'gray', borderRadius: 10}}>

    <TouchableOpacity style={styles.select_plan_btn} onPress={() => 
    {open(); Keyboard.dismiss()}}>
    {plan ? <View style={{flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between',padding: 10, width: '100%', height: 50}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.name}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{plan.price.toLocaleString()} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.duration}</Text>
    </View> : <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
    Select Cable Plan</Text>}
    </TouchableOpacity>
    {visible ? 
    <Ionicons name='caret-up-outline' size={18} color='gray'/>
    :
    <Ionicons name='caret-down-outline' size={18} color='gray'/>}
    </View>
    {error3 && (<Text style={{fontSize: 12, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

    <TouchableOpacity style={styles.submit_btn} onPress={() => {views()}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </View>
     </View>












    {/*-------------------------over-lay-----------------------------*/}

    {visible && (
    <View style={styles.overLay}>
    <TouchableWithoutFeedback style={{height: '50%', width: '100%'}} onPress={() => close()}>
        <View style={{height: '50%', width: '100%'}}></View>
    </TouchableWithoutFeedback>
    

    {/*--------------------------------------active-2-------------------------*/}
    {active === '1' && (<Animated.View style={[styles.plan_container, {transform: [{translateY: slide}],
    backgroundColor: darkMode ? '#fff' : '#000'}]}>
    <View style={styles.thead1}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Plans</Text>
    </View>

    <ScrollView style={{padding: 20, flexDirection: 'column', gap: 10}}>
    {TV_plans[network_id.id].map((item) => (
    <TouchableOpacity key={item.name} style={[styles.item, plan === item && [{backgroundColor: '#00cc99'}]]}
    onPress={() => {setPlan(item); close()}}>
    <Ionicons name="wifi-outline" size={20} color="#fff" style={{height: 30, width: 30, borderRadius: 50,
    backgroundColor: 'rgba(25,25,25,0.30)', textAlign: 'center', alignItems:'center', padding: 5,
    justifyContent: 'center'}}/>

    <View style={{height: 40, width: '90%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 10}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{item.name}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{item.price.toLocaleString()} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{item.duration}</Text>
    </View>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>)}








    {/*------------------------------------------active-2-----------------------*/}
    {active === '2' && (
    <Animated.View style={{backgroundColor: darkMode ? '#fff' : '#212121', height: 'auto', width: '100%',
    borderTopLeftRadius: 20, borderTopRightRadius: 20, textAlign: 'center', alignItems: 'center',
    flexDirection: 'column', gap: 10, padding: 10, transform: [{translateY: slide}]}}>

    <Image source={network_id.logo} resizeMode="cover" style={{height: 40, width: 40, borderRadius: 50,
    borderWidth: 1, borderColor: 'gray'}}/>
    
    {/*--------------------------------other--list--------------------------------*/}
    <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 20, marginBottom: 20}}>

    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 15}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Cable Name</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>smartNumber</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Cable Type</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>amount</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>time</Text>
    </View>

    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 15}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{network_id.id}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{smartNumber}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.name}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{plan.price.toLocaleString()} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{moment(time).format('hh: mm A, MMM D')}</Text>
    </View>
    </View>

    <TouchableOpacity style={{backgroundColor: '#00cc99', height: 50, width: '90%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20}}
    onPress={() => {send()}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </Animated.View>
    )}





    {/*--------------------------active-3----------------------------*/}
    {active === '3' && (
    <Animated.View style={{backgroundColor: darkMode ? '#ddd' : '#000', height: '100%', width: '100%',
    transform: [{translateX: slide}]}}>

    {/*-----------------------------------thead------------------------------*/}
    <View style={{height: 100, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 10, position: 'relative'}}>
    <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => setVis(false)}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'blue'}}>Done</Text></TouchableOpacity>
    </View>


    {/*-----------------------------err---------------------------------------*/}
    {err && (
        <View style={{height: '60%', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'column',
        justifyContent: 'center', gap: 10}}>
        
        <Ionicons name="warning-outline" size={40} color='red'/>
        
        <View style={{height: 'auto', width: 100, textAlign: 'center', alignItems: 'center', flexDirection: 'column',
        flexWrap: 'wrap', borderRadius: 10, backgroundColor: darkMode ? 'rgba(25,25,25,0.30)' : '#2a2a2a',
        padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red', textAlign: 'center', alignItems: 'center',
        justifyContent: 'center'}}>{err}</Text>
        </View>

        </View>)}
    

    {/*---------------------------------success----------------------------------*/}
    {data && (
        <View style={{backgroundColor: darkMode ? '#ddd' : '#000', height: '100', width: '1005'}}>

        </View>
    )}

    </Animated.View>
    )}
    </View>
    )}




    {/*---------------------------spin-----------------------------*/}

    {spin && (<View style={{height: '100%', width: '100%', position: 'absolute', left: 0, right: 0, bottom: 0,
    zIndex: 10}}><AppLoading/></View>)}

   
    </View>
 )
}

const styles = StyleSheet.create({
    App: {backgroundColor: '#DDD', position: 'relative', height: '100%', width: '100%'},

    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},







    Home: {padding: 20, position: 'relative'},

    form1: {backgroundColor: '#FFF', height: 'auto', width: '100%', gap: 15, borderRadius: 10, padding: 10},

    table1: {height: 'auto', width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between'},

    select_btn: {backgroundColor: 'transparent', height: 60, width: 80, borderRadius: 10, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', borderRadius: 10, position: 'relative', padding: 5},
    logo: {height: 60, width: 80, borderRadius: 10},

    selected: {height: 60, width: 80, backgroundColor: 'rgba(25,25,25,0.80)', borderRadius: 10,
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0,
    right: 0, bottom: 0, top: 0},

    input1: {height: 50, width: '100%', padding: 10, borderWidth: 2, borderColor: 'gray', borderRadius: 10,
    fontSize: 15, fontWeight: 'bold'},

    select_plan_btn: {height: 50, width: '95%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10},

    submit_btn: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20},




    overLay: {backgroundColor: 'rgba(25,25,25,0.80)', height: '100%', width: '100%', position: 'absolute',
    bottom: 0, left: 0, right: 0, zIndex: 10, justifyContent: 'flex-end'},

    plan_container: {backgroundColor: '#fff', height: '50%', width: '100%', flexDirection: 'column',
    borderTopLeftRadius: 20, borderTopRightRadius: 20},

    thead1: {height: 40, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    position: 'relative', padding: 5, borderRadius: 20},

    item: {backgroundColor: 'transparent', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, marginBottom: 15}
})