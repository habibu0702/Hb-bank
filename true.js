import { create } from "zustand";

export const userStore = create(set => ({
    deposit_container: false,
    profile_container: false,
    password_container: false,
    show_push_page: false,
    show_website: false,
    Istrue: false,
    Logged: false,
    tabBottom: true,
    show_container_deposit: () => set(state => ({deposit_container: !state.deposit_container})),
    show_notification_page: () => set(state => ({show_push_page: !state.show_push_page})),
    show_password_container: () => set(state => ({password_container: !state.password_container})),
    show_profile_container: () => set(state => ({profile_container: !state.profile_container})),
    show_website_container: () => set(state => ({show_website: !state.show_website})),
    ToggleTab: () => set(state => ({tabBottom: !state.tabBottom})),
    Toggle: () => set(state => ({Istrue: !state.Istrue})),
    LoggedIn: () => set(state => ({Logged: !state.Logged})),
}));