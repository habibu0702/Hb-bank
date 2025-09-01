import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userName: 'habibu',
        balance: 17006000,
    });

    const [render, setRender] = useState('');





    const [Logign, setLogign] = useState(false);
    const [SignUp, setSignUp] = useState(false);
    const [syncForm, setSyncForm] = useState(false);
    const [Lock, setLock] = useState(true);





    const [render3, setRender3] = useState('');



    


     const ToggleRegister = () => setIstrue(prev => !prev);

     

    const deposit = (amount) => {
        if (amount > 0) {
            setUser(prev => ({ ...prev, balance: prev.balance + amount}));
        }
    };


    const withdraw = (amount) => {
        if (amount > 0 && user.balance >= amount) {
            setUser(prev => ({ ...prev, balance: prev.balance - amount}));
            return true;
        }
        return false;
    };

    const uploadImage = (image) => {
        if (image) {
            setUser(prev => ({ ...prev, ...image}))
        } else {
            return null;
        }
    }



    return (
        <UserContext.Provider value={{ user, setUser, deposit, withdraw, uploadImage, ToggleRegister, render, 
         setRender,  Logign, setLogign, SignUp, setSignUp, Lock, setLock, syncForm, setSyncForm,
         render3, setRender3}}>
            {children}
        </UserContext.Provider>
    )
}