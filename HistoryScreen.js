import { TouchableOpacity, RefreshControl, Alert, useColorScheme } from 'react-native';
import { View, Text, StyleSheet, ScrollView, Vibration, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './context';
import * as Haptics from 'expo-haptics';




 export const HistoryScreen = () => {
 const [active, setActive] = useState('1');
 const [history, setHistory] = useState('');
 const [refreshing, setRefreshing] = useState(false);
 const { darkMode } = useContext(UserContext);


 const insets = useSafeAreaInsets();


 const refresh = () => {
   setRefreshing(true);

   const time = setTimeout(() => {
      setRefreshing(false);

   }, 2000);
   return () => clearTimeout(time);
 }




 const haptic = async () => {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  if (Platform.OS === 'android') {
    Vibration.vibrate(10)
  }
 }



 const scheme = useColorScheme();




 return (
 <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000', paddingBottom: insets.bottom + 60}]}>
  <BlurView intensity={100} tint='transparent' style={{flex: 1}}>
 <View style={styles.header}>
  <View style={styles.table}>
  <TouchableOpacity style={[styles.btn, active === '1' && {backgroundColor: '#fff'}]}
  onPress={() => {setActive('1'); haptic()}}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Role1</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.btn, active === '2' && {backgroundColor: '#fff'}]}
  onPress={() => {setActive('2'); haptic()}}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Role2</Text>
  </TouchableOpacity>
  </View>
 </View>
 

 <ScrollView refreshControl={
 <RefreshControl refreshing={refreshing} tintColor='#00cc99' onRefresh={refresh}/> }
 style={[styles.container, {backgroundColor: darkMode ? '#fff' : 'transparent'}]}>
 {history ?
 <Text>1</Text>
 :
 <View style={styles.empty}>
  <Ionicons name='newspaper-outline' size={80} color='rgba(25,25,25,0.20)'/>
 <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>No Transaction Yet</Text>
 </View>}
 </ScrollView>
 </BlurView>
 </View>
 );
}


const styles = StyleSheet.create({
   App: {backgroundColor: '#fff', flex: 1},

   header: {backgroundColor: 'transparent', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
   justifyContent: 'center', padding: 5, position: 'relative'},

   table: {backgroundColor: '#ddd', height: 'auto', width: 200, textAlign: 'center', alignItems: 'center',
   justifyContent: 'center', flexDirection: 'row', borderRadius: 20, padding: 5, gap: 10,
   position: 'absolute', bottom: 5},


   btn: {backgroundColor: 'rgba(184, 180, 180, 0.2)', height: 32, width: '40%', textAlign: 'center',
   alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 5},






   container: {backgroundColor: '#fff', height: '60%', width: '100%', flexDirection: 'column', gap: 15, padding: 20,
   borderTopLeftRadius: 20, borderTopRightRadius: 20},

   empty: {height: '80%', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
   flexDirection: 'column', gap: 15, marginTop: 50}
})