import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';



export const InviteApp = () => {
    const setShowRender = userStore(state => state.setShowRender);



    return (
        <View style={styles.App}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() =>
                    {setShowRender()}}>
                    <Ionicons name='chevron-back-outline' size={30} color='#000'/>
                </TouchableOpacity>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Refer & Earn</Text>
            </View>

            <View style={styles.home}>
                <View style={styles.container}>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    App: {backgroundColor: '#fff', height: '100%', width: '100%'},

    header: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative'},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},
    
    home: {flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 20, height: '60%', width: '100%'},

    container: {backgroundColor: '#e6f0fa', height: 300, width: '100%', borderRadius: 15}
})