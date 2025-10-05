import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import { createStaticNavigation } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabNavigator } from "./h_TabNavigation";
import { SettingsScreen } from "./s_settigns";
import { ScreenStack } from "./h_ScreenStack";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { Service1 } from "./h_service1";
import { Service2 } from "./h_service2";
import { Service3 } from "./h_service3";
import { Service4 } from "./h_service4";
import { Service5 } from "./h_service5";
import { Service6 } from "./h_service6";
import { Service7 } from "./h_service7";
import { useContext } from "react";
import { UserContext } from "./context";
import { Laguage } from "./s_List_language";
import { TermsOfService } from "./s_terms_of_service";
import { About_page } from "./s_About";
import { User_Info } from "./s_user_info";
import { DarkApp } from "./s_dark";
import { Policy } from "./s_privacy_policy";
import { Privacy } from "./s_privacy_security";
import { AppSupport } from "./s_help_support";
import { AppFaq } from "./s_faq";
import { Wallet } from "./w_WalletScreen";
import { App_pass } from "./s_change_pass";
import { App_pin } from "./s_change_pin";
import { Forms } from "./f_Forms";



 const Stack = Platform.OS === 'android' ? createStackNavigator() : createNativeStackNavigator();

export const MainTab = () => {
    const { darkMode, Login } = useContext(UserContext);


 return (
  <SafeAreaView edges={Platform.OS === 'android' ? ['bottom'] : []} style={{flex: 1, padding: 0,
  backgroundColor: 'transparent'}}>
  {Login ?
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerStyle: { backgroundColor: darkMode ? '#fff' : '#000'},
    gestureEnabled: true,
    gestureDirection: 'horizontal'
  }}>

  <Stack.Screen name="MoPay" component={TabNavigator} options={{headerTitle: 'Back', headerShown: false}}/>

  <Stack.Screen name="service1" component={Service1} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service2" component={Service2} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service3" component={Service3} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service4" component={Service4} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service5" component={Service5} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service6" component={Service6} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>

  <Stack.Screen name="service7" component={Service7} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
  }}/>


  <Stack.Screen name="Profile" component={User_Info} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {backgroundColor: darkMode ? '#ddd' : '#000'},
  headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
  headerShadowVisible:false,
  }}/>

  <Stack.Screen name="Wallet" component={Wallet} options={{
  cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {backgroundColor: darkMode ? '#ddd' : '#000', height: 60}
  }}/>

  <Stack.Screen name="AppDark" component={DarkApp} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {backgroundColor: darkMode ? '#ddd' : '#000', height: 50},
  headerShadowVisible: false,
  headerTitleStyle: { color: darkMode ? '#000' : 'ivory'},
  headerTitle: 'Dark Mode'
  }}/>

  <Stack.Screen name="HelpSupport" component={AppSupport} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {backgroundColor: 'royalblue', height: 60},
  headerTitleStyle: {color: 'ivory'},
  headerShadowVisible: false,
  headerTintColor: '#000',
  headerTitle: 'Support'
  }}/>

  <Stack.Screen name="FAQ" component={AppFaq} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }}/>

  <Stack.Screen name="Policy" component={Policy} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }}/>

  <Stack.Screen name="Privacy" component={Privacy} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }}/>

  <Stack.Screen name="UpdatePassword" component={App_pass} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: { backgroundColor: darkMode ? '#ddd' : '#000'},
  headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
  headerBackTitle: 'Pass',
  headerTitle: 'Update Password'
  }}/>

  <Stack.Screen name="UpdatePin" component={App_pin} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: { backgroundColor: 'royalblue'},
  headerTitleStyle: {color: 'ivory'},
  headerBackTitle: 'PIN',
  headerTintColor: '#000',
  headerTitle: 'Reset PIN'
  }}/>

  <Stack.Screen name="lang" component={Laguage} options={{
  presentation: 'transparentModal',
  headerShown: false
  }}/>

  <Stack.Screen name="About" component={About_page} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  headerStyle: { backgroundColor: darkMode ? '#ddd' : '#000'},
  headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
  headerBackTitle: 'Back',
  headerTitle: 'About'
  }}/>

  <Stack.Screen name="Terms" component={TermsOfService} options={{
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: { backgroundColor: 'royalblue'},
  headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
  headerTintColor: '#000',
  headerTitle: 'Terms'
  }}/>
  </Stack.Navigator>
  </NavigationContainer>
  :
   <View style={{flex: 1}}><Forms/></View>
  }
  <StatusBar style={darkMode ? "dark" : "light"} background='transparent' translucent={true}/>
  </SafeAreaView>
    )
}