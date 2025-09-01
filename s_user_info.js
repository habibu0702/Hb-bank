import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';



export const User_Info = () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);



 return (
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowSTRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    </View>

    </View>
 )
}


const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', position: 'relative', borderRadius: 10},
    back: {height: 40, width: 40, position: 'absolute', left: 20, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center'}
})