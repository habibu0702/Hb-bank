import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { UserContext } from './context';
import { LoginForms } from './f_login';
import { SignUpForm } from './f_singup';




const Stack = Platform.OS === 'android' ? createStackNavigator() : createNativeStackNavigator();
export const Forms = () => {



 return (
    <LinearGradient style={styles.App} colors={['#000', 'royalblue']}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    gestureEnabled: true,
    gestureDirection: 'horizontal'
    }}>
        <Stack.Screen name='LogIn' component={LoginForms} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: 'royalblue', height: 60},
        headerShadowVisible: false
        }}/>
        <Stack.Screen name='SignUp' component={SignUpForm} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: 'ivory', height: 60},
        headerShadowVisible: false
        }}/>
    </Stack.Navigator>
    </NavigationContainer>
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