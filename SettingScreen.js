import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, ScrollView, Alert  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { UserContext } from './context';
import { useState, useEffect, useRef  } from 'react';
import { useStore } from './true';



export default function Profile() {
 const { user, uploadImage } = useContext(UserContext);
 const LoggedIn = useStore(state => state.LoggedIn);
  const [image4, setImage4] = useState('');





  const upload = async () => {
    const checkGalery = await ImagePicker.requestCameraPermissionsAsync();
    if (checkGalery.granted === false) {
      Alert.alert('Camera Not AlloW');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'images',
      quality: 1
    });

    if (!result.canceled) {
      const photoUrl = result.assets[0].uri;

      uploadImage({ image: photoUrl });
    }
  };







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


    <View style={styles.homeScreens}>
    <View style={styles.header4}>
    <Text>Rent Transaction</Text>
    </View>



    <ScrollView>
    <View style={styles.homeSettings}>
    <Image source={user.image ? { uri: user.image } : require('./assets/default-profile.png')} style={styles.image4}/>
    <Text style={{fontSize: 15, fontWeight: 'bold'}}>{user.userName}</Text>

    <TouchableOpacity style={styles.uploadImage} onPress={upload}>
      <Ionicons name='camera' size={24} color='gray' />
      <Text style={styles.lableUpload}>Set Profile Image</Text>
    </TouchableOpacity>



    <View style={styles.listSet}>
    
    <TouchableOpacity style={styles.change}>
    <Icon name='user-circle-o' size={24} color='gray' />
    <Text style={styles.lableChange}>Your Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change}>
    <Icon name='lock' size={24} color='gray' />
    <Text style={styles.lableChange}>Transaction PIN</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={handleSupport}>
    <Icon name='whatsapp' size={24} color='#25d366' style={styles.waIcon}/>
    <Text style={styles.lableChange}>Customer Support</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change}>
    <Icon name='question-circle' size={24} color='gray' />
    <Text style={styles.lableChange}>Abaute</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.change} onPress={LoggedIn}>
    <Icon name='sign-out' size={24} color='gray' />
    <Text style={styles.lableChange}>Log Out</Text>
    </TouchableOpacity>
    </View>

 </View>
 </ScrollView>
</View>
  )
}



const styles = StyleSheet.create({
  homeScreens: { backgroundColor: '#fff', height: '100%', width: '100%'},

   header4: { backgroundColor: '#e6f0fa', height: 80, width: '100%', padding: 20, textAlign: 'left',
   justifyContent: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2,
  shadowRadius: 5, elevation: 5},


  homeSettings: {flexDirection: 'column', padding: 20, textAlign: 'center', justifyContent: 'center',
  gap: 20, alignItems: 'center', paddingVertical: 10},
 
 
  image4: { height: 100, width: 100, borderRadius: 50, borderWidth: 2, borderColor: 'gray'},

  uploadImage: {backgroundColor: '#e6f0fa', height: 60, width: '100%', borderRadius: 10, gap: 10,
  padding: 10, textAlign: 'left',  flexDirection: 'row', alignItems: 'center', shadowColor: '#000',
  shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 5}, lableUpload: {fontWeight: 'bold'},



  listSet: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column', gap: 10,
  padding: 10, borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.3,
  shadowRadius: 5, elevation: 5
  },
  change: {height: 40, width: '100%', textAlign: 'left', justifyContent: 'left', flexDirection: 'row',
  gap: 15, alignItems: 'center'},
  lableChange: {fontWeight: 'bold'}
})