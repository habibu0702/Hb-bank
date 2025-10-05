import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { Notifications1 } from "./h_notification";
import { DepositApp } from "./h_deposit";
import { useContext } from "react";
import { UserContext } from "./context";
import { HomeScreen } from "./h_homeScreen";
import { InviteApp } from "./h_invite";
import { Makert } from "./h_Makert";
import { P2P } from "./h_send_to_user";
import { Service1 } from "./h_service1";
import { Service2 } from "./h_service2";
import { Service3 } from "./h_service3";
import { Service4 } from "./h_service4";
import { Service5 } from "./h_service5";
import { Service6 } from "./h_service6";
import { Service7 } from "./h_service7";


const Stack = createNativeStackNavigator();
export const ScreenStack = () => {
    const { darkMode } = useContext(UserContext);

    return (

        <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: true
        }}>
        <Stack.Screen name="Main" component={HomeScreen}/>
        <Stack.Screen name="service1" component={Service1} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: darkMode ? '#ddd' : '#000'},
        headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
        headerShadowVisible: false,
        }}/>

        <Stack.Screen name="service2" component={Service2} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: darkMode ? '#ddd' : '#000'},
        headerTitleStyle: {color: darkMode ? '#000' : 'ivory'},
        headerShadowVisible: false,
        headerTitle: 'Buy Data',
        headerShown: true
        }}/>

        <Stack.Screen name="service3" component={Service3}/>
        <Stack.Screen name="service4" component={Service4}/>
        <Stack.Screen name="service5" component={Service5}/>
        <Stack.Screen name="service6" component={Service6}/>
        <Stack.Screen name="service7" component={Service7}/>
        <Stack.Screen name="Deposit" component={DepositApp}/>
        <Stack.Screen name="notification" component={Notifications1}/>
        <Stack.Screen name="Markert" component={Makert}/>
        <Stack.Screen name="Invite" component={InviteApp}/>
        <Stack.Screen name="P2P" component={P2P}/>
        </Stack.Navigator>
    )
}