import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import { TouchableOpacity, Dimensions, Animated, Image } from 'react-native';
import { TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import { Network } from './t_network';


export const Service6 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { darkMode } = useContext(UserContext);
 const [network, setNetwork] = useState({id: 'MTN'});
 const [phone, setPhone] = useState('');
 const [amount, setAmount] = useState('');



 const [visible, setVisible] = useState(false);
 const [show, setShow] = useState(false);




 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');
 const [error3, setError3] = useState('');














 const screen = Dimensions.get('window').width;
 const transformY = useRef(new Animated.Value(screen)).current


 useEffect(() => {
    if (show) {
        Keyboard.dismiss();
        setVisible(true);
    Animated.timing(transformY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true
    }).start();
 } else {
    Animated.timing(transformY, {
        toValue: screen,
        duration: 250,
        useNativeDriver: true
    }).start(() => {
        setVisible(false);
    });
 }
 }, [show]);



 return (
    <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender(false)}}>
    <Ionicons name='chevron-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Convert Airtime To cash</Text>
    </View>









    {/*---------------------------------home-----------------------------*/}
    <View style={styles.home}>
        <View style={[styles.form, {backgroundColor: darkMode ? '#fff' : '#000'}]}>

            <View style={{height: 50, width: '100%', flexDirection: 'row', borderWidth: 1, borderColor: 'gray',
            padding: 10, borderRadius: 10, marginBottom: 10, textAlign: 'center', alignItems: 'center', gap: 15}}>

            <Image source={network.logo ? network.logo : require('./assets/mtn.png')} style={{height: 40,
            width: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 50}} resizeMode='cover'/>

            <TouchableOpacity style={{textAlign: 'center', justifyContent: 'center', height: 40, width: '70%'}}
            onPress={() => {setShow(true)}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{network.id}</Text>
            </TouchableOpacity>
            <Ionicons name={show ? "caret-up-outline" : "caret-down-outline"} size={20} color='gray'/>
            </View>


            <TextInput value={phone} placeholder='Mobile Number' onChangeText={setPhone}
            textContentType="telephoneNumber" keyboardType="number-pad" placeholderTextColor="gray"
            style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>



            <TextInput value={amount} placeholder='100-10000' onChangeText={setAmount}
            textContentType="number" inputMode="numeric" placeholderTextColor="gray"
            style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
            {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

            <TouchableOpacity style={styles.next_btn} onPress={() => {Keyboard.dismiss()}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>




    {visible && (
        <View style={styles.OverLay}>
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <View style={{height: '60%', width: '100%'}}></View>
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.OverLay_home, {transform: [{translateY: transformY}],
        backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
        <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center',
        justifyContent: 'center', padding: 10}}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Select Provider</Text>
        </View>
            
        <ScrollView>
        <View style={{height: 'auto', width: '100%', textAlign: 'center', flexDirection: 'column', padding: 20,
        gap: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

        {Network.map((key) => (
        <TouchableOpacity key={key.id} onPress={() => {setNetwork(key); setShow(false)}} style={{height: 40,
        width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row', gap: 18, padding: 10,
        marginBottom: 10}}>

        <Image source={key.logo} resizeMode='cover' style={{height: 30, width: 30, borderRadius: 50}}/>

        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{key.id}</Text>
        </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
        </Animated.View>

    </View>)}
    
    </View>
 )
}


const styles = StyleSheet.create({
    App: {height: '100%', width: '100%', backgroundColor: '#ddd', borderRadius: 10, position: 'relative'},

    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 10},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},






    home: {flexDirection: 'column', padding: 20, gap: 15},

    form: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column',
    borderRadius: 10, padding: 10},

    select_btn: {height: 50, width: '90%', textAlign: 'center', alignItems: 'center'},

    input: {height: 50, width: '100%', borderWidth: 2, borderColor: '#fff', borderRadius: 10, padding: 10,
    borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginBottom: 10},

    next_btn: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 10},






   OverLay: {backgroundColor: 'rgba(25, 25,25,0.60)', height: '100%', width: '100%',
   position: 'absolute', left: 0, right: 0, bottom: 0, textAlign: 'center', justifyContent: 'flex-end'},

   OverLay_home: {backgroundColor: '#fff', height: '40%', width: '100%', flexDirection: 'column',
   borderTopLeftRadius: 20, borderTopRightRadius: 20}
})