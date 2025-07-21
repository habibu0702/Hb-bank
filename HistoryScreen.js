import React, { useState } from 'react'; 
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


function HistoryScreen () {
    
    const [history, setHistory] = useState('');

 return (
 <View style={styles.historyContainer}>
 <View style={styles.historyHeader}>
    <Text style={styles.text}>Recent Transaction</Text>
    </View>
 

 <ScrollView style={styles.listRecord}>
    <TouchableOpacity style={styles.recordBtn}>
    <Text style={styles.record}>{history || "no transaction yet"}</Text>
    </TouchableOpacity>
 </ScrollView>
</View>
 );
}


const styles = StyleSheet.create({
    historyContainer: {
        backgroundColor: '#dddddd', textAlign: 'center', 
       height: '100%', width: '100%',
    },

    historyHeader: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'left',
    justifyContent: 'center', padding: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20
    },   text: {fontSize: 16, fontWeight: 'bold'},

    listRecord: {height: '100%', width: '100%', flexDirection: 'column', gap: 15, padding: 20},
    recordBtn: {height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center'},

    record: {backgroundColor: '#fff', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    color: '#000', justifyContent: 'center', padding: 10, fontSize: 15, fontWeight: 'bold', borderRadius: 10
    }
})

export default HistoryScreen;