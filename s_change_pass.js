import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';



export const App_pass = () => {


    return (
        <View style={styles.Home}>
        <View style={styles.header1}>

        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header1: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', position: 'relative', borderRadius: 10},
})