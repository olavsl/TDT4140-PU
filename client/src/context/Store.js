import {create} from 'zustand';

// This is a global state manager for the app, to more easily pass state between components when necessary. 
// Currently, only the loggedIn boolean is used.
export const useStore = create(set => ({
    loggedIn: false,
    setLoggedIn: (loggedIn) => set({loggedIn}),
    
    username: '',
    setUsername: (username) => set({username}),

    password: '',
    setPassword: (password) => set({password}),

    
}));