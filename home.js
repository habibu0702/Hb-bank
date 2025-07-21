import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Button, useState, Animated } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import { useRef, useEffect } from 'react';
import HomeScreen from './homeScreen';



export default function Home() {

 const [image1, setImage] = useState(null);




   

 const [active, setActive] = useState(false);
 const slide = useRef(new Animated.Value(3000)).current;


 useEffect((id) => {
    Animated.timing(slide, {
        toValue: !active ? 0 : 1,
        duration: 250,
        useNativeDriver: true
    }).start(() => {
        setActive(id);
    })
 })
    return (
  <Animated.View style={styles.HomeScreen}>
  <View style={styles.header1}>
  <Image source={image1 ? {uri: image1} : require('./asset/default-profile.png')} />
  </View>

  </Animated.View>
    )
}





const styles = StyleSheet.create({
    HomeScreen: {backgroundColor: '#e6f0fa'}
})