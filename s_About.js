import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { userStore } from "./true";
import { useContext } from "react";
import { UserContext } from "./context";



export const About_page = () => {
  const setShowSTRender = userStore(state => state.setShowSTRender);



    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={() =>
      {setShowSTRender()}}>
      <Ionicons name="arrow-back-outline" size={30} color='#000'/>
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>About Zpay</Text>
      </View>

      <ScrollView style={{flexDirection: 'column', gap: 20, padding: 20}}>
        <Image source={require('./assets/my-logo.png')} style={styles.logo}/>

        <Text>Company Name BS</Text>
      </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {backgroundColor: '#fff', flex: 1, borderRadius: 10},
    header: {backgroundColor: '#e6f0fa', height: 80, width: '100%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', borderRadius: 10},
    back: {height: 40, width: 40, position: 'absolute', left: 20,
    textAlign: 'center', justifyContent: 'center', alignItems: 'center'},

    logo: {height: 60, width: 60, borderRadius: 50}
  })