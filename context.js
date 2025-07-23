import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userName: 'habibu',
        balance: 100000,
    });



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
        <UserContext.Provider value={{ user, setUser, deposit, withdraw, uploadImage }}>
            {children}
        </UserContext.Provider>
    )
}