import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { ScrollView, Keyboard, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useEffect, useState } from 'react';
import { AppLoading } from './s_load_spin';
import { useContext } from 'react';
import { UserContext } from './context';
import { userStore } from './true';
import { Network } from './t_network';
import { Plans } from './t_dataPlans';
import moment from 'moment';
import axios from 'axios';


export const Service2 = () => {
    const setShowRender = userStore(state => state.setShowRender);
    const { darkMode } = useContext(UserContext);
    const [active, setActive] = useState(null);
    const [network_id, setNetwork_id] = useState('');
    const [type, setType] = useState(null);
    const [plan, setPlan] = useState(null);
    const [phone_number, setPhone_number] = useState('');
    const [visible, setVisible] = useState(false);
    const [vis, setVis] = useState(false);
    const [spin, setSpin] = useState(false);


    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);


    const time = Date.now();




    const fee = 50;




    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');





    const check_number = (value) => {
      const clean = value.replace(/\s/g, '');
      setPhone_number(clean);
      if (!/^(?:\+234|0)[789][01]\d{8}$/.test(clean)) {
         return setError2('Please Enter A valid phone Number');
      }
      setError2('');
      Keyboard.dismiss();
      return;
    }


    const check_other = () => {
      if (!network_id) {
         return setError1('Please select network Id');
      } else if (!phone_number || phone_number.trim() === '') {
        setError2('Please Enter your phone number'); setError3('');
        return;
      } else if (!type) {
         return setError3('Please select plan type')
      } else if (!plan) {
         return setError4('Please select a Data Plan');
      }
      setError1(''); setError2(''); setError3(''); setError4('');

      setVis(true); setActive('3');
      return;
    }






    const send = async () => {
    setSpin(true); setVis(false);

    try {
      const response = await axios.post('https://www.maskawasub.com/api/data', {
         "network_id": network_id.network,
         "phone_number": phone_number,
         "data_type": type,
         "data_plan": plan.size
      },
   {
      timeout: 10000,
      headers: {
         "Authorization": "bear 3uejjdnddwsdsssws",
         "Content-Type": "application/json"
      }
   })

   console.log(response.data);
   return;
    } catch (err) {
      if (err.response) {
      setErr('bad request Please check your input', err.response.status, err.response.data);
      } else if (err.request) {
         setErr('qaryane');
      } else {
         setErr('1234');
      }
         setActive('4'); setVis(true);
         return;
    } finally {
      setSpin(false);
    }
    }

















    useEffect(() => {
      if (network_id) {
         return setError1('');
      }
      return;
    }, [network_id]);

    useEffect(() => {
      if (type) {
         return setError3('');
      }
      return;
    }, [type]);

    useEffect(() => {
      if (plan) {
         return setError4('');
      }
      return;
    }, [plan]);










    const open1 = () => {
      if (network_id) {
         setActive('1'); setVis(true);
      } else {
         setError1('Please select a network')
      }
    }
    const open2 = () => {
      if (type) {
         setActive('2'); setVis(true);
      } else {
         setError3('please select a Data Type');
      }
    }











    const screnWidth = Dimensions.get('window').width;
    const slide = useRef(new Animated.Value(screnWidth)).current;


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
    <View style={[styles.Home, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender(false)}}>
    <Ionicons name='chevron-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>Buy Data</Text>
    </View>

    <View style={[styles.home_container]}>
    <Animated.View style={[styles.form1, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    <View style={styles.image_container}>
    {Network.map((item) => (
    <TouchableOpacity key={item.id} style={[styles.network_btn]}
    onPress={() => {setNetwork_id(item); setType(null); Keyboard.dismiss()}}>
    <Image source={item.logo} resizeMode='cover' style={styles.image}/>
    {network_id === item && (<View style={styles.selected}><Text>✅</Text></View>)}
    </TouchableOpacity>))}
    </View>
    {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}

    <TextInput value={phone_number} placeholder='Mobile Number' onChangeText={check_number} returnKeyType='done'
    inputMode={Platform.OS === 'android' ? 'number-pad' : 'numeric'} placeholderTextColor='gray'
    textContentType={Platform.OS === 'android' ? 'telephoneNumber' : 'telephoneNumber'}
    style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]}/>
    {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

   


    <TouchableOpacity style={{height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 10,
    padding: 10}} onPress={() => {open1(); setPlan(null)}}>
    <View style={{height: 50, width: '95%', textAlign: 'left', justifyContent: 'center'}}>
    {type ?
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{type}</Text>
    :
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Select data Type</Text>
    }
    </View>
    <Ionicons name={visible && active === '1' ? "caret-up-outline" : "caret-down-outline"} size={15} color='gray'/>
    </TouchableOpacity>
    {error3 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error3}</Text>)}







    <TouchableOpacity style={{height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderColor: 'gray', borderRadius: 10,
    padding: 10, gap: 5}} onPress={() => {open2()}}>
    <View style={{height: 50, width: '90%', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row'}}>
    {plan ?
    <View style={{height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row'}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.size}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{plan.price} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.validity}</Text>
    </View>
    :
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Select Plan Type</Text>}
    </View>
    <Ionicons name={visible && active === '2' ? "caret-up-outline" : "caret-down-outline"} size={15} color='gray'/>
    </TouchableOpacity>
    {error4 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error4}</Text>)}




    <TouchableOpacity style={styles.submit} onPress={() => {Keyboard.dismiss(); check_other()}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Nex</Text>
    </TouchableOpacity>
    </Animated.View>
    </View>







    {/*----------------------------------over-lay----------------------------*/}

    {visible && (
    <View style={styles.overLay}>
    <TouchableWithoutFeedback onPress={() => setVis(false)}>
      <View style={{height: '50%', width: '100%'}}></View>
    </TouchableWithoutFeedback>



    


    {active === '1' && (
      <Animated.View style={{height: '40%', width: '100%', flexDirection: 'column', borderTopLeftRadius: 20,
      borderTopRightRadius: 20, backgroundColor: darkMode ? '#fff' : '#000', transform: [{translateY: slide}]}}>

      {/*---------------------------------thead----------------------------------*/}
      <View style={{height:'auto', width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
      padding: 10, borderRadius: 10}}>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>Data Type</Text>
      </View>

      {/*-------------------------------type-list---------------------------*/}
      <ScrollView style={{padding: 10, flexDirection: 'column', gap: 10}}>
      {Object.keys(Plans[network_id.id]).map((keys) => (

      <View style={{textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
      height: 50, padding: 10, gap: 6}} key={keys}>
       <Ionicons name='gift-outline' size={24} color='#fff' style={{backgroundColor: 'rgba(25,25,25,0.30)',
         height: 30, width: 30, borderRadius: 50, textAlign: 'center', alignItems: 'center',
         justifyContent: 'space-around', padding: 3}}/>

       <TouchableOpacity style={{height: 40, width: '90%', textAlign: 'left', justifyContent: 'center',
         borderRadius: 10, padding: 10, marginBottom: 5}}
         key={keys} onPress={() => {setType(keys); setVis(false)}}>
         <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{keys}</Text>
       </TouchableOpacity>
       </View>
      ))}
      </ScrollView>
      </Animated.View>
    )}
   







    {/*-------------------------------data-select--------------------*/}

    {active === '2' && (<Animated.View style={[styles.plan_container, {transform: [{translateY: slide}],
    backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
    <View style={styles.thead1}>
    <Text style={{fontSize: 15, fontWeight: 'bold', height: 20, color: 'gray'}}>Select Plans</Text>
    </View>
    <ScrollView style={{flexDirection: 'column', padding: 10}}>
    {Plans[network_id.id][type].map((data) => (
   
    <TouchableOpacity key={data.id} style={[styles.plans, plan === data && styles.selected_plan]}
    onPress={() => {setPlan(data); setVis(false)}}>

    <Ionicons name="gift-outline" size={20} color='#fff' style={{backgroundColor: 'rgba(25,25,25,0.30)',
    textAlign: 'center', alignItems: 'center', justifyContent: 'space-around', padding: 5, height: 30,
    width: 30, borderRadius: 50}}/>
    
    <View style={{height: 40, width: '90%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between', padding: 10}}>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{data.name}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{data.size}</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{data.price + fee.toLocaleString()} NGN</Text>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{data.validity}</Text>
    </View>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </Animated.View>)}




    


    {/*--------------------------------------list--other-------------------*/}
    {active === '3' && (
      <Animated.View style={{height: 'auto', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20,
      flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 10, position: 'relative',
      transform: [{translateY: slide}], backgroundColor: darkMode ? '#fff' : '#2a2a2a'}}>

      <Image source={network_id.logo}  resizeMode="cover" style={{height: 50, width: 50, borderRadius: 50,
      marginBottom: 5}}/>

      <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
       justifyContent: 'space-between', padding: 20, marginBottom: 20}}>

      <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-between', gap: 15}}>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Network</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Phone Number</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Data Type</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Data Plan</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>amount</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Validity</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Time</Text>
      </View>
      
      <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: 15}}>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{network_id.id}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{phone_number}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.name}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.size}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{plan.price.toLocaleString()} NGN</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{plan.validity}</Text>
      <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{moment(time).format('hh:mm A, MMM D')}</Text>
      </View>
      </View>

      
      {/*--------------------------------bottom-------------------------------*/}
      <TouchableOpacity style={{height: 50, width: '90%', textAlign: 'center', alignItems: 'center',
      justifyContent: 'center', backgroundColor: '#00cc99', borderTopLeftRadius: 20,
      borderBottomRightRadius: 20}} onPress={() => {send()}}>
         <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Buy</Text>
      </TouchableOpacity>
      </Animated.View>
    )}










    {active === '4' && (
    <Animated.View style={{backgroundColor: darkMode ? '#ddd' : '#000', height: '100%', width: '100%',
    position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 100, transform: [{translateX: slide}]}}>
    <View style={{height: 100, width: '100%', textAlign: 'center', justifyContent: 'center', position: 'relative'}}>
      <TouchableOpacity style={{position: 'absolute', right: 20}} onPress={() => setVis(false)}>
         <Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>Done</Text>
      </TouchableOpacity>
    </View>

    {/*----------------------------home-err----------------------*/}
    {err && (
      <View style={{height: '60%', width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'column',
      gap: 15, justifyContent: 'center'}}>
         <Ionicons name="warning-outline" size={40} color='red'/>

         <View style={{backgroundColor: darkMode ? 'rgba(25,25,25,0.20)' : '#2a2a2a', textAlign: 'center',
         alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', borderRadius: 10,
         height: 'auto', width: 100, padding: 10}}>
         <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red', textAlign: 'center', alignItems: 'center',
         justifyContent: 'center', flexDirection: 'column'}}>{err}</Text>
         </View>

         <TouchableOpacity style={{backgroundColor: darkMode ? 'rgba(25, 25, 25, 0.20)' : '#2a2a2a',
         height: 40, width: 100, textAlign: 'center', alignItems: 'center', justifyContent: 'center',
         borderRadius: 10}} onPress={() => {send()}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>On Refresh</Text>
         </TouchableOpacity>
      </View>
    )}

    </Animated.View>)}


    </View>
    )}


    {spin && (<View style={{height: '100%', width: '100%', position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 10}}>
    <AppLoading/>
    </View>)}

    <SafeAreaView edges={['bottom']} style={{backgroundColor: '#ddd'}}/>
    </View>
 )
}




