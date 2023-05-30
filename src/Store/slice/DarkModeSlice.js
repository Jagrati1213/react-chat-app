import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: false
}

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        SetSwitch: (state, action) => {
            const isCheck = action;
            state.mode = isCheck;
        }
    }
})

export const { SetSwitch } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
