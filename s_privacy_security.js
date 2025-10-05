import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, Animated, RefreshControl, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';




export const Privacy = () => {
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


 const navigator = useNavigation();
 const open = (value) => {
    navigator.navigate(value);
 }






 return (
    <View style={{flex: 1, position: 'relative', backgroundColor: '#e6f0fa'}}>


    <Animated.View style={[styles.Home]}>
   

    <ScrollView style={styles.container} 
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    <View style={styles.table1}>

    <TouchableOpacity style={styles.change} onPress={() => open('UpdatePassword')}>
    <Icon name='lock' size={20} color='#fff' style={styles.lock}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Change Password</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => open('UpdatePin')}>
    <Ionicons name='key-outline' size={20} color='#fff' style={styles.key}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Transactions PIN</Text>
    </TouchableOpacity>

    </View>
    </ScrollView>
    </Animated.View>
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