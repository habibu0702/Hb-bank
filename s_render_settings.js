import { View, Text, StyleSheet } from 'react-native';
import { User_Info } from './s_user_info';
import { Privacy } from './s_privacy_security';
import { DarkApp } from './s_dark';
import { About_page } from './s_About';
import { AppFaq } from './s_faq';
import { AppSupport } from './s_help_support';
import { TermsOfService } from './s_terms_of_service';
import { Policy } from './s_privacy_policy';
import { Wallet } from './w_WalletScreen';
import { useContext } from 'react';
import { UserContext } from './context';




export const SRender = () => {
 const { render3 } = useContext(UserContext);
    
 

 const HandleRender = () => {
    switch(render3) {
        case 'user_info': return <User_Info/>
        case 'wallet': return <Wallet/>
        case 'privacy_security': return <Privacy/>
        case 'appSupport': return <AppSupport/>
        case 'termsOfService': return <TermsOfService/>
        case 'policy': return <Policy/>
        case 'dark': return <DarkApp/>
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