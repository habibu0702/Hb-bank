import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from './context';





export const Laguage = () => {
    const { darkMode, language } = useContext(UserContext);
    const { getLanguage } = useContext(UserContext);


    const navigator = useNavigation();
    const back = (value) => {
      navigator.goBack();
      getLanguage(value);
    }




  return (
    <View style={{height: '40%', width: '100%', padding: 20, backgroundColor: darkMode ? '#fff' : '#000',
    position: 'absolute', left: 0, right: 0, bottom: 0}}>
    <View style={styles.container}>

    <TouchableOpacity style={styles.button} onPress={() => back('en')}>
      <Text style={{fontSize: 13, fontWeight: 'bold'}}>English</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => back('ha')}>
      <Text style={{fontSize: 13, fontWeight: 'bold'}}>Hausa</Text>
    </TouchableOpacity>
    </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'ivory', textAlign: 'center', alignItems: 'center', padding: 20,
  flexDirection: 'column', borderRadius: 10, height: 'auto', width: '100%', gap: 10},

  button: {height: 40, width: '100%', textAlign: 'center', justifyContent: 'center', padding: 10,
  borderRadius: 10, marginBottom: 10, backgroundColor: '#0000'}
})