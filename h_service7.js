import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRef, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { userStore } from "./true";
import { useContext } from "react";
import { UserContext } from "./context";





export const Service7 = () => {
    const setShowRender = userStore(state => state.setShowRender);
    const { darkMode } = useContext(UserContext);
    const [platform, setPlatform] = useState('');
    const [customer_id, setCustomerId] = useState('');
    const [amount, setAmount] = useState('');


    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');



    return (
        <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => {setShowRender(false)}}>
        <Ionicons name="arrow-back-outline" size={30} color={darkMode ? '#000' : 'ivory'}/>
        </TouchableOpacity>
        </View>


        <View style={styles.home}>
        <View style={[styles.form, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
        <TextInput value={null} placeholder="ID or usename" onChangeText={null} inputMode="number-pad" style={styles.input}
        textContentType="number" placeholderTextColor="gray"/>

        <TextInput value={null} placeholder="amount" onChangeText={null} inputMode="numeric" style={styles.input}
        placeholderTextColor="gray"/>
        </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    App: {backgroundColor: '#ddd', flex: 1},

    header: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},




    home: {flexDirection: 'column', padding: 20},

    form: {height: 'auto', width: '100%', textAlign: 'center', flexDirection: 'column', gap: 10, padding: 10,
    borderRadius: 10},
    input: {height: 50, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10}
})