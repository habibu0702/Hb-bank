import { View, Text, StyleSheet, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';




export const AppFaq = () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);







    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.header1}>
                <TouchableOpacity style={styles.back} onPress={() =>
                {setShowSTRender()}}>
                    <Ionicons name='arrow-back-outline' size={30} color='#000'/>
                </TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>FAQ</Text>
            </View>

            <ScrollView>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative'},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8}
})