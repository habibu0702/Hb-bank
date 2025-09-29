
import { createContext, useState, useEffect, useRef } from "react";
import * as SecureStore from 'expo-secure-store';
import i18n from "./a_l-swap-lan";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('en')

    const [render, setRender] = useState('');





    const [Logign, setLogign] = useState(false);
    const [SignUp, setSignUp] = useState(false);
    const [syncForm, setSyncForm] = useState(true);
    const [Lock, setLock] = useState(false);
    const [visible1, setVisible1] = useState(true);





    const [render3, setRender3] = useState('');


    const [IsPrivacy1, setIsPrivacy1] = useState(false);
    const [IsPrivacy2, setIsPrivacy2] = useState(false);
    const [IsRender, setIsRender] = useState('');


    const [IsSpin, setIsSpin] = useState(false);


    const register = async (value) => {
        const getUser = {
            ...uuu, data: value
        }
        await SecureStore.setItemAsync('profile', JSON.stringify(getUser));
    }


    const getLanguage = async (value) => {
        i18n.locale = value;
        await SecureStore.setItemAsync('AppLang', value);
    }



    useEffect(() => {
    const geData = async () => {
        const raw = await SecureStore.getItemAsync('profile');
        if (raw) {
            const data = JSON.parse(raw);
            const users = {
                history: data.history || '',
                fullName: data.full_name || 'Guest',
                userName: data.userName || '',
                phoneNumber: data.phone || null,
                password: data.password || null,
                image: data.image || '',
                balance: data.balance?.toString() || 0
            }
            setUser(users);
        }
    }
    geData();
}, []);





    
    useEffect(() => {
        const setting = async () => {
            const dark = await SecureStore.getItemAsync('darkMode');
            const lang = await SecureStore.getItemAsync('AppLang');
            if (dark) {
                setDarkMode(dark === 'true');
            }
            if (lang) {
                i18n.locale = lang;
                setLanguage(lang);
            }
        }
        setting();
    }, []);


    const ToggleDark = async (value) => {
        setDarkMode(value);
        await SecureStore.setItemAsync('darkMode', value ? "true" : "false");
    }





    const updateImage = async (value1, value) => {
        const raw = await SecureStore.getItemAsync('profile');
        const profile = raw ? JSON.parse(raw) : {};
        profile[value1] = value;
        await SecureStore.setItemAsync('profile', JSON.stringify(profile));
        setUser(prev => ({...prev, image: value}));
    }



    return (
        <UserContext.Provider value={{ user, setUser, updateImage, render, 
         setRender,  Logign, setLogign, SignUp, setSignUp, Lock, setLock, syncForm, setSyncForm,
         render3, setRender3, visible1, setVisible1, IsPrivacy1, setIsPrivacy1, IsPrivacy2, setIsPrivacy2,
         IsRender, setIsRender, darkMode, ToggleDark, IsSpin, setIsSpin, register, getLanguage}}>
            {children}
        </UserContext.Provider>
    )
}