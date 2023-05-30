import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: false
}

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        handleSwitch: (state, action) => {
            const isCheck = action;
            state.mode = isCheck;
        }
    }
})

export const { handleSwitch } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
