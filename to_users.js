import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';




export default function ToUsers() {


 return (
    <View style={styles.Home}>
    <View style={styles.header1}>

    </View>
    </View>
 )
}


const styles = StyleSheet.create({
 Home: {backgroundColor: '#000', position: 'absolute', left: 0, right: 0,
 bottom: 0, height: '100%', width: '100%', zIndex: 100},

 header1: {backgroundColor: '#e6f0fa', height: 80, width: '100%'}
})