import { create } from "zustand";

export const userStore = create(set => ({
    Istrue: false,
    Logged: false,
    tabBottom: true,
    ToggleTab: () => set(state => ({tabBottom: !state.tabBottom})),
    Toggle: () => set(state => ({Istrue: !state.Istrue})),
    LoggedIn: () => set(state => ({Logged: !state.Logged})),
}));