import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';


export const Service6 = () => {
 const setShowRender = userStore(state => state.setShowRender);



 return (
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    </View>
    
    </View>
 )
}


const styles = StyleSheet.create({
    Home: {flex: 1, backgroundColor: '#fff', borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 10},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8}
})