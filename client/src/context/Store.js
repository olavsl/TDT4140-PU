import {create} from 'zustand';

// define the store
const Store = create(set => ({
  loggedIn: false,
  updateLogIn: (loggedIn) => set(()=>({loggedIn: !loggedIn})),
})
);

export default Store;