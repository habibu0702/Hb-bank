import { create } from "zustand";

export const useStore = create(set => ({
    Istrue: false,
    Logged: true,
    Toggle: () => set(state => ({Istrue: !state.Istrue})),
    LoggedIn: () => set(state => ({Logged: !state.Logged})),
}));