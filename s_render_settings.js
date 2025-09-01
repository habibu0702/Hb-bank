import { View, Text, StyleSheet } from 'react-native';
import { User_Info } from './s_user_info';
import { About_page } from './s_About';
import { Privacy } from './s_privacy_security';
import { AppFaq } from './s_faq';
import { useContext } from 'react';
import { UserContext } from './context';




export const SRender = () => {
 const { render3 } = useContext(UserContext);
    
 

 const HandleRender = () => {
    switch(render3) {
        case 'user_info': return <User_Info/>
        case 'policy_security': return <Privacy/>
        case 'faq': return <AppFaq/>
        case 'about': return <About_page/>
        default: return null;
    }
 }


    return (
        <View style={{flex: 1}}>
            <HandleRender/>
        </View>
    )
}