import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';



export const App_pin = () => {




    return (
        <LinearGradient colors={['#f5f7fa', '#c3cfe2']} style={styles.Home}>
        <View style={styles.header1}>
        <TouchableOpacity style={styles.back}>
        </TouchableOpacity>
        </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    Home: {backgroundColor: 'rgba(172, 141, 141, 0.6)', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', position: 'relative', borderRadius: 10}
})