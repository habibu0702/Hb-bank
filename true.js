import { create } from "zustand";

export const userStore = create(set => ({
    homeScreen: true, renderOut: true, showRender: false,


    Logged: false, Logign: false, SignUp: true, syncForm: true,


    STRender: true, showSTRender: false,


    IsSecurity: false,
    

    setHomeScreen: (value) => set({homeScreen: value}),

    setRenderOut: (value) => set({renderOut: value}),
    setShowRender: (value) => set({showRender: value}),
    setSyncForm: (value) => set({syncForm: value}),


    setLogign: (value) => set({Logign: value}),
    setSignUp: (value) => set({SignUp: value}),
    LoggedIn: (value) => set({Logged: value}),



    setSTRender: () => set(state => ({STRender: !state.STRender})),
    setShowSTRender: () => set(state => ({showSTRender: !state.showSTRender})),


    setIsOpenSecurity: (value) => set({IsSecurity: value}),
}));