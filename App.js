import { View, Text, Alert, StyleSheet, Animated } from "react-native";
import { TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useState, useEffect,useRef } from "react";
import Icons from '@expo/vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "./context.js";
import HomeScreen from './homeScreen.js';
import HistoryScreen from "./HistoryScreen.js";
import Profile from "./SettingScreen.js";
import Logign from "./login";
import SignUp from "./singup";
import { userStore } from "./true.js";



export default function App() {
  const [Active, setActive] = useState(false);
  const tabBottom= userStore(state => state.tabBottom);
  const Istrue = userStore(state => state.Istrue);
   const Logged = userStore(state => state.Logged);

 const screnWidth = Dimensions.get('window').width;
  const show_tab_btn = useRef(new Animated.Value(screnWidth)).current;
 const slideSignUp = useRef(new Animated.Value(-screnWidth)).current;
 const slideLogign = useRef(new Animated.Value(screnWidth)).current;





 useEffect(() => {
 const timer = setTimeout(() => {
  if (tabBottom) {
   Animated.timing(show_tab_btn, {
     toValue: 0,
     duration: 250,
     useNativeDriver: true
   }).start();
  } else {
   Animated.timing(show_tab_btn, {
     toValue: screnWidth,
     duration: 250,
     useNativeDriver: true
   }).start();
  }
}, 100);
return () => clearTimeout(timer);
}, [tabBottom]);




useEffect(() => {
 const timer = setTimeout(() => {
  if (Istrue) {
   Animated.timing(slideLogign, {
     toValue: screnWidth,
     duration: 250,
     useNativeDriver: true
   }).start();
  } else {
   Animated.timing(slideLogign, {
     toValue: 0,
     duration: 250,
     useNativeDriver: true
   }).start();
  }
}, 100);
return () => clearTimeout(timer);
}, [Istrue]);





useEffect(() => {
 const timer = setTimeout(() => {
  if (Istrue) {
   Animated.timing(slideSignUp, {
     toValue: -0,
     duration: 250,
     useNativeDriver: true
   }).start();
  } else {
   Animated.timing(slideSignUp, {
     toValue: -screnWidth,
     duration: 250,
     useNativeDriver: true
   }).start();
  }
}, 100);
return () => clearTimeout(timer);
}, [Istrue]);


 

 


  const Render1 = ({ children }) => {
    return <Animated.View style={[styles.Render1, [{transform: [{translateX: slideLogign}]}]]}>{children}</Animated.View>
  }
  const Render2 = ({ children }) => {
    return <Animated.View style={[styles.Render2, [{transform: [{translateX: slideSignUp}]}]]}>{children}</Animated.View>
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
    <View style={{backgroundColor: 'royalblue', flex: 1}}>

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

 {tabBottom && ( <Animated.View style={[styles.tabBottom, [{transform: [{translateY: show_tab_btn}]}]]}>
 
 <TouchableOpacity style={styles.button} onPress={() => setActive('Home')}>
  <Icons name="home" size={24} color='#000' />
  <Text>Home</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => setActive('History')}>
  <Icons name="history" size={24} color='#000' />
  <Text>Recod</Text>
 </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => setActive('Settign')}>
  <Icons name="user" size={24} color='#000' />
  <Text>You</Text>
 </TouchableOpacity>
 </Animated.View>)}
 </View>
    )}

    </View>
    <StatusBar hidden={true} />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  Render1: {flex: 1},
  Render2: {flex: 1},
  register: {flex: 1, position: 'relative', backgroundColor: 'red'},

  App: {flex: 1, position: 'relative', backgroundColor: '#fff'},

  tabBottom: { backgroundColor: '#e6f0fa', height: 70, width: '100%', position: 'absolute', left: 0,
  bottom: 0, textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
  padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20},

  button: { height: 55, width: 55, borderRadius: 10, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', flexDirection: 'column', gap: 2}
})