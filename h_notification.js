import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { PushToken } from './h_pushToken';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';




export const Notifications1 = () => {
 const token = PushToken();


 const navigator = useNavigation();
 const back = () => {
    navigator.goBack();
 }




 return (
    <View style={styles.App}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() => back()}>
    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Notifications</Text>
    </View>

    <View style={styles.home}>
      <Text>{token}</Text>
    </View>

    </View>
  )
}


const styles = StyleSheet.create({
    App: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', borderRadius: 10, position: 'relative', padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    home: {flexDirection: 'column', padding: 20}
})