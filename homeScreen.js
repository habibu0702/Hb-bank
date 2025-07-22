import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Animated, Button, Image, Alert,
 StyleSheet, TextInput, Modal, FlatList } from 'react-native';
import axios from 'axios';
import { Text } from 'react-native';
import { Plans } from './dataPlans';
import { Network } from './network';
import { useContext } from 'react';
import { UserContext } from './context';
import { cablePlan } from './plantv';

 
const { height, width } = Dimensions.get('window');

export default function HomeScreen () {
const [image1, setImage1] = useState(null)
const { user, deposit, withdraw } = useContext(UserContext);
const [showBalance, setShowBalance] = useState(true);
const [pin, setPin] = useState(0);


























const [network1, setNework1] = useState(null);
const [phone1, setPhone1] = useState('');
const [amount1, setAmount1] = useState('');
const [logo1, setLogo1] = useState(null);


const [views1, setView1] = useState(false);










const [exam, setExam] = useState('');





























 const [network2, setNetwork2] = useState(null);
 const [phone2, setPhone2] = useState('');
 const [type2, setType2] = useState(null);
 const [plan2, setPlan2] = useState(null);
 const [logo2, setLogo2] = useState(null);

 const [error2, setError2] = useState('');
 const [spin, setSpin] = useState(false);








 
const AllPlans = network2 && type2 ? Plans[network2][type2] : [];






{/*......*/}










 const [typetv, setTypetv] = useState(null);
 const [smart, setSmart] = useState(null);
 const [other3, setOther3] = useState(null);

 const [show3, setShow3] = useState(false);
 const [lableOther3, setLableOther3] = useState(false);
















const screnWidth  = Dimensions.get('window').width;
const Home = useRef(new Animated.Value(-screnWidth)).current;
const slide1 = useRef(new Animated.Value(screnWidth)).current;
const anims = useRef( new Animated.Value(screnWidth)).current;
const slide = useRef(new Animated.Value(screnWidth)).current;
const slide3 = useRef(new Animated.Value(screnWidth)).current;
const slide4 = useRef(new Animated.Value(screnWidth)).current;
const slide5 = useRef( new Animated.Value(screnWidth)).current;
const slide6 = useRef(new Animated.Value(screnWidth)).current;















const [views, setView] = useState(false)















const [activeHome, setActiveHome] = useState(true)
const [active1, setActive1] = useState(false)
const [active2, setActive2] = useState(false)
const [active3, setActive3] = useState(false)
const [active4, setActive4] = useState(false)
const [active5, setActive5] = useState(false)
const [active6, setActive6] = useState(false)
const [activePlans, setActivePlans] = useState(false)





const closeHome = () => {
  Animated.timing(Home, {
    toValue: -screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActiveHome(true);
  })
}




const openHome = () => {
  Animated.timing(Home, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActiveHome(true);
  });
};

useEffect(() => {
  openHome();
}, [activeHome]);




const open1 = () => {
  setActive1(true)
  Animated.timing(slide1, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}


const close1 = () => {
  Animated.timing(slide1, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive1(false);
  })
}




