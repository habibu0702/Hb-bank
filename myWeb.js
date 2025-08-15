import { View, StyleSheet, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { userStore } from "./true";



export default function MyWebsite() {
  const show_website_container = userStore(state => state.show_website_container);



    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={() => {show_website_container()}}>
      <Icon name="arrow-left" size={30} color='#000'/>
      </TouchableOpacity>

      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {backgroundColor: '#ddd'},
    header: {backgroundColor: 'royalblue', height: 80, width: '100%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'center'},
    back: {height: 40, width: 40, position: 'absolute', left: 20,
    textAlign: 'center', justifyContent: 'center', alignItems: 'center'
    }
  })