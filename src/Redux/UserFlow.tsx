import { createSlice } from '@reduxjs/toolkit';
type IProps = {
    login: boolean,
    forgetPassword: boolean,
    otp: boolean,
    newPassword: boolean
    popup:boolean
}
const initialState: IProps = {
    login: false,
    forgetPassword: false,
    otp: false,
    newPassword: false,
    popup:false
};

const userFlowSlice = createSlice({
    name: 'userFlow',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setOtp: (state, action) => {
            state.otp = action.payload;
        },
        setForgetPassword: (state, action) => {
            state.forgetPassword = action.payload;
        },
        setNewPassword: (state, action) => {
            state.newPassword = action.payload;
        },
        setPopUp: (state, action) => {
            state.popup = action.payload;
        },
    },

});

export const { setLogin,setForgetPassword,setNewPassword,setOtp,setPopUp} = userFlowSlice.actions;
export default userFlowSlice.reducer;
