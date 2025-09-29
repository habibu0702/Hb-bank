import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';





export const TermsOfService = () => {
    const setShowSTRender = userStore(state => state.setShowSTRender);



    return (
        <View style={{backgroundColor: '#fff', height: '100%', width: '100%'}}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => {setShowSTRender()}}>
                    <Ionicons name='chevron-back-outline' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative'},

    back: {position: 'absolute', left: 20, bottom: 8}
})