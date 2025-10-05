import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated, Platform } from 'react-native';
import { StatusBar, TextInput, Keyboard, Alert, Vibration } from 'react-native';
import { TouchableWithoutFeedback, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRef, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { userStore } from './true';
import { useContext } from 'react';
import { UserContext } from './context';
import * as Haptics from 'expo-haptics';




export const AppSupport = () => {
    const setShowSTRender = userStore(state => state.setShowSTRender);
    const { darkMode } = useContext(UserContext);
    const [active, setActive] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    const [message4, setMessage4] = useState('');
    const [error1, setError1] = useState('');
    const [visible, setVisible] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);





    const num = "2348112150091";
    const num2 = "2347060673947";
    const send = async () => {
        if (active === '1') {
        if (!message1 || message1.trim() === '') {
            return setError1('Please type your issu');
        }
        setIsOpen(false);

        const url = `whatsap://send?phone?${num}?text=${encodeURIComponent(message1)}`;
        try {
            const supp = await Linking.canOpenURL(url);
            if (supp) {
                await Linking.openURL(url);
            } else {
                await Linking.openURL(`https://wa.me/${num}?text=${encodeURIComponent(message1)}`);
            }
            setTimeout(() => {
                setMessage1('');
            }, 100);
        } catch (err) {
            Alert.alert(err);
        }
    } else if (active === '2') {
        if (!message2 || message2.trim() === '') {
            return setError1('Please type your issu');
        }
        setIsOpen(false);

        const url = `whatsapp://send?phone=${num2}?text=${encodeURIComponent(message2)}`;
        try {
            const supp = await Linking.canOpenURL(url);
            if (supp) {
                await Linking.openURL(url);
            } else {
                await Linking.openURL(`https://wa.me/${num2}?text=${encodeURIComponent(message2)}`);
            }
            setTimeout(() => {
                setMessage2('');
            }, 100);
        } catch (err) {
            return setError1('Error Opening whatsapp', err);
        }
    } else if (active === '3') {
        if (!message3 || message3.trim() === '') {
            return setError1('error');
        }
        const email = "habibusulaiman6778@gmail.com";
        const subject = "MoPay Commpany";
        const body = message3;
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(url);
        setIsOpen(false);
        setTimeout(() => {
                setMessage3('');
            }, 100);
    } else if (active === '4') {
         if (!message4 || message4.trim() === '') {
            return setError1('error');
        }
        const email = "habibudankasuwa2@gmail.com";
        const subject = "MoPay CommPany";
        const body = message4;
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(url);
        setIsOpen(false);
        setTimeout(() => {
                setMessage4('');
            }, 100);
    } else {
        return null;
    }
    }






    const screen = Dimensions.get('window').width;
    const getY = useRef(new Animated.Value(screen)).current;
    const scale = useRef(new Animated.Value(1)).current;


    useEffect(() => {
        if (IsOpen) {
            setVisible(true);
            haptic();
            Animated.timing(getY, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(getY, {
                toValue: screen,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                setVisible(false);
                haptic();
            })
        }
    }, [IsOpen]);








    useEffect(() => {
        if (IsOpen) {
            setVisible(true);
            haptic();
            Animated.timing(scale, {
                toValue: 0.92,
                duration: 200,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(scale, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                setVisible(false);
                haptic();
            })
        }
    }, [IsOpen]);







    const haptic = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        if (Platform.OS === 'android') {
            Vibration.vibrate(10);
        }
    }





    return (
        <Animated.View style={{backgroundColor: darkMode ? '#fff' : '#000', height: '100%', width: '100%',
            position: 'relative', transform: [{scale: scale}]}}>
            <LinearGradient style={styles.header} colors={['royalblue', '#000']}>

                <Animated.View style={[styles.headphones]}>
                    <Icon name='headphones' size={24} color='#fff'/>
                </Animated.View>

                <Text style={{fontSize: 12, fontWeight: 'bold', color: darkMode ? '#fff' : '#000'}}>
                choose customer Support below</Text>
            </LinearGradient>

            <View style={styles.home}>
                <TouchableOpacity style={styles.context} onPress={() => {setIsOpen(true); setActive('1')}}>
                    <Icon name='whatsapp' size={20} color='#fff' style={styles.w_icon}/>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Language English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.context} onPress={() => {setIsOpen(true); setActive('2')}}>
                    <Icon name='whatsapp' size={20} color='#fff' style={styles.w_icon}/>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Language Hausa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.context} onPress={() => {setIsOpen(true); setActive('3')}}>
                    <Ionicons name='mail-outline' size={20} color='red' style={styles.m_icon}/>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Language English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.context} onPress={() => {setIsOpen(true); setActive('4')}}>
                    <Ionicons name='mail-outline' size={20} color='red' style={styles.m_icon}/>
                    <Text style={{fontSize: 10, fontWeight: 'bold'}}>Language Hausa</Text>
                </TouchableOpacity>
            </View>

            {visible && (
                    <View style={styles.overLay}>
                        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
                            <View style={{height: '50%', width: '100%'}}></View>
                        </TouchableWithoutFeedback>


                        {active === '1' && (<Animated.View style={[styles.home_overlay, {transform: [{translateY: getY}]}]}>

                        {active === '1' && (
                            <View style={styles.thead}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: darkMode ? '#000' : 'ivory'}}>
                            Type your issu</Text>
                            </View>)}

                        <View style={styles.form}>

                            <TextInput value={message1} multiline numberOfLines={5} textAlignVertical='top'
                            placeholder='Type your issu here /max 200' onChangeText={setMessage1} style={styles.input}
                            maxLength={200} textContentType='fullStreetAddress' keyboardType='name-phone-pad'/>

                            <TouchableOpacity style={styles.send} onPress={() =>
                                {Keyboard.dismiss(); send()}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Send Via Whatsapp</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>)}




                    {active === '2' && (<Animated.View style={[styles.home_overlay, {transform: [{translateY: getY}]}]}>

                        {active === '2' && (
                            <View style={styles.thead}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rubuta matsalarka Anan</Text>
                            </View>)}

                        <View style={styles.form}>

                            <TextInput value={message2} multiline numberOfLines={5} textAlignVertical='top'
                            placeholder='rubuta damuwarka anan...' onChangeText={setMessage2} style={styles.input}
                            maxLength={200} textContentType='fullStreetAddress' keyboardType='name-phone-pad'/>

                            <TouchableOpacity style={styles.send} onPress={() =>
                                {Keyboard.dismiss(); send()}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Aika yanzu Ta Whatsapp</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>)}




                    {active === '3' && (<Animated.View style={[styles.home_overlay, {transform: [{translateY: getY}]}]}>

                        {active === '3' && (
                            <View style={styles.thead}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Type your issu</Text>
                            </View>)}

                        <View style={styles.form}>

                            <TextInput value={message3} multiline numberOfLines={5} textAlignVertical='top'
                            placeholder='Type your issu here /max 200' onChangeText={setMessage3} style={styles.input}
                            maxLength={200} textContentType='fullStreetAddress' keyboardType='name-phone-pad'/>

                            <TouchableOpacity style={styles.send} onPress={() =>
                                {Keyboard.dismiss(); send()}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Send Via Email</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>)}



                    {active === '4' && (<Animated.View style={[styles.home_overlay, {transform: [{translateY:getY}]}]}>

                        {active === '4' && (
                            <View style={styles.thead}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rubuta matsalarka anan</Text>
                            </View>)}

                        <View style={styles.form}>

                            <TextInput value={message4} multiline numberOfLines={5} textAlignVertical='top'
                            placeholder='Rubuta Tanbayarka Anan...' onChangeText={setMessage4} style={styles.input}
                            maxLength={200} textContentType='fullStreetAddress' keyboardType='name-phone-pad'/>

                            <TouchableOpacity style={styles.send} onPress={() =>
                                {Keyboard.dismiss(); send()}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Aika yanzu Ta Email</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>)}



                </View>
            )}
            <StatusBar barStyle="light-content" background="#transparent"/>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    header: {height: 100, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    padding: 15, bposition: 'relative', gap: 10, flexDirection: 'column'},



    headphones: {backgroundColor: 'rgba(255,255,255,0.30)', height: 50, width: 50, borderRadius: 50,
    textAlign: 'center', alignItems: 'center', justifyContent: 'center', padding: 10},

    home: {height: 'auto', width: '100%', flexWrap: 'wrap', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', padding: 20, gap: 10},

    context: {backgroundColor: '#e6f0fa', height: 60, width: '45%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, padding: 10, gap: 5},

    w_icon: {backgroundColor: '#00cc99', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5},

    m_icon: {backgroundColor: '#fff', height: 30, width: 30, borderRadius: 50, textAlign: 'center',
    alignItems: 'center', justifyContent: 'center', padding: 5},



    overLay: {backgroundColor: 'rgba(25,25,25,0.60)', height: '100%', width: '100%', position: 'absolute',
    left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', flexDirection: 'column', zIndex: 10},

    home_overlay: {backgroundColor: '#fff', height: '80%', width: '100%', textAlign: 'center', alignItems: 'center',
    flexDirection: 'column', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, position: 'relative',
    borderRadius: 10},

    thead: {height: 30, width: '100%', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
    position: 'absolute', left: 0, right: 0, top: 0, padding: 5},

    form: {backgroundColor: '#e6f0fa', height: 'auto', width: '100%', flexDirection: 'column',
    gap: 15, padding: 10, borderRadius: 10, marginTop: 20},

    input: {height: 150, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10,
    fontSize: 16, fontWeight: 'bold', backgroundColor: '#ddd'},

    send: {backgroundColor: '#00cc99', height: 50, width: '100%', textAlign: 'center', alignItems: 'center',
    justifyContent: 'center', borderRadius: 10}


})