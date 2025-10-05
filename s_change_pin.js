import { View, Text, TextInput, TouchableOpacity,StyleSheet, Alert } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { useRef, useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';



export const App_pin = () => {
    const { user } = useContext(UserContext);



    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const [pin, setPin] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHndler] = useClearByFocusCell({ value, setValue});



    useEffect(() => {
        if (value.length >= 6) {
            setPin(value);
            setTimeout(() => {
            setValue('');
            }, 100);
        } else {

        }
    }, [value]);
        




    return (
        <View style={styles.App}>
        <LinearGradient style={{flex: 1}} colors={['royalblue', 'rgba(140, 143, 142, 0.6)']}>
        <BlurView intensity={100} tint='light' style={{flex: 1}}>
        
        
        
        <View style={styles.home}>
        <Icon name='unlock' size={24} color='#fff'/>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'ivory'}}>Enter 6-digit PIN</Text>
        <CodeField ref={ref} {...props} value={value} onChangeText={setValue} cellCount={CELL_COUNT}
        rootStyle={styles.CodeField} keyboardType="number-pad" textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused}) => ( <View onLayout={getCellOnLayoutHndler(index)}
        key={index} style={[styles.cell, isFocused && styles.focusCell]}>
        <Text>{symbol || (isFocused ? <Cursor/> : null)}</Text>
        </View>)}/>
        </View>

        </BlurView>
        </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    App: {backgroundColor: 'transparent', flex: 1, borderRadius: 10},


    home: {textAlign: 'center', alignItems: 'center', flexDirection: 'column', flex: 1, padding: 20, gap: 30},
    CodeField: { marginTop: 10},
    cell: {width: 40, height: 40, lineHeight: 48, fontSize: 24, borderWidth: 2, borderColor: '#ccc',
    textAlign: 'center', borderRadius: 10, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'},
        
    focusCell: { borderColor: '#007aff'}
})