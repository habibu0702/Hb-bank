import { View, Text, TextInput, StyleSheet, ScrollView, Animated } from 'react-native';
import { TouchableOpacity, Platform, Image, Dimensions, Keyboard } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { Bil_synbol } from './t_bill_synbol';



export const Service4 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const [bill_name, setBilname] = useState('');
 const [logo, setLogo] = useState('');
 const [visible1, setVisible1] = useState(false);
 const [vis1, setVis1] = useState(false);




 const screen = Dimensions.get('window').width;
 const slide1 = useRef(new Animated.Value(screen)).current;

 useEffect(() => {
    if (vis1) {
        setVisible1(true);
        Animated.timing(slide1, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(slide1, {
            toValue: screen,
            duration: 300,
            useNativeDriver: false
        }).start(() => {
            setVisible1(false);
        })
    }
 }, [vis1]);



 return (
    <View style={styles.App1}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={(() =>
    {setShowRender()})}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>Pay Electricity Bill Now</Text>
    </View>

    <View style={styles.home_container}>

    <View style={styles.form1}>
    <View style={styles.synbol_table}>
    <Image source={bill_name ? bill_name.logo : require('./assets/kedco.png')} resizeMode='cover' style={styles.logo}/>
    <TouchableOpacity style={styles.select_btn} onPress={() => {setVis1(true); Keyboard.dismiss()}}>
    {bill_name ? <Text>{bill_name.id}</Text> : <Text>kano electricity</Text>}

    {vis1 ? <Ionicons name="caret-up-outline" size={15} color='#000'/> :
     <Ionicons name='caret-down-outline' size={15} color='#000'/>}
    </TouchableOpacity>
    </View>

    <TextInput value={null} placeholder='meter number' onChangeText={null} returnKeyType='next'
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'} style={styles.input}/>

    <TextInput value={null} placeholder='amount' onChangeText={null} returnKeyType='done'
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'} style={styles.input}/>

    <TouchableOpacity style={styles.submit_btn}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Pay Now</Text>
    </TouchableOpacity>
    </View>
    </View>

    {visible1 && (<View style={styles.overLay}>
    <Animated.View style={[styles.home_overLay, {transform: [{translateY: slide1}]}]}>
    <View style={styles.thead1}>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>bill names</Text>
    </View>
    <ScrollView style={{flexDirection: 'column', padding: 20, gap: 15}}>
    {Bil_synbol.map((item) => (
    <TouchableOpacity key={item.id} style={styles.name_btn} onPress={() =>
    {setBilname(item); setVis1(false)}}>
        <Image source={item.logo} resizeMode='cover' style={styles.synbol_logo}/>
        <Text>{item.id}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>
    </View>)}
    </View>
 )
}


const styles = StyleSheet.create({
    App1: {backgroundColor: '#fff', height: '100%', width: '100%', position: 'relative'},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 10},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    home_container: {flexDirection: 'column', padding: 20},

    form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column', gap: 15,
    padding: 10, borderRadius: 10},

    synbol_table: {height: 60, width: '100%', borderWidth: 1, borderColor: 'gray', padding: 5, textAlign: 'center',
    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'nowrap', gap: 5,
    borderRadius: 10},

    select_btn: {height: 60, width: '90%', textAlign: 'left', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 15},

    logo: {height: 40, width: 40, borderRadius: 50},

    input: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 10},

    submit_btn: {backgroundColor: '#00cc99', height: 55, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', padding: 10, borderTopLeftRadius: 20, borderBottomRightRadius: 20},



    overLay: {backgroundColor: 'rgba(25,25,25,0.80)', position: 'absolute', height: '100%', width: '100%',
    left: 0, right: 0, bottom: 0, top: 0, zIndex: 10, justifyContent: 'flex-end'},

    home_overLay: {backgroundColor: '#fff', height: '60%', width: '100%', borderTopLeftRadius: 20,
    borderTopRightRadius: 20, padding: 10},

    thead1: {height: 30, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    borderBottomWidth: 1, borderBottomColor: '#00cc99', borderRadius: 20},
    synbol_logo: {height: 30, width: 30, borderRadius: 50},

    name_btn: {height: 60, width: '100%', alignItems: 'center', flexDirection: 'row', gap: 15,
    backgroundColor: '#e6f0fa', borderRadius: 10, marginBottom: 20, padding: 5}
})