import { View, Text, Alert, StyleSheet } from "react-native";
import { TextInput } from "react-native";



export default function SingUp() {

 






 return (
    <View style={styles.singUpHome}>
    <View style={styles.header}></View>
    <View style={{height: 'auto', width: '100%', flexDirection: 'column', padding: 20}}>

    <View style={styles.singUp}>
    <TextInput value={null} placeholder="Fist Name" onChangeText={null}
    style={styles.input1}/>
    </View>
    </View>
    </View>
 )
}



const styles = StyleSheet.create({
 singUpHome: {backgroundColor: '#fff', height: '100%', width: '100%'},
 header: {backgroundColor: 'royalblue', height: 90, width: '100%'},

 singUp: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', padding: 10, borderRadius: 20},
 input1: {height: 60, width: '100%', padding: 10, borderWidth: 2, borderColor: 'gray'}
})