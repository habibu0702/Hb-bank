import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { TouchableOpacity, Linking, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FadeIn } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';
import { userStore } from "./true";
import { useContext } from "react";
import { UserContext } from "./context";



export const About_page = () => {





  const support = '2348112150091';
    const message = 'ina nemen qarin bayani';
    const handleSupport = async () => {
      const url = `watsapp://send?phone=${support}&text=${encodeURIComponent(message)}`;
      try {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          await Linking.openURL(`https://wa.me/${support}?text=${encodeURIComponent(message)}`);
        }
      } catch (err) {
        Alert.alert('dont have a watsapp go to download');
      }
    }
  



    return (
      <View entering={FadeIn.duration(500)} style={styles.container}>
      <LinearGradient style={[styles.header]} colors={['#000', '#00cc99']}>
      <TouchableOpacity style={styles.back} onPress={() => null}>
      <Ionicons name="chevron-back-outline" size={30} color='#fff'/>
      </TouchableOpacity>

      <Animated.View style={styles.thead1}>
        <Image source={require('./assets/my-logo.png')} style={styles.logo}/>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>About MoPay</Text>
      </Animated.View>

      </LinearGradient>

      <ScrollView style={{flexDirection: 'column', gap: 20, padding: 20}}>
         
      </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {backgroundColor: '#fff', flex: 1, borderRadius: 10},

    header: {height: 150, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', flexDirection: 'column', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 16, top: 25},

    thead1: {textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10},
    logo: {height: 60, width: 60, borderRadius: 50}
  })