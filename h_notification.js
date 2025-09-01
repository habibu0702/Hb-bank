import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';




export const Notifications1 = () => {
 const setShowRender = userStore(state => state.setShowRender);




 return (
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Notifications</Text>
    </View>

    </View>
  )
}


const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', borderRadius: 10, position: 'relative', padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8}
})