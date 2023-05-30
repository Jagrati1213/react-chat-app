import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './slice/DarkModeSlice';

const store = configureStore({
    reducer: {
        darkMode: DarkModeSlice,
    }
});

export default store;