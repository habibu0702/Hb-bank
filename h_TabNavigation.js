import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SettingsScreen } from "./s_settigns";
import { HomeScreen } from "./h_homeScreen";
import { HistoryScreen } from "./HistoryScreen";
import { useContext } from "react";
import { UserContext } from "./context";
import * as Haptics from 'expo-haptics';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
   const { darkMode } = useContext(UserContext);


 
 return (
    <Tab.Navigator screenOptions={({ route }) => ({
    tabBarActiveTintColor: '#00cc99',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: darkMode ? '#fff' : '#2a2a2a',
      borderWidth: 1,
      borderColor: 'transparent',
      height: Platform.OS === 'android' ? 65 : 55
    },
    headerShown: false,
    tabBarIcon: ({ size, color }) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'History') {
      iconName = 'history';
    } else if (route.name === 'You') {
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={color}/>
    }})}>
    <Tab.Screen name="Home" component={HomeScreen}/>
    <Tab.Screen name="History" component={HistoryScreen}/>
    <Tab.Screen name="You" component={SettingsScreen} options={{
    headerLeft: () => (
    <Text style={{fontSize: 14, fontWeight: 'bold', padding: 10}}>Settings</Text>
    )
    }}/>
    </Tab.Navigator>
 )
}