import { View, Text, StyleSheet, Image } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { useContext } from "react";
import { UserContext } from "./context";



const CELL_COUNT = 6;

export const LoginPin = () => {
    const { user } = useContext(UserContext)
    const { Lock, setLock } = useContext(UserContext);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHndler] = useClearByFocusCell({ value, setValue});



    useEffect(() => {
        const pass = user.password;
        if (value === pass) {
            setLock(false);
        } else {
            setLock(true);
        }
    }, [value]);





    return (
        <View style={styles.App}>

            <LinearGradient style={styles.home} colors={['#ff99cc', '#333333']}>
            <Image source={user.image ? {uri: user.image} : require('./assets/default-image.png')}
            resizeMode="cover" style={styles.image}/>
            <Text>6-digit PIN</Text>
            <CodeField ref={ref} {...props} value={value} onChangeText={setValue} cellCount={CELL_COUNT}
            rootStyle={styles.CodeField} keyboardType="number-pad" textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused}) => ( <View onLayout={getCellOnLayoutHndler(index)} key={index}
            style={[styles.cell, isFocused && styles.focusCell]}>
            <Text>{symbol || (isFocused ? <Cursor/> : null)}</Text>
            </View>)}/>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    App: {flex: 1, backgroundColor: '#ddd'},

    image: {height: 60, width: 60, borderRadius: 50, marginTop: 40},

    

    home: {padding: 30, textAlign: 'center', alignItems: 'center', flexDirection: 'column', gap: 20, flex: 1},

    CodeField: { marginTop: 20},
    cell: {width: 40, height: 40, lineHeight: 48, fontSize: 24, borderWidth: 2, borderColor: '#ccc',
    textAlign: 'center', borderRadius: 10, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'},

    focusCell: { borderColor: '#00cc99'}
})