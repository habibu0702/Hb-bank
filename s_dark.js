import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import * as Haptics from 'expo-haptics';



export const DarkApp = () => {
    const setShowSTRender = userStore(state => state.setShowSTRender);
    const { darkMode, ToggleDark } = useContext(UserContext);

    
    let last = 0;
    const toggle = async (value) => {
        const now = Date.now();
        if (now - last > 500) {
            ToggleDark(value); 
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            last = now;
        }
    }



    return (
        <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>

            <View style={styles.home}>

                <View style={{backgroundColor: darkMode ? '#fff' : '#2a2a2a', height: 'auto', width: '100%',
                textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column',
                padding: 10, gap: 10, borderRadius: 10}}>
                <TouchableOpacity style={styles.dark1} onPress={() => {toggle(true)}}>
                <Ionicons name='sunny-outline' size={20} color='#000' style={styles.white}/>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>light</Text>
                {darkMode === true && (
                <Ionicons name="checkmark-circle-outline" size={30} color='#fff' style={{position: 'absolute',
                right: 20, backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50}}/>)}
                </TouchableOpacity>



                <TouchableOpacity style={styles.dark1} onPress={() => {toggle(false)}}>
                <Ionicons name='moon-outline' size={20} color='#fff' style={styles.black}/>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}> Dark</Text>
                {darkMode === false && (
                <Ionicons name="checkmark-circle-outline" size={30} color='#fff' style={{position: 'absolute',
                right: 20, backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50}}/>)}
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    App: {height: '100%', width: '100%'},

    
    home: {flexDirection: 'column', padding: 20, gap: 20},

    dark1: {height: 50, width: '100%', textAlign: 'left', position: 'relative',
    alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 10, gap: 15},

    white: {backgroundColor: '#fff', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5},

    black: {backgroundColor: '#000', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5}
})