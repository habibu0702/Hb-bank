import { View, Text, StyleSheet, Image, ScrollView, Animated, BackHandler, Alert } from 'react-native';
import { Modal, RefreshControl } from 'react-native';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import { withSpring, withTiming, runOnJS } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';


export const HomeScreen = () => {
 const showRender = userStore(state => state.showRender);
 const setShowRender = userStore(state => state.setShowRender);
 const setIsloading = userStore(state => state.setIsloading);
 const { setRender } = useContext(UserContext);
 const { user } = useContext(UserContext);
 const [eye, setEye] = useState(true);
 const [refreshing, setRefreshing] = useState(false);




 const format = user.balance.toLocaleString('ha-NG', {
  style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2});




 const refresh = () => {
  setRefreshing(true);
  setIsloading();
  setEye(false);
  const timer = setTimeout(() => {
    setRefreshing(false);
    setIsloading();
    setEye(true);
  }, 2000);
  return () => clearTimeout(timer);
 }





 const open = () => {
  if (!showRender) {
    setShowRender();
    setIsloading();
    setTimeout(() => {
      setIsloading();
    }, 1000);
  } else {
    return null;
  }
 }




 

 

  return (
  <View style={{position: 'relative', flex: 1, backgroundColor: '#fff'}}>
    <View style={styles.header1}>
    
    <View style={{textAlign: 'center', alignItems: 'center', gap: 10, paddingTop: 15, flexDirection: 'row'}}>
    <Image source={user.image ? {uri: user.image} : require('./assets/default-profile.png')} style={styles.image}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Hi, @{user.userName || 'user485'}</Text>
    </View>

    <View style={{textAlign: 'center', alignItems: 'center', flexDirection: 'row', gap: 20, paddingTop: 15}}>
    <TouchableOpacity style={styles.Customer_support}>
    <Icon name='whatsapp' size={20} color='#fff' style={styles.push_icon}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.push} onPress={() =>
    {setRender('notification'); open()}}>
    <Icon name='bell' size={20} color='#fff' style={styles.push_icon}/>
    </TouchableOpacity>
    </View>
    </View>

    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} tintColor='#00cc99' onRefresh={refresh}/>
    } style={styles.Home_container}>
      {/*--------------------wallet--------------------------*/}
    <LinearGradient style={styles.wallet} colors={['#0000', '#00cc99']}
    start={{x: 1, y: 0}} end={{x: 0, y: 1}}>
    <View style={styles.eye_table}>
    <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Balance</Text>
    <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)}>
    <Icon name={eye ? 'eye' : 'eye-slash'} size={24} color='#000'/>
    </TouchableOpacity>
    </View>

    <Text style={{fontSize: 18, fontWeight: 'bold'}}>&#8358; {eye ? format : '+++++'}</Text>

    <TouchableOpacity style={styles.deposit_button} onPress={null}>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Deposit</Text>
    </TouchableOpacity>
    </LinearGradient>
    {/*---------------------feurter-----------------------------*/}
    <View style={styles.table1}>
    <TouchableOpacity style={styles.table1_btn} onPress={() =>
    {setRender('sendToZpay'); open()}}>
    <Icon name='user' size={20} color='#fff' style={styles.table1_icon}/>
    <View style={{backgroundColor: '#00cc99', position: 'absolute', top: '45%',
    left: '44%', height: 8, width: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}/>
    <Text style={{fontSize: 13, fontWeight: 'bold'}}>To F</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table1_btn} onPress={(() =>
    {setRender('markert'); open()})}>
    <Icon name='shopping-bag' size={20} color='#fff' style={styles.table1_icon}/>
    <Text style={{fontSize: 13, fontWeight: 'bold'}}>Shop</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table1_btn}>
    <Icon name='gift' size={18} color='#fff' style={styles.table1_icon}/>
    <Text style={{fontSize: 13, fontWeight: 'bold'}}>Invite</Text>
    </TouchableOpacity>
    </View>
    {/*------------------------services-----------------------------------*/}
    <View style={styles.table2}>
    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service1'); open()}}>
    <Icon name='phone' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Airtime</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service2'); open()}}>
    <Icon name='mobile' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Buy Data</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service3'); open()}}>
    <Icon name='tv' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Cable TV</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service4'); open()}}>
    <Icon name='lightbulb-o' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Electricity</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service5'); open()}}>
      <Icon name='graduation-cap' size={18} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Exam</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {setRender('service6'); open()}}>
    <Ionicons name='sync-circle-outline' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Convert To Cash</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {null}}>
    <Ionicons name='print' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Rechage card</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {null}}>
    <Ionicons name='sync-circle-outline' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Convert To Cash</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.table2_btn} onPress={() =>
    {null}}>
    <Ionicons name='sync-circle-outline' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Convert To Cash</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}





const styles = StyleSheet.create({
  Home: {backgroundColor: '#fff', position: 'relative', flex: 1},

  header1: {backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'space-between', flexDirection: 'row', padding: 20, borderRadius: 20},

  image: {height: 40, width: 40, borderRadius: 50, borderWidth: 2, borderColor: 'gray'},
  push: {backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50, shadowColor: '#000',
  shadowOffset: {width: 0, height: 2}, shadowOpacity: 2, shadowRadius: 5, elevation: 10, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center'},

  Customer_support: {backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 2},
  shadowOpacity: 2, shadowRadius: 5, elevation: 10},


  Home_container: {flexDirection: 'column', height: '100%', width: '100%', padding: 20},

  wallet: { height: 120, width: '100%', padding: 10, gap: 20, position: 'relative',
  borderRadius: 10, marginBottom: 15},

  eye_table: {height: 30, width: 'auto', textAlign: 'center', alignItems: 'center',
  justifyContent: 'flex-start', flexDirection: 'row', gap: 5},

  deposit_button: {position: 'absolute', right: 0, bottom: 1, height: '60', width: 100, borderColor: '#000',
  borderWidth: 2, textAlign: 'center', alignItems: 'center', justifyContent: 'center', borderBottomColor: 'transparent',
  borderRightColor: 'transparent', borderTopLeftRadius: 10, right: 1},

  table1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', textAlign: 'center',
  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10,
  borderRadius: 10, marginBottom: 15},

  table1_btn: {backgroundColor: '#fff', height: 60, width: 60, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20, gap: 5,  position: 'relative',},
  table1_icon: {backgroundColor: '#00cc99', height: 26, width: 26, borderRadius: 5, textAlign: 'center',
  alignItems: 'center', justifyContent: 'space-between', padding: 2, flexDirection: 'column'},



  table2: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexWrap: 'wrap', flexDirection: 'row',
  borderRadius: 10, textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', padding: 10,
  gap: 15},
  table2_btn: {backgroundColor: '#fff', height: 100, width: 90, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20, gap: 15},
  table2_icon: {backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
  justifyContent: 'center', padding: 5},

  render_container: { position: 'absolute', height: '100%', width: '100%', left: 0, right: 0,
  bottom: 0, top: 0, zIndex: 100, borderRadius: 10}
})