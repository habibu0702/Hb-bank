import { View, Text, Alert, StyleSheet, Animated, Platform, Vibration } from "react-native";
import { TouchableOpacity, Dimensions, ScrollView, PanResponder, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { useState, useEffect, useRef } from "react";
import Icons from '@expo/vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from './h_homeScreen.js';
import { HistoryScreen } from "./HistoryScreen.js";
import { Profile } from "./s_settigns.js";
import { userStore } from "./true.js";
import { useContext } from "react";
import { UserContext } from "./context.js";
import { Forms } from "./f_Forms.js";
import { Renders } from "./h_render.js";
import { SRender } from "./s_render_settings.js";
import { AppLoading } from "./s_load_spin.js";
import { LoginPin } from "./f_login_pin.js";
import { BlurView } from "expo-blur";
import * as Haptics from 'expo-haptics';





const Tab = createBottomTabNavigator();


export const MainApp = () => {
  const { darkMode, IsSpin } = useContext(UserContext);
  const { Lock, setLock } = useContext(UserContext);
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
  





  const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors, background: 'transparent'
    }
  };
  const scheme = useColorScheme();











  const screnWidth = Dimensions.get('window').width;
  const slide1 = useRef(new Animated.Value(0)).current;
  const slide2 = useRef(new Animated.Value(screnWidth)).current;
  const slide3 = useRef(new Animated.Value(screnWidth)).current;


  useEffect(() => {
    const timer1 = setTimeout(() => {
    if (!showRender) {
      
      Animated.timing(slide1, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide1, {
        toValue: -screnWidth * 0.40,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        
      })
    }
  }, 100);
  return () => clearTimeout(timer1);
  }, [showRender]);



  useEffect(() => {
    const timer2 = setTimeout(() => {
    if (showRender) {
      
      Animated.timing(slide2, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(slide2, {
        toValue: screnWidth,
        duration: 250,
        useNativeDriver: false
      }).start(() => {
        
      });
    }
  }, 100);
  return () => clearTimeout(timer2);
  }, [showRender]);














  useEffect(() => {
    const timer3 = setTimeout(() => {
    if (showSTRender) {
      setSTRender(true);
      Animated.timing(slide3, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(slide3, {
        toValue: screnWidth,
        duration: 250,
        useNativeDriver: false
      }).start(() => {
        setSTRender(false);
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
        duration: 250,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slide1, {
        toValue: -screnWidth * 0.40,
        duration: 250,
        useNativeDriver: true
      }).start();
    }
  }, 100);
  return () => clearTimeout(timer3);
  }, [showSTRender]);










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




  const haptic = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (Platform.OS === 'android') {
      Vibration.vibrate(10);
    }
  }



  return (
    <SafeAreaProvider>
    <SafeAreaView edges={[]} style={{flex: 1, backgroundColor: !Logged ? '#000' : '#e6f0fa', position: 'relative'}}>
      {!Logged ? (
        <>
        <Forms/>
        </>
      ) : (
        <>

        {IsSpin && (<Animated.View style={styles.App_spin}>
          <AppLoading/>
        </Animated.View>)}




        {Lock && (<Animated.View style={styles.LoginPin}>
          <LoginPin/>
        </Animated.View>)}
    
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
            left: 20,
            right: 20,
            zIndex: 10,
            elevation: 10,
            borderColor: 'transparent',
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            backgroundColor: darkMode ? '#fff' : '#212121',
            height: Platform.OS === 'android' ? 90 : 60
          },
          tabBarActiveTintColor: '#00cc99',
          tabBarInactiveTintColor: darkMode ? 'gray' : 'ivory',
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'History') {
              iconName = 'clock-o';
            } else if (route.name === 'You') {
              iconName = 'user';
            }
            return <Icons name={iconName} size={size} color={color}/>
          }
        })}>
          <Tab.Screen name="Home" component={HomeScreen} listeners={{ tabPress: () => haptic()}}/>
          <Tab.Screen name="History" component={HistoryScreen} listeners={{ tabPress: () => haptic()}}/>
          <Tab.Screen name="You" component={Profile} listeners={{ tabPress: () => haptic()}}/>
        </Tab.Navigator>
      </NavigationContainer>
      </Animated.View>
    )}
      </>
      )}
    <StatusBar style={!Logged ? 'light' : darkMode ? 'dark' : 'light'} translucent={true} background="transparent"/>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  App: {flex: 1, backgroundColor: '#fff'},


  LoginPin: {height: '100%', width: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 100},



  App_spin: {backgroundColor: 'transparent', height: '100%', width: '100%', position: 'absolute',
  left: 0, right: 0, bottom: 0, top: 0, zIndex: 1999},





  renderForm: {backgroundColor: '#fff', position: 'absolute', left: 0, right: 0, top: 0,
  bottom: 0, zIndex: 1, flex: 1},




  STRender: {backgroundColor: '#000', position: 'absolute', left: 0, right: 0, top: 0,
  bottom: 0, zIndex: 100, flex: 1}
})