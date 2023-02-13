import {create} from 'zustand';

export const useStore = create(set => ({
    loggedIn: false,
    setLoggedIn: (loggedIn) => set({loggedIn}),
    
    username: '',
    setUsername: (username) => set({username}),

    password: '',
    setPassword: (password) => set({password}),
}));