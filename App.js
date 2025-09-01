import { View, Text, Alert, StyleSheet, Animated, Platform } from "react-native";
import { TouchableOpacity, Dimensions, ScrollView, PanResponder } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { useState, useEffect, useRef } from "react";
import Icons from '@expo/vector-icons/FontAwesome';
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "./context.js";
import { HomeScreen } from './h_homeScreen.js';
import { HistoryScreen } from "./HistoryScreen.js";
import { Profile } from "./s_settigns.js";
import { userStore } from "./true.js";
import { LoginForms } from "./f_login.js";
import { Renders } from "./h_render.js";
import { SRender } from "./s_render_settings.js";
import { AppLoading } from "./s_load_spin.js";





const Tab = createBottomTabNavigator();


export default function App() {
  const Logged = userStore(state => state.Logged);
  const homeScreen = userStore(state => state.homeScreen);
  const renderOut = userStore(state => state.renderOut);
  const showRender = userStore(state => state.showRender);

  const setHomeScreen = userStore(state => state.setHomeScreen);
  const setRenderOut = userStore(state => state.setRenderOut);
  const setShowRender = userStore(state => state.setShowRender);



  const STRender = userStore(state => state.STRender);
  const showSTRender = userStore(state => state.showSTRender);

  const setSTRender = userStore(state => state.setSTRender);
  


  const loading = userStore(state => state.loading);
  const isLoading = userStore(state => state.isLoading);
  const setLoading = userStore(state => state.setLoading);




  const screnWidth = Dimensions.get('window').width;
  const slide1 = useRef(new Animated.Value(0)).current;
  const slide2 = useRef(new Animated.Value(screnWidth)).current;
  const slide3 = useRef(new Animated.Value(screnWidth)).current;


  useEffect(() => {
    const timer1 = setTimeout(() => {
    if (!showRender) {
      setHomeScreen();
      Animated.timing(slide1, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide1, {
        toValue: -screnWidth * 0.50,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        setHomeScreen();
      })
    }
  }, 100);
  return () => clearTimeout(timer1);
  }, [showRender]);



  useEffect(() => {
    const timer2 = setTimeout(() => {
    if (showRender) {
      setRenderOut();
      Animated.timing(slide2, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(slide2, {
        toValue: screnWidth,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setRenderOut();
      });
    }
  }, 100);
  return () => clearTimeout(timer2);
  }, [showRender]);














  useEffect(() => {
    const timer3 = setTimeout(() => {
    if (showSTRender) {
      setSTRender();
      Animated.timing(slide3, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(slide3, {
        toValue: screnWidth,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setSTRender();
      })
    }
  }, 100);
  return () => clearTimeout(timer3);
  }, [showSTRender]);






  useEffect(() => {
    const timer3 = setTimeout(() => {
    if (!showSTRender) {
      Animated.timing(slide1, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide1, {
        toValue: -screnWidth * 0.40,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
  }, 100);
  return () => clearTimeout(timer3);
  }, [showSTRender]);






  useEffect(() => {
    if (isLoading) {
      setLoading();
    } else {
      setLoading();
    }
  }, [isLoading]);





  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => gestureState.dx < 100,
      onPanResponderMove: (_, gestureState) => {
        slide2.setValue(gestureState.dx - screnWidth);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < 100) {
          setShowRender();
          Animated.timing(null, {
            toValue: screnWidth,
            duration: 300,
            useNativeDriver: false
          }).start();
        } else {
          Animated.timing(null, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
          }).start(() => {
            setShowRender();
          })
        }
      }
    })
  ).current;



  return (
   <UserProvider>
    <SafeAreaProvider>
    <SafeAreaView edges={[]} style={{flex: 1, backgroundColor: !Logged ? '#000' : '#e6f0fa', position: 'relative'}}>
      {!Logged ? (
        <>
        <LoginForms/>
        </>
      ) : (
        <>
        {loading && (<View style={styles.App_spin}>
          <AppLoading/>
        </View>)}
        


        {renderOut && (
          <Animated.View style={[{transform: [{translateX: slide2}]}, styles.renderForm]}>
            <Renders/>
          </Animated.View>
        )}




        {STRender && (
          <Animated.View style={[{transform: [{translateX: slide3}]}, styles.STRender]}>
            <SRender/>
          </Animated.View>)}
        
        


    {homeScreen && (<Animated.View style={[styles.App, {transform: [{translateX: slide1}]}]}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#e6f0fa',
            height: Platform.OS === 'android' ? 90 : 60
          },
          tabBarActiveTintColor: '#00cc99',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'History') {
              iconName = 'history';
            } else if (route.name === 'Settings') {
              iconName = 'user';
            }
            return <Icons name={iconName} size={size} color={color}/>
          }
        })}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="History" component={HistoryScreen}/>
          <Tab.Screen name="Settings" component={Profile}/>
        </Tab.Navigator>
      </NavigationContainer>
      </Animated.View>
    )}
      </>
      )}
    <StatusBar style={!Logged ? 'light' : 'dark'} translucent={true} background="transparent"/>
    </SafeAreaView>
    </SafeAreaProvider>
    </UserProvider>
  )
}


const styles = StyleSheet.create({
  App: {flex: 1, backgroundColor: '#fff'},



  App_spin: {flex: 1, backgroundColor: 'transparent', position: 'absolute', left: 0, right: 0, bottom: 0,
  top: 0, zIndex: 120},





  renderForm: {backgroundColor: '#fff', position: 'absolute', flex: 1, left: 0,
  bottom: 0, top: 0, right: 0, zIndex: 100},




  STRender: {backgroundColor: '#fff', position: 'absolute', left: 0, right: 0, top: 0,
  bottom: 0, zIndex: 100, flex: 1}
})