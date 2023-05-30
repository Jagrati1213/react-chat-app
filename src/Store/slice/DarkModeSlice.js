import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: true
}

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        SetSwitch: (state, action) => {
            const isCheck = action.payload;
            state.mode = isCheck;
        }
    }
})

export const { SetSwitch } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
