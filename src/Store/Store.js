import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './slice/DarkModeSlice';
import AddUserSlice from './slice/AddUserSlice';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        darkMode: DarkModeSlice,
        users: AddUserSlice,
    },
    // for srializable error
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
}
);

export default store;