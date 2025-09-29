import { View, Text, StyleSheet } from "react-native";
import { Notifications1 } from "./h_notification";
import { Send_Zpay } from "./h_send_to_user";
import { Makert } from "./h_Makert";
import { DepositApp } from "./h_deposit";
import { InviteApp } from "./h_invite";
import { useContext } from "react";
import { UserContext } from "./context";
import { Service1 } from "./h_service1";
import { Service2 } from "./h_service2";
import { Service3 } from "./h_service3";
import { Service4 } from "./h_service4";
import { Service5 } from "./h_service5";
import { Service6 } from "./h_service6";
import { Service7 } from "./h_service7";
import { User_Info } from "./s_user_info";






export const Renders = () => {
    const { render } = useContext(UserContext);


    const Render_Handle = () => {
        switch(render) {
            case 'notification': return <Notifications1/>
            case 'sendToMoPay': return <Send_Zpay/>
            case 'markert': return <Makert/>
            case 'deposit': return <DepositApp/>
            case 'inviteApp': return <InviteApp/>
            case 'service1': return <Service1/>
            case 'service2': return <Service2/>
            case 'service3': return <Service3/>
            case 'service4': return <Service4/>
            case 'service5': return <Service5/>
            case 'service6': return <Service6/>
            case 'service7': return <Service7/>

            case 'user_info': return <User_Info/>
            default: return null;

        }
    }

    return (
        <View style={{flex: 1}}>
            <Render_Handle/>
        </View>
    )
}