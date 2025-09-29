import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';



export const User_Info = () => {
 const setShowSTRender = userStore(state => state.setShowSTRender);
 const { user, darkMode } = useContext(UserContext);



 return (
    <View style={[styles.Home, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowSTRender()}}>
    <Ionicons name='chevron-back-outline' size={30} color={darkMode ? '#000' : 'ivory'}/>
    </TouchableOpacity>
    <Text style={{fontSize: 14, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Profile</Text>
    </View>

    
    {/*--------------------------------home-------------------------------*/}
    <View style={{padding: 20, textAlign: 'center', alignItems: 'center', flexDirection: 'column', gap: 10}}>
    <Image source={user.image ? {uri: user.image } : require('./assets/apple.png')} resizeMode="cover" style={{height: 80, width: 80, borderRadius: 50, borderWidth: 1,
    borderColor: 'gray', marginBottom: 5}}/>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory', marginBottom: 20}}>
    @{user.fullName}</Text>

    <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 10, backgroundColor: darkMode ? '#fff' : '#2a2a2a',
    borderRadius: 10}}>

    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evanly', gap: 20}}>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>full_name</Text>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>User_Name</Text>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>phone_number</Text>
    </View>

    <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 20}}>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{user.fullName}</Text>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{user.userName}</Text>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{user.phoneNumber}</Text>
    </View>

    </View>

    </View>
    </View>
 )
}


const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', flex: 1, borderRadius: 10},

    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8}
})