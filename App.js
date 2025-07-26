import { View, Text, Alert, StyleSheet, } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import Icons from '@expo/vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "./context.js";
import HomeScreen from './homeScreen.js';
import HistoryScreen from "./HistoryScreen.js";
import Profile from "./SettingScreen.js";
import Logign from "./login";
import SignUp from "./singup";
import { useStore } from "./true.js";



export default function App() {

  const [IsLogged, setIsLogged] = useState(false);
  const [Active, setActive] = useState(true);
  const Istrue = useStore(state => state.Istrue);
   const Logged = useStore(state => state.Logged);




  const Toggle = () => {
    return () => setActive(false);
  }


  const Render1 = ({ children }) => {
    return <View style={{flex: 1}}>{children}</View>
  }

  const Render2 = ({ children }) => {
    return <View style={{flex: 1}}>{children}</View>
  }


  const Render3 = () => {
    switch(Active) {
      case 'Home': return <HomeScreen/>
      case 'History': return <HistoryScreen/>
      case 'Settign': return <Profile/>
      default: return <HomeScreen/>
    }
  }



  return (

   <UserProvider>

    {!Logged ? (
      <>
      {!Istrue ? (
        
      
      <>
     <Render1><Logign/></Render1>
     </>
      ) : (
        <Render2><SignUp/></Render2>
      )}
      
      
   
  </>
    ) : (
      

 <View style={styles.App}>
 <View style={{flex: 1}}>{Render3()}</View>

 <View style={styles.tabBottom}>
 
 <TouchableOpacity style={styles.button} onPress={() => setActive('Home')}>
  <Icons name="home" size={24} color='#000' />
  <Text>Home</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => setActive('History')}>
  <Icons name="history" size={24} color='#000' />
  <Text>History</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => setActive('Settign')}>
  <Icons name="user" size={24} color='#000' />
  <Text>You</Text>
 </TouchableOpacity>
 </View>
 </View>
    )}
    <StatusBar hidden={true} />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  register: {flex: 1, position: 'relative', backgroundColor: 'red'},

  App: {flex: 1, position: 'relative', backgroundColor: '#fff'},

  tabBottom: { backgroundColor: '#e6f0fa', height: 70, width: '100%', position: 'absolute', left: 0,
  bottom: 0, textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
  padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20},

  button: { height: 55, width: 55, borderRadius: 10, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', flexDirection: 'column', gap: 2}
})