import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, RefreshControl } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';




export const Makert = () => {
    const [refreshing, setRefreshing] = useState(false);
    const setShowRender = userStore(state => state.setShowRender);
    
 


 const onRefresh = () => {
    setRefreshing(true);

    const time = setTimeout(() => {
        setRefreshing(false);
    }, 2000);
    return () => clearTimeout(time);
 }

 return (
    <View style={styles.App1}>
    <View style={styles.header1}>
    <View style={{textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Shop</Text>

    <TouchableOpacity style={styles.create_btn}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>+</Text>
    </TouchableOpacity>
    </View>
    </View>
    <ScrollView style={styles.home} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

    </ScrollView>

    </View>
 )
}


const styles = StyleSheet.create({
    App1: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', justifyContent: 'flex-end', padding: 10},

    home: {flex: 1}
})