import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, RefreshControl, Image, StatusBar, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';




export const Makert = () => {
    const [refreshing, setRefreshing] = useState(false);
    const setShowRender = userStore(state => state.setShowRender);



    const Tab = createBottomTabNavigator();
    
 

 const onRefresh = () => {
    setRefreshing(true);

    const time = setTimeout(() => {
        setRefreshing(false);
    }, 2000);
    return () => clearTimeout(time);
 }









 const scrollY = useRef(new Animated.Value(0)).current;

 const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 70],
    extrapolate: 'clamp'
 })

 return (
    <LinearGradient style={styles.App1} colors={['#000', '#00cc99']}>
    <Animated.View style={[styles.header1, {height: headerHeight}]}>
    <View style={{textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row', padding: 10}}>

    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='chevron-back-outline' size={30} color='#276440ff'/>
    </TouchableOpacity>
    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00cc99'}}>Shop</Text>

    <TouchableOpacity style={styles.create_btn}>
        <Ionicons name='cart-outline' size={30} color='#00cc99'/>
    </TouchableOpacity>
    </View>
    </Animated.View>




    {/*-------------------Home-----------------------------------------*/}

    <Animated.ScrollView style={styles.home} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
    onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY}}}], {useNativeDriver: false})} scrollEventThrottle={16}>

    </Animated.ScrollView>
    <StatusBar barStyle="light-content" background="transparent"/>
    </LinearGradient>
 )
}


const styles = StyleSheet.create({
    App1: {backgroundColor: '#000', height: '100%', width: '100%', borderRadius: 10},

    header1: {backgroundColor: 'transparent', height: 300, width: '100%', justifyContent: 'flex-start', padding: 10},

    home: {backgroundColor: '#fff', flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20}
})