import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, Animated, RefreshControl, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { App_pass } from './s_change_pass';
import { App_pin } from './s_change_pin';




export const Privacy = () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);
 const IsSecurity = userStore((state) => state.IsSecurity);
 const setIsOpenSecurity = userStore((state) => state.setIsOpenSecurity);
 const { IsPrivacy1, IsPrivacy2, IsRender } = useContext(UserContext);
 const { setIsPrivacy1, setIsPrivacy2, setIsRender } = useContext(UserContext);
 const [active1, setActive1] = useState(true);
 const [active2, setActive2] = useState(false);


 const [refreshing, setRefreshing] = useState(false);

 const onRefresh = () => {
    setRefreshing(true);

    const time = setTimeout(() => {
        setRefreshing(false);
    }, 2000);
    return () => clearTimeout(time);
 }





 const screen = Dimensions.get('window').width;
 const slide1 = useRef(new Animated.Value(1)).current;
 const slide2 = useRef(new Animated.Value(screen)).current;


 useEffect(() => {
    const timer1 = setTimeout(() => {
    if (!IsSecurity) {
        Animated.timing(slide1, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    } else {
        Animated.timing(slide1, {
            toValue: screen * -0.40,
            duration: 200,
            useNativeDriver: true
        }).start();
    }
}, 100);
return () => clearTimeout(timer1);
 }, [IsSecurity]);









  useEffect(() => {
    const timer1 = setTimeout(() => {
    if (IsSecurity) {
        setActive2(true);
        Animated.timing(slide2, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(slide2, {
            toValue: screen,
            duration: 200,
            useNativeDriver: false
        }).start(() => {
            setActive2(false);
        })
    }
}, 100);
return () => clearTimeout(timer1);
 }, [IsSecurity]);











 const Render1 = () => {
  switch(IsRender) {
   case 'App_pass': return <App_pass/>
   case 'reset_pin': return <App_pin/>
   default: return null;
  }
 }



 return (
    <View style={{flex: 1, position: 'relative', backgroundColor: '#e6f0fa'}}>


    
    {active2 && (<Animated.View style={[styles.render, {transform: [{translateX: slide2}]}]}>
            <Render1/>
        </Animated.View>)}





    {active1 && (
    <Animated.View style={[styles.Home, {transform: [{translateX: slide1}]}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowSTRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    </View>

    <ScrollView style={styles.container} 
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    <View style={styles.table1}>

    <TouchableOpacity style={styles.change} onPress={() =>
    {setIsRender('App_pass'); setIsOpenSecurity(true)}}>
    <Icon name='lock' size={20} color='#fff' style={styles.lock}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Change Password</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() =>
    {setIsRender('reset_pin'); setIsOpenSecurity(true)}}>
    <Ionicons name='key-outline' size={20} color='#fff' style={styles.key}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Transactions PIN</Text>
    </TouchableOpacity>

    </View>
    </ScrollView>
    </Animated.View>
    )}
    </View>
 )
}

const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: 10},

    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    container: {flexDirection: 'column', gap: 10, padding: 20},
    table1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column',
    padding: 5, borderRadius: 10, gap: 10},

    change: {height: 50, width: '100%', textAlign: 'left', alignItems: 'center', justifyContent: 'flex-start',
    padding: 10, flexDirection: 'row', gap: 15},

    lock: {backgroundColor: '#00cc99', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 5, padding: 5},

    key: {backgroundColor: '#158f', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 5, padding: 5},









    render: {backgroundColor: '#000', height: '100%', width: '100%', position: 'absolute', left: 0,
    right: 0, bottom: 0, zIndex: 199}
})