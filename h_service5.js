import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity, Platform, Image, Animated } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import { exam_plan } from './t_exam_plans';
import moment from 'moment';


export const Service5 = () => {
 const setShowRender = userStore(state => state.setShowRender);
 const { darkMode } = useContext(UserContext);
 const [active, setActive] = useState('');
 const [visible, setVisible] = useState(false);
 const [show, setShow] = useState(false);

 const [exam, setExam] = useState('');
 const [quantity, setQuantity] = useState('');

 const time = Date.now();


 


 const [error1, setError1] = useState('');
 const [error2, setError2] = useState('');


 const open = () => {
    if (!exam) {
        return setError1('please select exam name');
    }
    if (!quantity || quantity.trim() === '') {
        return setError2('please enter qauntity');
    }
    setActive('1'); setShow(true); setError1(''); setError2('');
    Keyboard.dismiss();
    return;
 }




 const screen = Dimensions.get('window').width;
 const slide = useRef(new Animated.Value(screen)).current;
 useEffect(() => {
    if (show) {
        setVisible(true);
        Animated.timing(slide, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false
        }).start();
    } else {
        Animated.timing(slide, {
            toValue: screen,
            duration: 250,
            useNativeDriver: false
        }).start(() => {
            setVisible(false);
        })
    }
 }, [show]);


 return (
    <View style={[styles.App, {backgroundColor: darkMode ? '#ddd' : '#000'}]}>
    <View style={styles.header1}>
    <TouchableOpacity style={styles.back} onPress={() =>
    {setShowRender(false)}}>
    <Ionicons name='chevron-back-outline' size={30} color='gray'/>
    </TouchableOpacity>
    <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Exam</Text>
    </View>




    {/*-------------------------------------home-------------------------------*/}
    <View style={[styles.home]}>
        <View style={[styles.form, {backgroundColor: darkMode ? '#fff' : '#2a2a2a'}]}>
            <View style={{flexDirection: 'row', textAlign: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
            {exam_plan.map((key) => (
            <TouchableOpacity key={key.logo} onPress={() => {setExam(key); Keyboard.dismiss()}} style={styles.select_btn}>
            <Image source={key.logo} resizeMode='cover' style={styles.logo}/>
            {exam === key && (<View style={styles.selected}><Text>✅</Text></View>)}
            </TouchableOpacity>
            ))}
            </View>
            {error1 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error1}</Text>)}


            <TextInput value={quantity} placeholder='quantity' onChangeText={setQuantity}
            inputMode={Platform.OS === 'android' ? 'numeric' : 'numeric'} textContentType='number'
            style={[styles.input, {color: darkMode ? '#000' : 'ivory'}]} maxLength={1} placeholderTextColor="gray"/>
            {error2 && (<Text style={{fontSize: 10, fontWeight: 'bold', color: 'red'}}>{error2}</Text>)}

            <TouchableOpacity style={styles.submit_btn} onPress={() => {open()}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>






    {/*--------------------------over-lay--------------------------------*/}
    {visible && (
        <View style={{backgroundColor: 'rgba(25,25,25,0.80)', height: '100%', width: '100%', position: 'absolute',
        left: 0, right: 0, bottom: 0, top: 0, textAlign: 'center', flexDirection: 'column',
        justifyContent: 'flex-end', zIndex: 10}}>
        
        <TouchableWithoutFeedback onPress={() => setShow(false)}>
            <View style={{height: '60%', width: '100%'}}></View>
        </TouchableWithoutFeedback>
        




        {/*----------------------------------active-1---------------------*/}
        {active === '1' && (
            <Animated.View style={{backgroundColor: darkMode ? '#fff' : '#2a2a2a', height: 'auto', width: '100%',
            borderTopLeftRadius: 20, borderTopRightRadius: 20, textAlign: 'center', alignItems: 'center', padding: 10,
            flexDirection: 'column', gap: 10, transform: [{translateY: slide}]}}>
            
            <Image source={exam.logo} resizeMode="cover" style={{height: 40, width: 40, borderRadius: 50,
            borderWidth: 1, borderColor: 'gray'}}/>

            {/*------------------------------container---active-1-----------------------*/}
            <View style={{height: 'auto', width: '100%', textAlign: 'center', alignItems: 'center',
            flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>

            <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly',
            gap: 15}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Exam Name</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>qauntity</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>amount</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>Time</Text>
            </View>

            <View style={{height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'space-evenly',
            gap: 15}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{exam.id}</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{quantity}</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>&#8358;{exam.price.toLocaleString()} NGN</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>{moment(time).format('hh: mm A, MMM D')}</Text>
            </View>
            </View>

            <TouchableOpacity style={{height: 50, width: '90%', textAlign: 'center', alignItems: 'center',
            justifyContent: 'center', backgroundColor: '#00cc99', borderTopLeftRadius: 20,
            borderBottomRightRadius: 20}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Pay</Text>
            </TouchableOpacity>

            </Animated.View>
        )}

        </View>
    )}


    </View>
 )
}

const styles = StyleSheet.create({
    App: {backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: 10},
    header1: {height: 70, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'flex-end', padding: 15, position: 'relative', borderRadius: 10},

    back: {height: 30, width: 30, position: 'absolute', left: 20, bottom: 8},

    home: {flexDirection: 'column', padding: 20},

    form: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column', gap: 10,
    borderRadius: 10, padding: 10},

    select_btn: {backgroundColor: '#fff', height: 60, width: 80, textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 10, position: 'relative'},

    selected: {backgroundColor: 'rgba(25,25,25,0.80)', height: 60, width: 80, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 0, right: 0, bottom: 0,
    borderRadius: 10},

    logo: {height: 60, width: 80, borderRadius: 10},

    input: {height: 50, width: '100%', borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 10},

    submit_btn: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20, padding: 10}
})