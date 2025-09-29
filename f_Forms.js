import { View, Text, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { UserContext } from './context';
import { LoginForms } from './f_login';





export const Forms = () => {
    const { visible1, setVisible1 } = useContext(UserContext);



 return (
    <LinearGradient style={styles.App} colors={['#000', 'royalblue']}>
        {visible1 ?
        <View style={{height: '100%', width: '100%'}}>
            <LoginForms/>
        </View>
        :
        <View style={styles.container1}>

        </View>}
    </LinearGradient>
 )
}

const styles = StyleSheet.create({
    App: {flex: 1, position: 'relative'},

    container1: {padding: 20, flexDirection: 'column'},
   
    container2: {padding: 20, flexDirection: 'column', position: 'absolute', left: 0, right: 0, bottom: 0, height: 100},

    getStarted: {backgroundColor: '#00cc99', height: 60, width: '100%', borderRadius: 10, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center'}
})