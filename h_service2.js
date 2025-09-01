import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { ScrollView, Keyboard, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { Network } from './t_network';
import { Plans } from './t_dataPlans';


export const Service2 = () => {
    const setShowRender = userStore(state => state.setShowRender);
    const [network_id, setNetwork_id] = useState('');
    const [type, setType] = useState('');
    const [plan, setPlan] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [phone, setPhone] = useState('');
    const [visible, setVisible] = useState(false);
    const [vis, setVis] = useState(false);


    const fee = 50;
    

    
    const num = 11;
    useEffect(() => {
      if (phone.length === num) {
         setPhone_number(phone)
      } else {
         setPhone_number('');
         setPlan('');
         setError3('');
      }
    }, [phone]);


    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');





    const check_number = (value) => {
      setPhone(value);
      if (!/^(?:\+234|0)[789][01]\d{8}$/.test(value)) {
         return setError2('Please Enter A valid phone Number');
      }
      setError2('');
      Keyboard.dismiss();
      return;
    }


    const check_other = () => {
      if (!network_id || network_id.trim() === '') {
         return setError1('Please select network Id');
      } else if (!phone_number || phone_number.trim() === '') {
        setError2('Please Enter your phone number'); setError3('');
        return;
      } else if (!type || type.trim() === '' && phone_number) {
         return setError3('Please select plan type')
      } else if (!plan) {
         return setError4('Please select a Data Plan');
      }
      setError1(''); setError2(''); setError3(''); setError4('');
      return;
    }



    useEffect(() => {
      if (network_id) {
         return setError1('');
      }
      if (phone) {
        return  setError2('');
      }
      if (type) {
        return setError3('');
      }
      if (plan) {
        return setError4('');
      }
      return;
    }, [network_id, phone, type, plan]);











    const screnWidth = Dimensions.get('window').width;
    const slide = useRef(new Animated.Value(screnWidth)).current;

    const open = () => {
      setVis(true);
    }
    const close = () => {
      setVis(false);
    }

    useEffect(() => {
      if (vis) {
         setVisible(true);
         Animated.timing(slide, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
         }).start();
      } else {
         Animated.timing(slide, {
            toValue: screnWidth,
            duration: 300,
            useNativeDriver: true
         }).start(() => {
            setVisible(false);
         })
      }
    }, [vis]);

 return (
    <View style={styles.Home}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender()}}>
    <Ionicons name='arrow-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>Buy Data</Text>
    </View>

    <View style={styles.home_container}>
    <View style={styles.form1}>
    <View style={styles.image_container}>
    {Network.map((item) => (
    <TouchableOpacity key={item.id} style={[styles.network_btn]}
    onPress={() => {setNetwork_id(item.id); setPlan(null); Keyboard.dismiss()}}>
    <Image source={item.logo} resizeMode='cover' style={styles.image}/>
    {network_id === item.id && (<View style={styles.selected}><Text>✅</Text></View>)}
    </TouchableOpacity>))}
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

    <TextInput value={phone} placeholder='Mobile Number' onChangeText={check_number} returnKeyType='done'
    keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'}
    textContentType={Platform.OS === 'android' ? 'telephoneNumber' : 'telephoneNumber'} style={styles.input}/>
    {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

    {network_id && phone_number && (<View style={styles.type_table}>
    {Object.keys(Plans[network_id]).map((plan_type) => (
    <TouchableOpacity key={plan_type} style={[styles.type_btn, type === plan_type && styles.type_selected]}
    onPress={() => {setType(plan_type); setVis(true); Keyboard.dismiss()}}>
    <Text style={styles.type_text}>{plan_type}</Text>
    </TouchableOpacity>
    ))}
    </View>)}
    {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}

    {plan && (<View style={styles.plan_table}>
    <Text>{plan.name}</Text>
    <Text>{plan.size}</Text>
    <Text>{plan.price + fee}</Text>
    <Text>{plan.validity}</Text>
    </View>)}
    {error4 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error4}</Text>)}

    <TouchableOpacity style={styles.submit} onPress={() => {Keyboard.dismiss(); check_other()}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Buy</Text>
    </TouchableOpacity>
    </View>
    </View>

    {visible && (
    <View style={styles.overLay}>
    <Animated.View style={[styles.plan_container, {transform: [{translateY: slide}]}]}>
    <View style={styles.thead1}>
    <Text style={{fontSize: 20, fontWeight: 'bold', height: 20, color: '#00cc99'}}>Plans</Text>
    </View>
    <ScrollView style={{flexDirection: 'column', padding: 20}}>
    {Plans[network_id][type].map((data) => (
    <TouchableOpacity key={data.id} style={[styles.plans, plan === data && styles.selected_plan]}
    onPress={() => {setPlan(data); setVis(false)}}>
    <Text>{data.name}</Text>
    <Text>{data.size}</Text>
    <Text>{data.price + fee}</Text>
    <Text>{data.validity}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>
    </View>
    )}

    </View>
 )
}

const styles = StyleSheet.create({
    Home: {backgroundColor: '#fff', height: '100%', width: '100%', position: 'relative'},
    header1: {backgroundColor: '#e6f0fa', height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    home_container: {flexDirection: 'column', padding: 20, gap: 10, position: 'relative'},
    form1: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', borderRadius: 10,
    padding: 10, gap: 15},

    image_container: {flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between'},

    network_btn: {backgroundColor: '#fff', height: 60, width: 60, borderRadius: 10, textAlign: 'center',

    alignItems: 'center', justifyContent: 'center', position: 'relative'},

    image: {height: 60, width: 60, borderRadius: 10},

    selected: {backgroundColor: 'rgba(25,25,25,0.80)', height: 60, width: 60, position: 'absolute',
    left: 0, right: 0, bottom: 0, top: 0, zIndex: 10, borderRadius: 10, textAlign: 'center',
    justifyContent: 'center', alignItems: 'center'},



    input: {height: 50, width: '100%', padding: 10, borderColor: 'gray', borderWidth: 2, borderRadius: 10,
    fontSize: 15, fontWeight: 'bold'},

    type_table: {height: 40, width: '100%', flexDirection: 'row', textAlign: 'left', alignItems: 'center',
    justifyContent: 'flex-start', gap: 10, marginBottom: 10},
    type_btn: {backgroundColor: '#fff', height: 40, width: 70, borderRadius: 5, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5},
    type_selected: {backgroundColor: '#00cc99'},



    overLay: {backgroundColor: 'rgba(25,25,25,0.80)', position: 'absolute', left: 0, right: 0, bottom: 0,
    top: 0, height: '100%', width: '100%', justifyContent: 'flex-end'},

    plan_container: {backgroundColor: '#fff', height: '60%', width:'100%',
    flexDirection: 'column', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10},

    thead1: {height: 30, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 5, borderRadius: 20, borderBottomColor: '#00cc99', borderBottomWidth: 1},

    plans: {backgroundColor: '#e6f0fa', height: 60, textAlign: 'center', alignItems: 'center',
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, padding: 10, borderRadius: 10},
    selected_plan: {backgroundColor: '#00cc99', color: '#fff'},

    plan_table: {backgroundColor: '#fff', height: 40, width: '100%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10,
    borderRadius: 10},

    submit: {backgroundColor: '#00cc99', height: 60, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 10, padding: 10}
})