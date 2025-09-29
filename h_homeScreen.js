import { View, Text, StyleSheet, Image, ScrollView, Animated, BackHandler, Alert } from 'react-native';
import { Modal, RefreshControl, Platform, Vibration, TextInput, useColorScheme } from 'react-native';
import { useSharedValue, useAnimatedStyle, ZoomInEasyDown, FadeInDown } from 'react-native-reanimated';
import { withSpring, withTiming, runOnJS } from 'react-native-reanimated';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import Swiper from 'react-native-swiper';
import { Stagger } from '@animatereactnative/stagger';
import * as Haptics from 'expo-haptics';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';



export const HomeScreen = () => {
 const showRender = userStore(state => state.showRender);
 const setShowRender = userStore(state => state.setShowRender);
 const homeScreen = userStore(state => state.homeScreen);
 const { setRender, setIsSpin } = useContext(UserContext);
 const { render } = useContext(UserContext);
 const { user } = useContext(UserContext);
 const [eye, setEye] = useState(true);
 const [refreshing, setRefreshing] = useState(false);
 const [IsPlay, setIsPlay] = useState(true);
 const [hash, setHash] = useState(false);
 const { darkMode } = useContext(UserContext);
 const { Lock, setLock } = useContext(UserContext);



 const insets = useSafeAreaInsets();

 




 const format = parseFloat(user.balance).toLocaleString('ha-NG', {
 style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2});




 const refresh = () => {
  setRefreshing(true);
  setIsSpin(true);
  setEye(false);
  const timer = setTimeout(() => {
    setRefreshing(false);
    setIsSpin(false);
    setEye(true);
    feedback();
  }, 2000);
  return () => clearTimeout(timer);
 }


 const feedback = async () => {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  if (Platform.OS === 'android') {
    Vibration.vibrate(10);
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





 const open = () => {
  if (!showRender) {
    setShowRender(true);
    setIsSpin(true);
    trigger();
    setTimeout(() => {
      setIsSpin(false);
    }, 1000);
  } else {
    return null;
  }
 }









 const fade1 = useRef(new Animated.Value(0)).current;
  const fade2 = useRef(new Animated.Value(0)).current;
   const fade3 = useRef(new Animated.Value(0)).current;
    const fade4 = useRef(new Animated.Value(0)).current;
     const fade5 = useRef(new Animated.Value(0)).current;
      const fade6 = useRef(new Animated.Value(0)).current;
       const fade7 = useRef(new Animated.Value(0)).current;
        const fade8 = useRef(new Animated.Value(0)).current;
         const fade9 = useRef(new Animated.Value(0)).current;
          const fade10 = useRef(new Animated.Value(0)).current;
          const fade11 = useRef(new Animated.Value(0)).current;
          const fade12 = useRef(new Animated.Value(0)).current;


          useEffect(() => {
            if (!showRender) {
          Animated.stagger(80, [
            Animated.timing(fade1, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade2, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade3, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade4, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade5, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade6, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade7, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade8, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade9, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade10, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade11, {toValue: 1, duration: 100, useNativeDriver: true}),
            Animated.timing(fade12, {toValue: 1, duration: 100, useNativeDriver: true}),
          ]).start();
        } else {
        Animated.stagger(80, [
            Animated.timing(fade1, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade2, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade3, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade4, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade5, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade6, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade7, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade8, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade9, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade10, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade11, {toValue: 0, duration: 100, useNativeDriver: true}),
            Animated.timing(fade12, {toValue: 0, duration: 100, useNativeDriver: true}),
          ]).start();
        }
        }, [showRender]);


        const y1 = fade1.interpolate({
          inputRange: [0, 1],
          outputRange: [30, 0]
        })

        const y2 = fade2.interpolate({
          inputRange: [0, 1],
          outputRange: [30, 0]
        })
          const y3 = fade3.interpolate({
            inputRange: [0, 1],
            outputRange: [30, 0]
          });

          const y4 = fade4.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0]
        })
          const y5 = fade5.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          });

          const y6 = fade6.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0]
        })
          const y7 = fade7.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          });
          const y8 = fade8.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          });
          const y9 = fade9.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0]
        })
          const y10 = fade10.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          });
          const y11 = fade11.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0]
        })
          const y12 = fade12.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          });


 const op = useRef(new Animated.Value(0)).current;
 useEffect(() => {
  setTimeout(() => {
 Animated.timing(op, {toValue: 1, duration: 300, useNativeDriver: true}).start();
  }, 200);
 }, []);








 const scrollY = useRef(new Animated.Value(0)).current;


 const backgroundY1 = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: ['#fff', '#fff',],
  extrapolate: 'clamp'
 });

  const backgroundY2 = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: ['#121212', '#2a2a2a'],
  extrapolate: 'clamp'
 });

 const headerHeight = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [160, 70],
  extrapolate: 'clamp'
 });


  const heightY = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [60, 0],
  extrapolate: 'clamp'
 });


 const translateX = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [0, -20],
  extrapolate: 'clamp'
 });


 const scaleY = scrollY.interpolate({
  inputRange: [0, 80],
  outputRange: [1, 0],
  extrapolate: 'clamp'
 });


 const scaleY_app_name = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [0, 1],
  extrapolate: 'clamp'
 });


  const opacity = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [1, 0],
  extrapolate: 'clamp'
 });





 useEffect(() => {
  const listen = scrollY.addListener(({ value }) => {
    if (value >= 100 && !hash) {
      setIsPlay(false);
      trigger();
      setHash(true);
    } else if (value < 100 && hash) {
    setHash(false);
    setIsPlay(true);
    trigger();
    }
  });
  return () => scrollY.removeListener(listen);
 }, [hash]);


  return (
  <View style={{position: 'relative', flex: 1, backgroundColor: darkMode ? '#ddd' : '#000', gap: 10,
  paddingBottom: insets.bottom + 62}}>

    <Animated.View style={[styles.header1,
      {height: headerHeight, backgroundColor: darkMode ? backgroundY1 : backgroundY2}]}>

      <Animated.View style={[styles.header_table1, {opacity: opacity}]}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
        &#8358; {eye ? format : '****'} NGN</Text>


        <TouchableOpacity style={{height: 30, width: 30, borderRadius: 50, textAlign: 'center',
        alignItems: 'center', justifyContent: 'center'}} onPress={() => {setLock(true)}}>
        <Icon name={Lock ? "lock" : "unlock"} size={20} color={darkMode ? '#000' : 'ivory'}/>
        </TouchableOpacity>




        <TouchableOpacity style={styles.bell} onPress={() =>
          {setRender('notification'); open()}}>
          <Ionicons name='notifications-outline' size={24} color={darkMode ? '#000' : 'ivory'}/>
        </TouchableOpacity>
      </Animated.View>





      {/*------------------------------system-name--------------------------------------*/}


      <Animated.View style={{position: 'absolute', top: 35, zIndex: 10, transform: [{scale: scaleY_app_name}],
      flexDirection: 'row', gap: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>MoPay</Text>
        <Image source={require('./assets/logo/verify.png')} resizeMode="cover"
        style={{height: 20, width: 20, borderRadius: 50}}/>
      </Animated.View>










      {/*---------------------------------header-service---------------------------------------*/}



      <Animated.ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
      style={[styles.header_table2, {opacity: opacity, transform: [{scale: scaleY}],height: heightY}]}>



        <Animated.View style={{transform: [{scale: scaleY}], textAlign: 'center', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 5, padding: 5}}>
        <Image source={user.image ? {uri: user.image } : require('./assets/apple.png')}
        resizeMode='cover' style={styles.image}/>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
        @{user.userName}</Text>
        </Animated.View>


        
        <Animated.View style={[styles.group, {transform: [{scale: scaleY}]}]}>
        <TouchableOpacity style={styles.header_btn} onPress={() => {
          setRender('sendToMoPay'); open()}}>
          <Icon name='user' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
        marginLeft: 15}}>Send To MoPay</Text>
        </Animated.View>



        <Animated.View style={[styles.group, {transform: [{scale: scaleY}]}]}>
        <TouchableOpacity style={styles.header_btn} onPress={() => {
          setRender('deposit'); open()}}>
          <Icon name='user' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '000' : 'ivory',
        marginLeft: 15}}>Deposit</Text>
        </Animated.View>


        
        <Animated.View style={[styles.group, {transform: [{scale: scaleY}]}]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
          {setRender('markert'); open()}}>
          <Icon name='shopping-bag' size={18} color='#fff'/>
        </TouchableOpacity>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory',
        marginLeft: 15}}>Bmarkert</Text>
        </Animated.View>
        
        <Animated.View style={[styles.group, {transform: [{scale: scaleY}]}]}>
        <TouchableOpacity style={styles.header_btn} onPress={() =>
          {setRender('inviteApp'); open()}}>
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
    } style={{backgroundColor: darkMode ? '#fff' : '#2a2a2a'}} onScroll={Animated.event(
      [{nativeEvent: { contentOffset: { y: scrollY}}}], { useNativeDriver: false})}
      scrollEventThrottle={16} overScrollMode="never">
      <View style={styles.Home_container}>




    <View style={[styles.table2, {backgroundColor: darkMode ? '#fff' : 'rgba(25,25,25,0.20)'}]}>
    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y4}], opacity: op}]} onPress={() =>
    {setRender('service1'); open()}}>
    <Icon name='phone' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Airtime</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y5}], opacity: fade5}]} onPress={() =>
    {setRender('service2'); open()}}>
    <Icon name='mobile' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Buy Data</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y6}], opacity: op}]} onPress={() =>
    {setRender('service3'); open()}}>
    <Icon name='tv' size={18} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Cable TV</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y7}], opacity: fade7}]} onPress={() =>
    {setRender('service4'); open()}}>
    <Icon name='lightbulb-o' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Electricity</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y8}], opacity: fade8}]} onPress={() =>
    {setRender('service7'); open()}}>
      <Ionicons name="game-controller-outline" size={18} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Betting</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y9}], opacity: fade9}]} onPress={() =>
    {setRender('service6'); open()}}>
    <Ionicons name='sync-circle-outline' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Airtime To Cash</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y10}], opacity: fade10}]} onPress={() =>
    {setRender('service5'); open()}}>
    <Icon name='graduation-cap' size={18} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Exam</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y11}], opacity: fade11}]} onPress={() =>
    {null}}>
    <Ionicons name='print' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Rechage Card</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.table2_btn, {transform: [{translateY: y12}], opacity: fade12}]} onPress={() =>
    {null}}>
    <Ionicons name='sync-circle-outline' size={20} color='#fff' style={styles.table2_icon}/>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Convert To Cash</Text>
    <Ionicons name='chevron-forward-outline' size={24} color='gray' style={styles.forward}/>
    </TouchableOpacity>
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