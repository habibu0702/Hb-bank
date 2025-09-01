import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { LoginForm } from './f_login';





export const Forms = () => {



 return (
    <View style={styles.Home}>
        <LoginForm/>
    </View>
 )
}

const styles = StyleSheet.create({
    Home: {backgroundColor: '#000', flex: 1},
    header1: {height: '20%', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 10},

    lock_container: {backgroundColor: 'rgba(25,25,25,0.60)', height: 60, width: 60, borderRadius: 50,
    textAlign: 'center', shadowColor: '#fff', shadowOffset: {width: 0, height: 2}, shadowOpacity: 4,
    shadowRadius: 8, elevation: 8, textAlign: 'center', alignItems: 'center', justifyContent: 'center'}
})