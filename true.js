import { create } from "zustand";

export const userStore = create(set => ({
    homeScreen: false, renderOut: true, showRender: false,


    Logged: false, Logign: false, SignUp: true, syncForm: false,


    STRender: true, showSTRender: false,


    loading: true, isLoading: false,
    

    setHomeScreen: () => set(state => ({homeScreen: !state.homeScreen})),
    setRenderOut: () => set(state => ({renderOut: !state.renderOut})),
    setShowRender: () => set(state => ({showRender: !state.showRender})),
    setSyncForm: () => set(state => ({syncForm: !state.syncForm})),


    setLogign: () => set(state => ({Logign: !state.Logign})),
    setSignUp: () => set(state => ({SignUp: !state.SignUp})),
    LoggedIn: () => set(state => ({Logged: !state.Logged})),



    setSTRender: () => set(state => ({STRender: !state.STRender})),
    setShowSTRender: () => set(state => ({showSTRender: !state.showSTRender})),




    setLoading: () => set(state => ({loading: !state.loading})),
    setIsloading: () => set(state => ({isLoading: !state.isLoading}))
}));