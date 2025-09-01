import React, { useState } from 'react'; 
import { TouchableOpacity, RefreshControl, Alert } from 'react-native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';




 export const HistoryScreen = () => {
    
 const [history, setHistory] = useState('');
 const [refreshing, setRefreshing] = useState(false);


 const refresh = () => {
   setRefreshing(true);

   const time = setTimeout(() => {
      setRefreshing(false);
      Alert.alert('Refresh');
   }, 2000);
   return () => clearTimeout(time);
 }

 return (
 <View style={styles.App}>
 <View style={styles.header}>
 <Text style={{fontSize: 15, fontWeight: 'bold'}}>Transaction</Text>
 </View>
 

 <ScrollView refreshControl={
   <RefreshControl refreshing={refreshing} onRefresh={refresh}/> } style={styles.container}>
 <TouchableOpacity style={styles.recordBtn}>
 <Text style={styles.record}>{history || "no transaction yet"}</Text>
 </TouchableOpacity>
 </ScrollView>
 </View>
 );
}


const styles = StyleSheet.create({
   App: {backgroundColor: '#fff', flex: 1},

   header: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'left', justifyContent: 'flex-end',
   padding: 15},

   container: {height: '100%', width: '100%', flexDirection: 'column', gap: 15, padding: 20},
   recordBtn: {height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center'},

   record: {backgroundColor: '#e6f0fa', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
   color: '#000', justifyContent: 'center', padding: 10, fontSize: 15, fontWeight: 'bold', borderRadius: 10}
})