const styles = StyleSheet.create({
    Home: {backgroundColor: '#ddd', height: '100%', width: '100%', position: 'relative'},
    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', position: 'relative', borderRadius: 10, padding: 15},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},






    home_container: {flexDirection: 'column', padding: 20, gap: 10, position: 'relative'},
    form1: {backgroundColor: '#fff', height: 'auto', width: '100%', borderRadius: 10,
    padding: 10, gap: 15},

    image_container: {flexDirection: 'row', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between'},

    network_btn: {backgroundColor: 'transparent', height: 60, width: 60, borderRadius: 10, textAlign: 'center',

    alignItems: 'center', justifyContent: 'center', position: 'relative'},

    image: {height: 60, width: 60, borderRadius: 10},

    selected: {backgroundColor: 'rgba(25,25,25,0.80)', height: 60, width: 60, position: 'absolute',
    left: 0, right: 0, bottom: 0, top: 0, zIndex: 10, borderRadius: 10, textAlign: 'center',
    justifyContent: 'center', alignItems: 'center'},



    input: {height: 50, width: '100%', padding: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10,
    fontSize: 15, fontWeight: 'bold'},

    type_table: {height: 40, width: '100%', flexDirection: 'row', textAlign: 'left', alignItems: 'center',
    justifyContent: 'flex-start', gap: 10, marginBottom: 10},
    type_btn: {backgroundColor: '#fff', height: 40, width: 70, borderRadius: 5, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5},
    type_selected: {backgroundColor: '#00cc99'},





    overLay: {backgroundColor: 'rgba(25,25,25,0.90)', position: 'absolute', left: 0, right: 0, bottom: 0,
    top: 0, height: '100%', width: '100%', justifyContent: 'flex-end'},

    plan_container: {backgroundColor: '#fff', height: '40%', width:'100%',
    flexDirection: 'column', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 10},

    thead1: {height: 30, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 5, borderRadius: 20, borderBottomColor: 'gray', borderBottomWidth: 1},

    plans: {height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, borderRadius: 10, gap: 10, padding: 10},

    selected_plan: {backgroundColor: '#00cc99', color: '#fff', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row'},

    plan_table: {backgroundColor: '#fff', height: 40, width: '100%', textAlign: 'center',
    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10,
    borderRadius: 10},

    submit: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20, padding: 10}
})