import { View, Text, StyleSheet, Image, ScrollView, Animated, BackHandler, Alert } from 'react-native';
import { Modal, RefreshControl, Platform, Vibration, TextInput, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, InteractionManager } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { bottom } from './h_bottom';



export const HomeScreen = () => {
 const [eye, setEye] = useState(true);
 const [refreshing, setRefreshing] = useState(false);
 const [hash, setHash] = useState(false);
 const { darkMode, user } = useContext(UserContext);
 const { Lock, setLock } = useContext(UserContext);

 


 const format = parseFloat(user.balance).toLocaleString('ha-NG', {
 style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2});




 const refresh = () => {
  setRefreshing(true);
  setEye(false);
  const timer = setTimeout(() => {
    setRefreshing(false);
    setEye(true);
    feedback();
  }, 2000);
  return () => clearTimeout(timer);
 }


 const feedback = async () => {
  if (Platform.OS === 'android') {
    Vibration.vibrate(10);
  } else {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
 }

 let last = 0;
 const trigger = () => {
  const now = Date.now();
  if (now - last > 500) {
    feedback();
    last = now;
  }
 }




 const navigator = useNavigation();
 const open = (value) => {
  if (value) {
    navigator.navigate(value);
    trigger();
  } else {
    return null;
  }
 }








 const scrollY = useRef(new Animated.Value(0)).current;

 const height = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [170, 80],
  extrapolate: 'clamp'
 });



 const scaleY = scrollY.interpolate({
  inputRange: [0, 80],
  outputRange: [1, 0],
  extrapolate: 'clamp'
 });








  return (
  <View style={{position: 'relative', flex: 1, backgroundColor: darkMode ? '#ddd' : '#121212', gap: 10}}>

    <Animated.View style={[styles.header1, {backgroundColor: darkMode ? '#fff' : '#1e1e1e',
    height: height}]}>

      <Animated.View style={[styles.header_table1]}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
        &#8358; {eye ? format || 156 : '****'} NGN</Text>


        <TouchableOpacity style={{height: 30, width: 30, borderRadius: 50, textAlign: 'center',
        alignItems: 'center', justifyContent: 'center'}} onPress={() => {setLock(true)}}>
        <Icon name={Lock ? "lock" : "unlock"} size={20} color={darkMode ? '#000' : 'ivory'}/>
        </TouchableOpacity>




        <TouchableOpacity style={styles.bell} onPress={() =>
        navigation.navigate('Screen', {screen: 'notification'})}>
          <Ionicons name='notifications-outline' size={24} color={darkMode ? '#000' : 'ivory'}/>
        </TouchableOpacity>
      </Animated.View>





      {/*---------------------------------header-service---------------------------------------*/}



      <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
      style={[styles.header_table2, {transform: [{scale: scaleY}]}]}>



        <Animated.View style={{transform: [{scale: scaleY}], textAlign: 'center', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 5, padding: 5}}>
        <Image source={user.image ? {uri: user.image} : require('./assets/apple.png')}
        resizeMode='cover' style={styles.image}/>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
        @{user.userName}</Text>
        </Animated.View>


        
        <Animated.View style={[styles.group]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
        navigation.navigate('Screen', {screen: 'P2P'})}>
          <Icon name='user' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
        marginLeft: 15}}>Send To MoPay</Text>
        </Animated.View>



        <Animated.View style={[styles.group]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
        navigation.navigate('Screen', {screen: 'Deposit'})}>
          <Icon name='user' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '000' : 'ivory',
        marginLeft: 15}}>Deposit</Text>
        </Animated.View>


        
        <Animated.View style={[styles.group]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
        navigation.navigate('Screen', {screen: 'Markert'})}>
          <Icon name='shopping-bag' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
        marginLeft: 15}}>Bmarkert</Text>
        </Animated.View>
        
        <Animated.View style={[styles.group]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
        navigation.navigate('Screen', {screen: 'Invite'})}>
          <Ionicons name='gift-outline' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
        marginLeft: 15}}> Refer & Earn</Text>
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>






    {/*------------------------------home------------------------------------*/}

    <Animated.ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} tintColor='#00cc99' onRefresh={refresh}/>
    } style={{backgroundColor: darkMode ? '#fff' : 'black'}} onScroll={Animated.event(
      [{nativeEvent: { contentOffset: { y: scrollY}}}], { useNativeDriver: false})}
      scrollEventThrottle={16} overScrollMode="never">
      <View style={styles.Home_container}>




    <View style={[styles.table2, {backgroundColor: darkMode ? '#fff' : 'rgba(25,25,25,0.20)'}]}>
    {bottom.map((keys) => (
    <TouchableOpacity key={keys.name} style={styles.table2_btn} onPress={() => open(keys.screen)}>
    <Ionicons name={keys.name} size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 13, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{keys.lable}</Text>
    <Ionicons name={keys.forward} size={20} color='gray' style={styles.forward}/>
    </TouchableOpacity>
    ))}
    </View>
    </View>
    </Animated.ScrollView>
    </View>
  )
}























const styles = StyleSheet.create({

  header1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'space-between', flexDirection: 'column', padding: 15, borderRadius: 20, position: 'relative'},




  header_table1: {textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
  flexDirection: 'row', padding: 10, height: 60, width: '100%', marginBottom: 5},

  bell: {backgroundColor: 'rgba(25,25,25,0.20)', height: 30, width: 30, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', borderRadius: 50},













  header_table2: {textAlign: 'center', flexDirection: 'row', padding: 10, height: 'auto', width: '100%', rowGap: 10,
  position: 'relative'},



  group: {textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
  gap: 5, padding: 5},

  image: {height: 40, width: 40, borderRadius: 50},

  header_btn: {backgroundColor: '#00cc99', height: 40, width: 40, borderRadius: 50,
  textAlign: 'center', alignItems: 'center', justifyContent: 'center', padding: 5, marginLeft: 15},















  Home_container: {flexDirection: 'column', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 15, gap: 5},

  search: {width: '95%', padding: 20},



  table2: {backgroundColor: '#fff', height: 'auto', width: '100%', flexDirection: 'column',
  borderRadius: 10, textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', padding: 10,
  gap: 15, marginBottom: 10},


  table2_btn: {height: 60, width: '100%', textAlign: 'left', alignItems: 'center',
  justifyContent: 'left', flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20,
  gap: 20, position: 'relative'},

  table2_icon: {backgroundColor: 'rgba(25,25,25,0.30)', height: 35, width: 35, borderRadius: 50, textAlign: 'center',
  justifyContent: 'center', alignItems: 'center', padding: 8},

  forward: {position: 'absolute', right: 0},

  render_container: { position: 'absolute', height: '100%', width: '100%', left: 0, right: 0,
  bottom: 0, top: 0, zIndex: 100, borderRadius: 10},







  swiper: {backgroundColor: 'red', flexDirection: 'row', height: 120, width: '100%', borderRadius: 10},

  swiper_btn: {backgroundColor: 'royalblue', height: 120, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', borderRadius: 10, padding: 10}
})