const open2 = () => {
  setActive2(true);
  Animated.timing(anims, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

const close2 = () => {
  Animated.timing(anims, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive2(false);
  });
}








const open3 = () => {
  setActive3(true);
  Animated.timing(slide3, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

const close3 = () => {
  Animated.timing(slide3, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive3(false);
  });
}













const open4 = () => {
  setActive4(true);
  Animated.timing(slide4, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

const close4 = () => {
  Animated.timing(slide4, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive4(false);
  });
}












const open5 = () => {
  setActive5(true);
  Animated.timing(slide5, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

const close5 = () => {
  Animated.timing(slide5, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive5(false);
  });
}













const open6 = () => {
  setActive6(true);
  Animated.timing(slide6, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}

const close6 = () => {
  Animated.timing(slide6, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActive6(false);
  });
}








const handlePlan = () => {
  setActivePlans(true);
  Animated.timing(slide, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true
  }).start();
}


const closePlan = () => {
  Animated.timing(slide, {
    toValue: screnWidth,
    duration: 250,
    useNativeDriver: true
  }).start(() => {
    setActivePlans(false);
  });
}









































































 const verifyShow3 = () => {
  if (typetv) {
    setShow3(true);
  } else {
    setShow3(null);
  }
 }






const verify1 = (value) => {
  setPhone1(value);
  if (!/^[0-9]{11}$/.test(value)) {
    setError2('Please Enter a valid phone number');
    setAmount1(false)
    return false;
  } else {
    setError2('');
  }
}

const verify1m = (value) => {
  const clean = value.replace(/^0+/, '');
  setAmount1(clean);
  if (value && views1) {
    setAmount1(false);
    setView1(false);
    setError2('Invalid Amount');
    return;
  } else {
    setError2('');
  }
}






const verify2 = (value) => {
  setPhone2(value);
  if (!/^[0-9]{11}$/.test(value)) {
    setError2('Please Enter A valid Phone Number');
    return;
  } else {
    setError2('');
  }
}





 useEffect(() => {
  const timer = setTimeout(() => setError2(''), 1500);
  return () => clearTimeout(timer);
 }, [error2]);















 





 const buyAirtime = () => {
  let limit = 5000;
  if (!network1) {
    setError2('Please Select a network');
    return;
  }
  if (!phone1 || phone1.trim() === '') {
    setError2('please Enter a phone number');
    return;
  }
  if (!amount1) {
    setError2('Please enter a amount');
  }
  if (!/^[0-9]{11}$/.test(phone1)) {
    setError2('Invalid phone number');
    return;
  }
  if (parseFloat(amount1) > limit) {
    setError2('amount is a hight');
    return;
  }
  if (network1 && phone1 && amount1) {
    setView1(true);
  }
 }



 const sendAirtime = async (amount) => {
  setSpin(true);
  try {
    const response = await axios.post(example, {
      network: null,
      phone_number: null,
      amount: null
    },
  {
    headers: {
      Authorization: `berery ${null}`,
      'Content-Type': 'application/json'
    }
  });
  console.log('nasara', response.data)
  } catch (error) {
    console.error('error', error.response?.message || error.message)
  } finally {
    setSpin(false);
  }
 }






























 const buyData = () => {

  if (!network2) {
    setError2('please select a network before proceeding');
    return;
  }
 if (!phone2 || phone2.trim() === '') {
  setError2('Please Enter Your Phone Number');
  return;
 } 
 if (!type2) {
 setError2('Please select a plan type');
 return;
   }
 
   if (logo2 && network2 && phone2 && type2 && plan2) {
    setView(true);
   }
 }





 const BASE_URL = 'https://maskawasubapi.com/api/data/';
 const BASE_KEY = '81059a18011fc9659ae432d292c422d2cb4aee38';


 const sendData = async (amount2) => {
  setSpin(true);
  try {
  
  const response = await axios.post(BASE_URL, {
  network: network2,
  phone_number: phone2,
  plan_id: 277,
  ported_number: true,
  payment_medium: withdraw(amount2)
  
  }, 
  {
  headers: {
  Authorization: `Token ${BASE_KEY}`,
  'Content-Type': 'application/json'
  }
  });
  console.log('yes:', response.data);
  } catch (err) {
    setSpin(false);
  console.error('error send data:', err.response?.data || err.message);
  Alert.alert(err.message);
  } finally {
    setSpin(false);
  }
 };














  useEffect(() => {
    if (phone2 === '') {
      setPlan2(null);
    }
  }, [phone2]);




  useEffect(() => {
    if (spin === true) {
      setNetwork2(false);
      setPhone2(false);
      setType2(false);
      setPlan2(false);
    }
  }, [spin]);


  useEffect(() => {
    if (other3) {
      setLableOther3(false);
    } else {
      setLableOther3(true);
    }
  }, [other3])





  useEffect(() => {

    if (active1 === false) {
      setNework1(false);
      setPhone1(false);
      setAmount1(false);
    }

    if (active2 === false) {
      setNetwork2(false);
      setPhone2(false);
      setPlan2(false);
    }

    if (active3 === false) {
      setTypetv(false);
      setSmart(false);
      setOther3(null);
    }
  });











 return (
  <View>
   
   {activeHome && ( <Animated.View style={[styles.Home, [{transform: [{translateX: Home}]}]]}>
   <View style={styles.header1}>

   <Image source={image1 ? {uri: image1 } : require('./assets/default-profile.png')} style={styles.img1} /> 
   <Text style={styles.name}>{user.userName || "user23"}</Text>

   <TouchableOpacity style={styles.bell} onPress={''}>
   <Ionicons style={styles.notification} name='notifications' />
   </TouchableOpacity>
   </View>
        
        
        












   <ScrollView style={styles.HomeContainer}>
   <View style={styles.wallet1}>
   <Text style={styles.lableBalance}>My Balance</Text>

   <TouchableOpacity style={styles.eye} onPress={() => setShowBalance(!showBalance)}>
   <Ionicons name={showBalance ? 'eye' : 'eye-off'} size={24} color="#555" />
   </TouchableOpacity>
              
   <Text style={styles.balance}>&#8358; {showBalance ? `${user.balance.toLocaleString('de-DE', {
    maximumFractionDigits: 2, minimumFractionDigits: 2
   })}` : '........'}</Text>
   <TouchableOpacity style={styles.addMoney} onPress={null}>
   <Text style={styles.AddText}>add Fund</Text>
   </TouchableOpacity>
   </View>
                  
                  
                  
                  
                  














    <View style={styles.serviceContainer}>
    <TouchableOpacity style={styles.btn}  onPress={() => {open1(); closeHome()}}>
    <Ionicons style={styles.icons1} name='call' />
    <Text style={styles.dataText}>Airtime</Text>
    </TouchableOpacity> 
                      
    <TouchableOpacity style={styles.btn} onPress={() => {open2(); closeHome()}}>
    <Ionicons style={styles.icons1} name='cellular' />
    <Text style={styles.dataText}>buy Data?</Text>
    </TouchableOpacity>
                        
                        
   <TouchableOpacity style={styles.btn} onPress={() => {open3(); closeHome()}}>
   <Ionicons style={styles.icons1} name='tv' />
   <Text style={styles.dataText}>Cable TV</Text>
   </TouchableOpacity>
                          
   <TouchableOpacity style={styles.btn} onPress={() => {open4(); closeHome()}}>
   <Ionicons style={styles.icons1} name='school' />
   <Text style={styles.dataText}>Exam</Text>
   </TouchableOpacity>
                            
                            
   <TouchableOpacity style={styles.btn} onPress={() => {open5(); closeHome()}}>
   <Ionicons style={styles.icons1} name='bulb' />
   <Text style={styles.dataText}>Electiry</Text>
   </TouchableOpacity>
                              
   <TouchableOpacity style={styles.btn} onPress={() => {open6(); closeHome()}}>
   <Ionicons style={styles.icons1} name='print' />
   <Text style={styles.dataText}>Sync</Text>
   </TouchableOpacity></View></ScrollView>


</Animated.View> 
   )}















{/*service1*/}





















{active1 && (
  <Modal visible={active1} transparent={true}>
  <Animated.View style={[styles.service1, [{transform: [{translateX: slide1 }]}]]}>
  <View style={styles.thead1}>
  <TouchableOpacity style={styles.back} onPress={() => {close1(); openHome()}}>
  <Ionicons  name='arrow-back-outline' size={30} color='#000' />
  </TouchableOpacity>
  <Text>Buy Airtime</Text>
  </View>

  <View style={styles.homeAirtime}>
  
  <View style={styles.form1}>
  <View style={styles.synbol1Con}>
  {Network.map((n) => (
  <TouchableOpacity key={n.id} style={[styles.network1, network1 === n.id && styles.network1Selected]}
  onPress={() => {setNework1(n.id); setLogo1(n.logo)}}>
  <Image source={n.logo} style={styles.network1Synbol} />
  </TouchableOpacity>
  ))}
  </View>

  <TextInput value={phone1} placeholder='Enter your phone number' onChangeText={verify1}
  keyboardType='numeric' style={styles.input1} maxLength={11} />

  <TextInput value={amount1} placeholder='100-5000' keyboardType='numeric' onChangeText={verify1m}
  style={styles.amount1} />

  <TouchableOpacity style={styles.submut1} onPress={() => {buyAirtime()}}>
  <Text style={styles.lableSumbut1}>Next</Text>
  </TouchableOpacity>
  </View>
  </View>


 {views1 && (
  <Modal visible={views1} transparent={true}>
  <View style={styles.verify1}>
  <View style={styles.group1}>
  <Image source={logo1} style={{height: 40, width: 40, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', borderRadius: 50, left: '43%', marginBottom: 10}}/>
  <Text style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
  Aye you serius you want buy Airtime</Text>
  <View style={styles.otherText2}>
  <Text style={styles.lableOther2}>Phone number</Text>
  <Text style={styles.lableOther2}>network</Text>
  <Text style={styles.lableOther2}>amount</Text>
  </View>
  <View style={styles.out2}>
  <Text style={styles.otherPlan2}>{phone1}</Text>
  <Text style={styles.otherPlan2}>{network1}</Text>
  <Text style={styles.otherPlan2}>{amount1}</Text>
  </View>
     </View>


   <View style={styles.agre2}>
  <TouchableOpacity style={styles.agre2Btn} onPress={() => {setView1(false)}}>
  <Text style={styles.lableAgre2}>No</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.agre2Btn}
  onPress={() => {null}}>
  <Text style={styles.lableAgre2}>Yes</Text>
  </TouchableOpacity>
  </View>
  </View>
  </Modal>)}






  {error2 && (
  <View style={styles.error2}>
  <Text style={styles.lableError2}>{error2}</Text>
  </View> 
)}




{spin && ( 
  <View style={styles.spinContainer}>
  <ActivityIndicator size="large" color='#00cc99' />
  </View>
)}
    </Animated.View>
  </Modal>
)}































   
   
   
   {/*service2*/}
   
   
   
   
   

   {active2 && (<Modal visible={active2} transparent={true}>
   <Animated.View style={[styles.service2, [{transform: [{translateX: anims}]}]]}>
   <View styles={styles.lable2}>

   <View style={styles.thead2}>
   <TouchableOpacity style={styles.back} onPress={() => {close2(); openHome()}}>
   <Ionicons name='arrow-back-outline' size={30} color='#333' />
   </TouchableOpacity>
   <Text style={styles.lable2}>Buy Data</Text>
   </View>


   <View style={styles.homeData}>

   <View style={styles.form2}>
   <View style={styles.homeSynbol}>
   {Network.map((net) => (
   <TouchableOpacity key={net.id} onPress={() => {
   setNetwork2(net.id); setLogo2(net.logo); setType2(null); closePlan(); setPlan2('')}}
   style={[styles.network, network2 === net.id && styles.selected]}>
   <Image source={net.logo} style={styles.images} />
   </TouchableOpacity>))}
   </View>

   <TextInput value={phone2} onChangeText={verify2} placeholder='Enter your phone number'
   keyboardType='numeric' style={[styles.input2, phone2 ===  styles.error2]} maxLength={11} />



   {network2 && phone2 && ( 
   <View style={styles.homeType}>
   {Object.keys(Plans[network2]).map((type) => (
   <TouchableOpacity key={type} onPress={() => {setType2(type); handlePlan()}}
   style={[styles.planType, type2 === type && styles.type]}>
   <Text>{type}</Text>
   </TouchableOpacity> ))}
   </View>)}
   
   {plan2 && phone2 && (
    <View style={styles.selectedData}>
      <Text>{plan2.size} {plan2.name}</Text>
      <Text>&#8358; {plan2.price}</Text>
      <Text>expire {plan2.validity}</Text>
    </View>
   )}

   <TouchableOpacity style={styles.submut2} onPress={buyData}>
   <Text>Next</Text>
   </TouchableOpacity>
   </View>

   {activePlans && phone2 && (
    <Modal visible={activePlans} transparent={true}>
    <Animated.View  style={[styles.planContainer, [{transform: [{translateY: slide}]}]]}>
   <FlatList data={AllPlans} keyExtractor={((item) => item.id.toString())} 
   renderItem={({ item }) => (
    <TouchableOpacity style={styles.plans} onPress={() => {setPlan2(item); closePlan()}}>
      <Text>{item.size} {item.name}</Text>
      <Text>&#8358; {item.price}</Text>
      <Text>expire {item.validity}</Text>
    </TouchableOpacity>
   )} />
   </Animated.View>
   </Modal>)}
        </View>
      </View>




  {views && (
  <Modal visible={views} transparent={true}>
  <View style={styles.fistNext}>
  <View style={styles.group2}>
  <Image source={logo2} style={styles.synbol2}/>
  <Text style={{fontSize: 15, fontWeight: 'bold'}}>Confirm your data purchase below</Text>
  <View style={styles.otherText2}>
  <Text style={styles.lableOther2}>Phone_number</Text>
  <Text style={styles.lableOther2}>network</Text>
  <Text style={styles.lableOther2}>plan_Type</Text>
  <Text style={styles.lableOther2}>Data_Plan</Text>
  <Text style={styles.lableOther2}>price_amount</Text>
  </View>
  <View style={styles.out2}>
  <Text style={styles.otherPlan2}>{phone2}</Text>
  <Text style={styles.otherPlan2}>{plan2.network}</Text>
  <Text style={styles.otherPlan2}>{plan2.name}</Text>
  <Text style={styles.otherPlan2}>{plan2.size}</Text>
  <Text style={styles.otherPlan2}>{plan2.price}</Text>
     </View>
  </View>





  <View style={styles.agre2}>
  <TouchableOpacity style={styles.agre2Btn} onPress={() => {setView(false)}}>
  <Text style={styles.lableAgre2}>No</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.agre2Btn}
  onPress={() => {sendData(); setView()}}>
  <Text style={styles.lableAgre2}>Yes</Text>
  </TouchableOpacity>
  
  </View>
  </View> 
  </Modal>)}

 {error2 && (
  <View style={styles.error2}>
  <Text style={styles.lableError2}>{error2}</Text>
  </View> 
)}





{spin && ( 
  <View style={styles.spinContainer}>
  <ActivityIndicator size="large" color='#00cc99' />
  </View>
)}
    </Animated.View>
 </Modal>)}











  {/*service3*/}























































  {active3 && ( 
    <Modal visible={active3} transparent={true}>
    <Animated.View style={[styles.service3, [{transform: [{translateX: slide3}]}]]}>
    <View style={styles.thead3}>

    <TouchableOpacity style={styles.back}>
    <Ionicons name='arrow-back-outline' size={30} color='333' onPress={() => {close3(); openHome()}}/>
    </TouchableOpacity>
    </View>

    <View style={styles.homeCable}>
    <View style={styles.form3}>

    <View style={styles.smartHome}>
    {Object.keys(cablePlan).map((ky) => (
    <TouchableOpacity key={ky} style={[styles.smartBtn, typetv === ky && styles.selectNameTV]} onPress={() => {
    setTypetv(ky); setOther3(null)}}>
      <Text>{ky}</Text>
    </TouchableOpacity>
    ))}
    </View>

    <TextInput value={smart} placeholder='Smart Card number Decoder...' keyboardType='numeric'
    onChangeText={setSmart} style={styles.smart} />

    <TouchableOpacity style={styles.selectTV} onPress={verifyShow3}>
    {lableOther3 && ( <Text style={{fontWeight: 'bold', padding: 10}}>Select Cable Plan</Text>)}
    {other3 && (
    <View style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
    flexDirection: 'row', width: '100%', padding: 10}}>
    <Text>{typetv} {other3.name}</Text>
    <Text>Naira &#8358; {other3.price}</Text>
    <Text>{other3.duration}</Text>
    </View>
     )}
    </TouchableOpacity>

    <TouchableOpacity style={styles.buySmart}>
      <Text style={styles.lableSmart}>purchase</Text>
    </TouchableOpacity>

    </View>
    </View>

 
    {show3 && (
    <Modal visible={show3} transparent={true}>
    <View style={styles.typetvTable}>
    {cablePlan[typetv].map((t) => (
    <TouchableOpacity key={t.id} style={styles.typetv} onPress={() => {setOther3(t); setShow3(false)}}>
    <Text style={{fontWeight: 'bold'}}>{typetv} {t.name}</Text>
    <Text style={{fontWeight: 'bold'}}>Naira &#8358; {t.price}</Text>
    <Text style={{fontWeight: 'bold'}}>{t.duration}</Text>
    </TouchableOpacity>
    ))}
    </View>
    </Modal>)}
    </Animated.View>
    </Modal>
  )}









































  {active4 && ( 
    <Modal visible={active4} transparent={true}>
    <Animated.View style={[styles.service4, [{transform: [{translateX: slide4}]}]]}>
    <View style={styles.thead4}>

    <TouchableOpacity style={styles.back}>
    <Ionicons name='arrow-back-outline' size={30} color='333' onPress={() => {close4(); openHome()}}/>
    </TouchableOpacity>
    </View>

    <View style={styles.examHome}>
    <View style={styles.form4}>
    <TextInput value={exam} onChangeText={setExam} keyboardType='numeric' placeholder='soon'
    style={styles.input4} />

    </View>
    </View>
    </Animated.View>
    </Modal>
  )}
































{active5 && ( 
    <Modal visible={active5} transparent={true}>
    <Animated.View style={[styles.service5, [{transform: [{translateX: slide5}]}]]}>
    <View style={styles.thead5}>

    <TouchableOpacity style={styles.back}>
    <Ionicons name='arrow-back-outline' size={30} color='333' onPress={() => {close5(); openHome()}}/>
    </TouchableOpacity>
    </View>

    <View style={styles.electiryHome}>
    <View style={styles.form5}>
    <TextInput value={null} keyboardType='numeric' placeholder='soon' style={styles.input5} />
    </View>
    </View>
    </Animated.View>
    </Modal>
)}





























{active6 && ( 
    <Modal visible={active6} transparent={true}>
    <Animated.View style={[styles.service6, [{transform: [{translateX: slide6}]}]]}>
    <View style={styles.thead6}>

    <TouchableOpacity style={styles.back}>
    <Ionicons name='arrow-back-outline' size={30} color='333' onPress={() => {close6(); openHome()}}/>
    </TouchableOpacity>
    </View>

    <View style={styles.comveteHome}>
    <View style={styles.form6}>
    <TextInput value={null} onChangeText={null} keyboardType='numeric' placeholder='soon' 
    style={styles.input6} />
    </View>
    
    </View>
    </Animated.View>
    </Modal>)}




</View>
   )}





























                                      
const styles = StyleSheet.create({
 Home: {backgroundColor: '#fff', height: '100%', width: '100%', position: 'relative'},

 header1: {backgroundColor: '#E6F0FA', height: 85, width: '100%', textAlign: 'center', padding: 20, gap: 10,
 flexWrap: 'nowrap', alignItems: 'center', flexDirection: 'row', shadowColor: '#000', borderColor: '#000',
 shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5},
 
 bell: {fontSize: 20, position: 'absolute', right: 20, height: 'auto', width: 'auto', marginTop: 20},
 notification: {fontSize: 25},

 img1: {height: 50, width: 50, marginTop: 5, borderRadius: 50, borderColor: 'gray', borderStyle: 'solid',
 objectFit: 'cover', borderWidth: 2, marginTop: 20},
 name: {fontSize: 20, fontWeight: 'bold', color: '#000', marginTop: 20, zIndex: 5},

 HomeContainer: { backgroundColor: '#fff', flexDirection: 'column', padding: 20,
 textAlign: 'center', padding: 25, position: 'relative', width: '100%'
 },

 wallet1: { backgroundColor: '#E6F0FA', height: 120, width: '100%', flexDirection: 'column', elevation: 8,
 textAlign: 'left', alignitems: 'left', gap: 25, fontSize: 25, borderRadius: 10,
 fontWeight: 'bold', padding: 10, marginBottom: 20, position: 'relative', shadowColor: '#000', shadowOpacity: 0.3,
 shadowOffset: {width: 0, height: 2}, elevation: 3, shadowRadius: 5,
 }, lableBalance: {fontSize: 17, fontWeight: 'bold', color: '#111111'},  balance: { fontSize: 17, fontWeight: 'bold'},

 eye: {position: 'absolute', left: '40%', top: 10
 },

 addMoney: { backgroundColor: 'ransparent', height: 70, width: 100, textAlign: 'center', justifyContent: 'center',
 position: 'absolute', right: 0, borderTopLeftRadius: 20, borderStyle: 'solid', borderWidth: 1, elevation: 4,
 padding: 10, fontSize: 17, bottom: 0, fontWeight: 'bold', borderBottomRightRadius: 20, borderBottomColor: 'transparent',
  borderRightColor: 'transparent', flexDirection: 'row', alignItems: 'center'},
 
 AddText: {fontSize: 17, fontWeight: 'bold' },

 serviceContainer: { backgroundColor: '#E6F0FA', height: 'auto', width: '100%', borderTopLeftRadius: 20,
 borderBottomRightRadius: 25, flexDirection: 'row', textAlign: 'center', justifyContent: 'space-around',
 rowGap: 15, flexWrap: 'wrap', padding: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, elevation: 3,
shadowOpacity: 0.3, shadowRadius: 5},

 btn: { backgroundColor: '#fff', height: 100, width: 90,  justifyContent: 'space-around',
 borderTopLeftRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', fontWeight: 'bold',
 shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 1, shadowRadius: 5, elevation: 5
 },

 icons1: {backgroundColor: '#00cc99', height: 'auto', width: 'auto', fontSize: 20, color: '#fff', textAlign: 'center',
 borderRadius: 50, alignItems: 'center', flexDirection: 'row', padding: 10
 }, dataText: {fontWeight: 'bold'},






































 service1: {backgroundColor: '#dddddd', flex: 1,},
 thead1: {backgroundColor: '#fff', height: 85, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, top: 0
 },

 homeAirtime: {flexDirection: 'column', padding: 20, height: '100%'},
 form1: {backgroundColor: '#fff', height: 'auto', width: '100%', textAlign: 'left', justifyContent: 'center',
  flexDirection: 'column', shadowColor: '#000', shadowOffset: { width: 0, height: 1}, shadowOpacity: 2,
  shadowRadius: 4, elevation: 5, borderTopLeftRadius: 20, borderBottomRightRadius: 20, padding: 10, gap: 20
 },
 synbol1Con: {width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
 justifyContent: 'space-between'},

 network1Selected: {shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 5, shadowRadius: 5,
 borderRadius: 10, backgroundColor: 'black', height: 75, width: 75, textAlign: 'center', alignItems: 'center', justifyContent: 'center'},

 network1: {height: 70, width: 70, borderRadius: 20},
 network1Synbol: {height: 70, width: 70, borderRadius: 20},

 input1: {backgroundColor: '#fff', borderWidth: 2, shadowRadius: 5, elevation: 5, height: 50, width: '100%',
   fontSize: 16, borderRadius: 10, padding: 10, fontWeight: 'bold', borderColor: 'gray'},

amount1: {backgroundColor: '#fff', height: 50, width: '100%', elevation: 5, borderWidth: 2, padding: 10,
  borderRadius: 10, fontWeight: 'bold', borderColor: 'gray'},

submut1: {backgroundColor: '#1dcc97ff', height: 55, width: '100%', borderTopLeftRadius: 20, textAlign: 'center',
  borderBottomRightRadius: 20, alignItems: 'center', justifyContent: 'center'},
  lableSumbut1: {fontSize: 16, fontWeight: 'bold', color: '#fff'},


  verify1: {backgroundColor: 'rgba(25,25,25,0.80)', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 20, height: '100%', width: '100%', position: 'absolute',
 left: 0, right: 0, top: 0, zIndex: 5},

  group1: {backgroundColor: '#fff', height: 200, width: '100%', borderRadius: 20},












































 service2: {backgroundColor: '#ddd', flex: 1, position: 'relative', height: '100%'},
 thead2: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center', maxHeight: 80, top: 0,
  justifyContent: 'center', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, position: 'relative'
 },

 back: {position: 'absolute', left: 20, height: 40, width: 40, fontSize: 20, textAlign: 'center', alignItems: 'center',
  borderRadius: 20, justifyContent: 'center'
 },
  lable2: {fontSize: 16, fontWeight: 'bold'},




  homeData: { padding: 20, gap: 10, position: 'relative', height: '100%'},

  form2: {backgroundColor: '#fff', width: '100%', padding: 10, shadowColor: '#000',
    shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.5, shadowRadius: 5, elevation: 5, flexDirection: 'column',
    textAlign: 'left', justifyContent: 'center', gap: 15, borderRadius: 15
  },


  homeSynbol: { width: '100%', textAlign: 'center', alignItems: 'center', flexDirection: 'row',
    justifyContent: 'space-between'
  },

  selected: {backgroundColor: 'black', height: 75, width: 75, textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 1,
  elevation: 10, borderRadius: 10},

  network: {height: 70, width: 70, borderRadius: 20},
  images: {height: 70, width: 70, borderRadius: 20},


  input2: {backgroundColor: '#fff', height: 50, width: '100%', padding: 10, fontSize: 15, fontWeight: 'bold',
  borderWidth: 2, shadowColor: 'gray', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.2, shadowRadius: 5,
  elevation: 2, borderRadius: 10, borderColor: 'gray'},
  error2: {color: 'red', fontSize: 12, fontWeight: 'bold', padding: 5},



  homeType: {flexDirection: 'row', gap: 20, textAlign: 'left', alignItems: 'center'},
  planType: {backgroundColor: '#ddd', height: 40, width: 70, padding: 5, shadowOffset: {width: 0, height: 1}, textAlign: 'center',
  alignItems: 'center', fontWeight: 'bold', justifyContent: 'center', borderWidth: 1, borderRadius: 5},

 type: {backgroundColor: '#00cc99', color: 'white', fontWeight: 'bold'},
 submut2: {backgroundColor: '#00cc99', height: 60, width: '100%', borderTopLeftRadius: 20, borderBottomRightRadius: 20,
 textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: '#fff',
},


planContainer: {backgroundColor: '#fff', flexDirection: 'column', padding: 20, height: '60%',
  position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5, textAlign: 'center', flex: 1,
  borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 1},
  shadowOpacity: 1, shadowRadius: 10, elevation: 10
},

plans: {backgroundColor: '#ddd', height: 60, width: '100%', flexDirection: 'row', justifyContent: 'space-between',
 padding: 10, borderWidth: 1, shadowRadius: 4, elevation: 10, marginBottom: 10, alignItems: 'center', borderRadius: 10
},

selectedData: {backgroundColor: '#ddd', height: 50, width: '100%', textAlign: 'center', alignContent: 'center',
   justifyContent: 'space-between', padding: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.5, borderWidth: 1, elevation: 10, flexDirection: 'row', borderRadius: 10, fontWeight: 'bold'},











  fistNext: { backgroundColor: 'rgba(165, 152, 152, 0.60)', height: '100%', width: '100%', zIndex: 999,
 textAlign: 'center', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
 position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 20},

 group2: {backgroundColor: '#fff', height: 270, width: '100%', borderRadius: 20, padding: 10, textAlign: 'center',
 alignItems: 'center', position: 'relative', shadowColor: '#000', shadowOffset: {width: 0, height: 2}, 
 shadowOpacity: 2, shadowRadius: 6, elevation: 6},

 synbol2: {height: 40, width: 40, borderRadius: 50, marginBottom: 10},

 otherText2: {height: 'auto', width: '50%', flexDirection: 'column', gap: 15, position: 'absolute', left: 15,
 bottom: 15, padding: 10},
 lableOther2: {fontWeight: 'bold'},

 out2: {width: '50%', flexDirection: 'column', padding: 10, gap: 15, position: 'absolute', right: 15,
 bottom: 15},
 otherPlan2: {textAlign: 'right', fontWeight: 'bold'},


 agre2: {height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center',
 justifyContent: 'space-between', flexDirection: 'row', padding: 20},

 agre2Btn: {backgroundColor: '#00cc99', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
 height: 50, width: 100, borderRadius: 10},

 lableAgre2: {fontSize: 15, fontWeight: 'bold'},







 error2: {backgroundColor: 'red', height: 100, width: '90%', borderRadius: 20, textAlign: 'center',
  alignItems: 'center', position: 'absolute', top: 10, left: 20, right: 20, shadowColor: '#000',
shadowOffset: {width: 0, height: 2}, shadowOpacity: 2, shadowRadius: 8, justifyContent: 'center'},
  lableError2: {fontWeight: 'bold', color: '#fff'},






  spinContainer: {backgroundColor: 'rgba(25,25,25,0.80)', height: '100%', width: '100%', textAlign: 'center',
  alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, top: 0, right: 0, zIndex: 6},

  spin: {height: 80, width: 80, borderWidth: 4, borderColor: '#00CC99', borderRadius: 50},

































































  service3: {backgroundColor: '#ddd', flex: 1, position: 'relative'},
  thead3: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 15
  },

  homeCable: {height: '100%', width: '100%', flexDirection: 'column', padding: 20, gap: 15},

  form3: {backgroundColor: '#fff', height: 'auto', width: '100%', borderRadius: 20, flexDirection: 'column',
  textAlign: 'center', alignItems: 'center', justifyContent: 'center', padding: 10, gap: 15, shadowColor: '#000',
  shadowOffset: {width: 0, height: 2}, shadowOpacity: 2, shadowRadius: 5, elevation: 5
  },

  smartHome: {height: 80, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between',
  flexDirection: 'row', borderRadius: 10},

  smartBtn: {height: 78, width: 78, textAlign: 'center', justifyContent: 'center', backgroundColor: '#00CC99',
  textAlign: 'center', alignItems: 'center', borderRadius: 10, fontWeight: 'bold', fontSize: 15},

  selectNameTV: {backgroundColor: 'rgba(25,25,25,0.20)', height: 80, width: 80, textAlign: 'center',
  justifyContent: 'center'},

  smart: {height: 50, width: '100%', fontSize: 15, fontWeight: 'bold', padding: 10, borderWidth: 2,
  borderColor: 'gray', borderRadius: 10},

  selectTV: {height: 50, width: '100%', borderWidth:2, borderColor: 'gray', borderRadius: 10,
  textAlign: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'},

  buySmart: {backgroundColor: '#00cc99', height: 60, width: '100%', borderTopLeftRadius: 20,
  borderBottomRightRadius: 20, textAlign: 'center', justifyContent: 'center'},

  lableSmart: {fontSize: 15, fontWeight: 'bold', textAlign: 'center', alignItems: 'center', color: '#fff'},



  typetvTable: {backgroundColor: '#fff', height: '60%', width: '100%', position: 'absolute', left: 0, right: 0,
  bottom: 0, flexDirection: 'column', textAlign: 'center', padding: 20, borderTopLeftRadius: 20,
 borderTopRightRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 3,
 shadowRadius: 10, elevation: 8},

  typetv: {backgroundColor: '#ddd', height: 50, width: '100%', borderRadius: 10, textAlign: 'center',
  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10, marginBottom: 20},
















































   service4: {backgroundColor: '#ddd', flex: 1},
  thead4: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 15},

  examHome: {height: 'auto', width: '100%', flexDirection: 'column', textAlign: 'center', alignItems: 'center',
  padding: 20},

  form4: {backgroundColor: '#fff', height: 100, width: '100%', shadowColor: '#000', shadowOpacity: 21,
   shadowOffset: {width: 0, height: 2}, shadowRadius: 5, elevation: 5, borderRadius: 20, padding: 10,
  flexDirection: 'column', textAlign: 'center', alignItems: 'center'},

   input4: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 10},





























































   service5: {backgroundColor: '#ddd', flex: 1},
  thead5: {backgroundColor: '#fff', height: 80, width: '100%',  padding: 15, textAlign: 'center',
  alignItems: 'center', justifyContent: 'center'},

  electiryHome: {height: 'auto', width: '100%', flexDirection: 'column', padding: 20},

  form5: {backgroundColor: '#fff', height: 100, width: '100%', shadowColor: '#000', shadowOpacity: 2,
   shadowOffset: {width: 0, height: 2,}, shadowRadius: 5, elevation: 5, padding: 10, borderRadius: 20},

  input5: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', padding: 10, borderRadius: 10},


























   service6: {backgroundColor: '#ddd', flex: 1},
  thead6: {backgroundColor: '#fff', height: 80, width: '100%', textAlign: 'center', alignItems: 'center',
  justifyContent: 'center', padding: 15},

  comveteHome: {height: 'auto', width: '100%', flexDirection: 'column', padding: 20},

  form6: {backgroundColor: '#fff', height: 100, width: '100%', shadowColor: '#000', shadowOpacity: 2,
  shadowOffset: {width: 0, height: 2,}, shadowRadius: 5, elevation: 5, padding: 10, borderRadius: 20},

  input6: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', padding: 10, borderRadius: 10}

  

})