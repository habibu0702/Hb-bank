import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';


export const DepositApp = () => {
    


 const navigator = useNavigation();
 const back = () => {
    navigator.goBack();
 }






 return (
   <View style={styles.App}>
   <View style={styles.header}>
   <TouchableOpacity style={styles.back} onPress={() => back()}>
   <Ionicons name='chevron-back-outline' size={30} color='#000'/>
   </TouchableOpacity>
   <Text style={{fontSize: 16, fontWeight: 'bold'}}>Add Money</Text>
   </View>
   
   <View style={styles.home}>
   <View style={styles.wallet}>
   <View style={styles.num}>
   <Text style={{fontSize: 15, fontWeight: 'bold'}}>acc: Soon</Text>
   </View>


    <View style={styles.acc1}></View>
    <View style={styles.window}></View>

    <View style={styles.acc_name}>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Name: MoPay/habibu</Text>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>charges:  &#8358; 10 Naira</Text>
    </View>
    </View>
    </View>
    </View>
    )
}


const styles = StyleSheet.create({
    App: {backgroundColor: '#ddd', height: '1005', width: '100%'},

    header: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},









    home: {flexDirection: 'column', gap: 10, padding: 20},

    wallet: {backgroundColor: '#fff', height: 200, width: '100%', elevation: 5, borderRadius: 15,
    position: 'relative', textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderWidth: 1},


    num: {height: '50%', width: '100%', position: 'absolute', textAlign: 'left', alignItems: 'center',
    flexDirection: 'row', left: 0, right: 0, top: 0, padding: 10},





    acc1: {height: 1, width: '100%', borderWidth: 1, backgroundColor: '#000'},

    window: {height: 50, width: 50, borderWidth: 1, borderColor: 'gray', position: 'absolute', right: 0,
    top: 20, borderRightColor: '#0000', borderTopLeftRadius: 10, borderBottomLeftRadius: 10},




    acc_name: {height: '50%', width: '100%', textAlign: 'center', alignItems: 'center', position: 'absolute',
    justifyContent: 'space-between', flexDirection: 'row', padding: 10, left: 0, right: 0, bottom: 0}
})