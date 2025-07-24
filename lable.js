import { Animated, View, TextInput, Text, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";



 export default function InputLable({ label, value, onChangeText}) {

 const [Focus, setFocus] = useState(false);

 const upLable = useRef(new Animated.Value(value === '' ? 0 : 1)).current;


 


 useEffect(() => {
    Animated.timing(upLable, {
        toValue: value !=='' || Focus ? 1 : 0,
        duration: 200,
        useNativeDriver: false
    }).start();
 }, [Focus, value]);

 const labelStyle = {
    position: 'absolute',
    zIndex: 5,
    left: 6,
    top: upLable.interpolate({
        inputRange: [0, 0],
        outputRange: [10, -7],
    }),
    fontSize: upLable.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
    }),
    color: upLable.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
    }),
 }

 return (
    <View style={styles.container}>
        <Animated.Text style={labelStyle}>
            {label}
        </Animated.Text>
        <TextInput style={styles.input} 
        value={value}
        returnKeyType="next"
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} />
    </View>
 )
 }

 const styles = StyleSheet.create({
    container: {
        height: 'auto'
    },
    input: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50,
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }
 });
