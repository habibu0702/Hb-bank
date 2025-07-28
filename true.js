import { create } from "zustand";

export const useStore = create(set => ({
    Istrue: false,
    Logged: false,
    Toggle: () => set(state => ({Istrue: !state.Istrue})),
    LoggedIn: () => set(state => ({Logged: !state.Logged})),
}));