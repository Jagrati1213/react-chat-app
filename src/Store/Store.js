import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './slice/DarkModeSlice';
import AddUserSlice from './slice/AddUserSlice';

const store = configureStore({
    reducer: {
        darkMode: DarkModeSlice,
        users: AddUserSlice,
    }
});

export default store;