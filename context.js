
import { createContext, useState, useEffect, useRef } from "react";
import * as SecureStore from 'expo-secure-store';
import i18n from "./a_l-swap-lan";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('en');


    const [Login, setLogin] = useState(false);
    const [Lock, setLock] = useState(false);
    const [visible1, setVisible1] = useState(true);


    const [IsSpin, setIsSpin] = useState(false);


    const register = async (value) => {
        await SecureStore.setItemAsync('profile', JSON.stringify(value));
    }


    const getLanguage = async (value) => {
        i18n.locale = value;
        await SecureStore.setItemAsync('AppLang', value);
        setLanguage(value);
    }



    useEffect(() => {
        const u = {
            fullName: "habibu sulaiman",
                userName: "habibu",
                phoneNumber: "07060673947",
                image: null,
                balance: 1567
        }
        if (u) {
            setUser(u);
        }
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
        <UserContext.Provider value={{ user, setUser, updateImage, Lock, setLock, visible1, setVisible1,
        darkMode, ToggleDark, IsSpin, setIsSpin, getLanguage, register, Login, setLogin, language}}>
            {children}
        </UserContext.Provider>
    )
}