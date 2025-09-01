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
import { Page_pin } from './s_change_pin';




export const Privacy = () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);
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






 const slide1 = useRef(new Animated.Value(1)).current;





 const Render1 = () => {
  switch(policy) {
   case 'App_pass': return <App_pass/>
   case 'Page_pin': return <Page_pin/>
   default: return <App_pass/>
  }
 }



 return (
    <View style={{flex: 1, position: 'relative', flexDirection: 'row', backgroundColor: '#e6f0fa'}}>
    {active1 && (
    <Animated.View style={[styles.Home]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowSTRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    </View>

    <ScrollView style={styles.container} 
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    <View style={styles.table1}>

    <TouchableOpacity style={styles.change} onPress={() => {null}}>
    <Icon name='lock' size={20} color='#fff' style={styles.lock}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Change Password</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => {null}}>
    <Ionicons name='key-outline' size={20} color='#fff' style={styles.key}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Transactions PIN</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={() => {null}}>
    <Ionicons name='contrast-outline' size={20} color='#fff' style={styles.dark}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>appearance</Text>
    </TouchableOpacity>


    </View>
    </ScrollView>
    </Animated.View>
    )}


    {active2 && (
        <Modal visible={active2} animationType='slide' presentationStyle='pageSheet'
        onRequestClose={() => {setActive2(false)}}>
            <Render1/>
        </Modal>
    )}

    </View>
 )
}

const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', position: 'relative', borderRadius: 10},
    back: {height: 40, width: 40, position: 'absolute', left: 20, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'},

    container: {flexDirection: 'column', gap: 10, padding: 20},
    table1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column',
    padding: 5, borderRadius: 10, gap: 10},

    change: {height: 50, width: '100%', textAlign: 'left', alignItems: 'center', justifyContent: 'flex-start',
    padding: 10, flexDirection: 'row', gap: 15},

    lock: {backgroundColor: '#00cc99', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 5, padding: 5},

    key: {backgroundColor: '#158f', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 5, padding: 5},

    dark: {backgroundColor: '#14aaf5', height: 30, width: 30, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 5, padding: 5}
})