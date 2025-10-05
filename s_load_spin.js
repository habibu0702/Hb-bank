import { View, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { userStore } from './true';


export const AppLoading = () => {

    const Logged = userStore(state => state.Logged);



    const screnWidth = Dimensions.get('window').width;
    const slide = useRef(new Animated.Value(-0)).current;
    const slide2 = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.9)).current;


    useEffect(() => {
        Animated.loop(
            Animated.timing(slide, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start();
    }, []);

    const spin = slide.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10]
    });


    useEffect(() => {
        Animated.loop(
            Animated.timing(slide2, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start();
    }, []);

    const spin2 = slide2.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 50]
    });




    useEffect(() => {
        Animated.loop(
            Animated.timing(scale, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            })
        ).start();
    }, []);





    return (
        <View style={[styles.AppL, {backgroundColor: !Logged ? '#fff' : 'rgba(25,25,25,0.60)'}]}>
            <Animated.View style={[styles.container, {transform: [{scale: scale}]}]}>

                <Animated.View style={[styles.spin, {transform: [{translateY: spin}]}]}></Animated.View>

                <Animated.View style={[styles.spin2, {transform: [{translateY: spin2}]}]}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00cc99'}}>M</Text>
                </Animated.View>

                <Animated.View style={[styles.spin2, {transform: [{translateY: spin2}]}]}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00cc99'}}>o</Text>
                </Animated.View>

                <Animated.View style={[styles.spin2, {transform: [{translateY: spin2}]}]}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00cc99'}}>P</Text>
                </Animated.View>

                </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    AppL: { flex: 1, textAlign: 'center', alignItems: 'center', justifyContent: 'center'},

    container: {height: 80, width: 80, borderRadius: 50, backgroundColor: '#e6f0fa', position: 'relative',
    textAlign: 'center', alignItems: 'center', justifyContent: 'center'},

    spin: {height: 80, width: 80, borderWidth: 6, borderColor: '#00cc99', position: 'absolute', left: 0,
    right: 0, bottom: 0, top: 0, borderRadius: 50},

    spin2: {height: 80, width: 80, borderWidth: 6, borderColor: 'transparent', position: 'absolute', left: 0,
    right: 0, bottom: 0, top: 0, borderRadius: 50, borderTopColor: 'rgba(255,255,255,0.50)'}
})