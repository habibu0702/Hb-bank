import { View, Text, TextInput, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity, Image, Alert, Keyboard } from 'react-native';
import { ScrollView, Platform, Dimensions, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { TV_plans } from './t_tv_plans';
import { TV_logo } from './t_tv_logo';



export const Service3 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 
 const [data, setData] = useState(null);
 const [network_id, setNetwork_id] = useState('');
 const [smartNumber, setSmartNumber] = useState('');
 const [plan, setPlan] = useState('');
 const [visible, setVisible] = useState(false);
 const [vis, setVis] = useState(false);




 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');
 const [error3, setError3] = useState('');

 const open = () => {
    if (!network_id) {
      return setError1('Plan id is required');
    }
    setVis(true); setError1('');
    return true;
 }


 const close = () => {
    const time = setTimeout(() => {
        setVis(false)
    }, 100);
    return () => clearTimeout(time);
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
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>Supscription TV Now</Text>
    </View>

    <View style={styles.container}>
    <View style={styles.form1}>

    <View style={styles.table1}>
    {TV_logo.map((key) => (
    <TouchableOpacity key={key.id} style={styles.select_btn} onPress={() =>
    {setNetwork_id(key.id); setPlan(null)}}>
    <Image source={key.logo} style={styles.logo}/>
    {network_id === key.id && (<View style={styles.selected}><Text>✅</Text></View>)}
    </TouchableOpacity>
    ))}
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

    <TextInput value={smartNumber} placeholder='SmartCard Number' onChangeText={setSmartNumber} style={styles.input1}
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'} returnKeyType='done'/>

    <TouchableOpacity style={styles.select_plan_btn} onPress={() => 
    {open(); Keyboard.dismiss()}}>
    {plan ? <View style={{flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between',padding: 10, width: '100%', height: 50}}>
    <Text>{plan.name}</Text>
    <Text>{plan.price}</Text>
    <Text>{plan.duration}</Text>
    </View> : <Text>Select Cable Plan</Text>}
    </TouchableOpacity>

    <TouchableOpacity style={styles.submit_btn}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
    </TouchableOpacity>
    </View>
     </View>

    {visible && (
    <View style={styles.overLay}>
    <Animated.View style={[styles.plan_container, {transform: [{translateY: slide}]}]}>
    <View style={styles.thead1}>
    <TouchableOpacity style={styles.close} onPress={() => close()}>
    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#00cc99'}}>Close</Text>
    </TouchableOpacity>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Plans</Text>
    </View>

    <ScrollView style={{padding: 20, flexDirection: 'column', gap: 10}}>
    {TV_plans[network_id].map((item) => (
    <TouchableOpacity key={item.name} style={[styles.item, plan === item && [{backgroundColor: '#00cc99'}]]} onPress={() =>
    {setPlan(item); close()}}>
    <Text>{item.name}</Text>
    <Text>{item.price}</Text>
    <Text>{item.duration}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>
    </View>
    )}

   
    </View>
 )
}

const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', position: 'relative', height: '100%', width: '100%'},

    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    container: {padding: 20, position: 'relative'},

    form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', gap: 15, borderRadius: 10, padding: 10},

    table1: {height: 'auto', width: '100%', flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between'},

    select_btn: {backgroundColor: '#fff', height: 60, width: 80, borderRadius: 10, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', borderRadius: 10, position: 'relative', padding: 5},
    logo: {height: 60, width: 80, borderRadius: 10},

    selected: {height: 60, width: 80, backgroundColor: 'rgba(25,25,25,0.80)', borderRadius: 10,
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0,
    right: 0, bottom: 0, top: 0},

    input1: {height: 50, width: '100%', padding: 10, borderWidth: 2, borderColor: 'gray', borderRadius: 10,
    fontSize: 15, fontWeight: 'bold'},

    select_plan_btn: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', textAlign: 'center',
    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, padding: 10},

    submit_btn: {backgroundColor: '#00cc99', height: 60, width: '100%', borderRadius: 10,
    textAlign: 'center', alignItems: 'center', justifyContent: 'center'},




    overLay: {backgroundColor: 'rgba(25,25,25,0.80)', height: '100%', width: '100%', position: 'absolute',
    bottom: 0, left: 0, right: 0, zIndex: 10, justifyContent: 'flex-end'},

    plan_container: {backgroundColor: '#fff', height: '60%', width: '100%', flexDirection: 'column',
    borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10},

    thead1: {height: 40, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    position: 'relative', padding: 5, borderBottomWidth: 1, borderBottomColor: '#00cc99', borderRadius: 20},

    close: {position: 'absolute', left: 20},

    item: {backgroundColor: '#e6f0fa', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', padding: 10, borderRadius: 10, marginBottom: 10}
})