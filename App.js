import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useEffect } from "react";
import { UserProvider } from "./context";
import HomeScreen from "./homeScreen";
import HistoryScreen from "./HistoryScreen";
import Profile from "./SettingScreen";
import SingUp from "./singup";




export default function App() {


  const [tabActive, setTabActive] = useState(false);
  const [APP, setAPP] = useState(false);
  const [login, setLogin] = useState(false);
  const [sing, setSing] = useState(true);


  const render = () => {
  
    switch (tabActive) {
      case 'Home': return <HomeScreen/>
      case 'History': return <HistoryScreen/>
      case 'Profile': return <Profile/>
      default: return <HomeScreen/>
    }
  }

const Render2 = ({ children }) => {
  return (
    <ScrollView style={{ backgroundColor: 'royalblue'}}>
     {children}
    </ScrollView>
      )
  }




  useEffect(() => {
    if (sing === true) {
    setTimeout(() => {
      setAPP(false)
    }, 100);
    } else {
      setTimeout(() => {
      setAPP(true);
      setSing(false);
      }, 100)
    }
  }, [sing]);


  return (




    <UserProvider>
    {APP && ( <View style={styles.HomeScreen}>
      <View styles={{backgroundColor: '#fff', flex: 1, paddingBottom: 10}}>
        {render()}
        </View>

      <View style={styles.tabBottom}>

        <TouchableOpacity style={styles.tab} onPress={() => setTabActive('Home')}>
          <Ionicons name="home" size={25} color='gray' />
          <Text style={styles.lableTab}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => setTabActive('History')}>
          <Icon name="history" size={24} color='gray' />
          <Text style={styles.lableTab}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => setTabActive('Profile')}>
          <Ionicons name="person" size={24} color='gray' />
          <Text style={styles.lableTab}>Profile</Text>
        </TouchableOpacity>

      </View>
    </View>)}


    {sing && ( <Render2><SingUp/></Render2>)}




    <StatusBar style="auto" />
    </UserProvider>
  )
}


const styles = StyleSheet.create({
  HomeScreen: {flex: 1, position: 'relative', backgroundColor: 'transparent'},

  tabBottom: {backgroundColor: '#e6f0fa', height: 70, width: '100%', padding: 15, textAlign: 'center',
  alignItems: 'center', position: 'absolute', bottom: 0, justifyContent: 'space-between', flexDirection: 'row',
  shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.5, shadowRadius: 6, elevation: 4,
  borderTopLeftRadius: 20, borderTopRightRadius: 20},

  tab: {height: 50, width: 70, textAlign: 'center', alignItems: 'center', justifyContent: 'center', gap: 5,
  borderRadius: 10,
  },
  lableTab: {fontWeight: 'bold', fontSize: 10, color: 'gray'}
})