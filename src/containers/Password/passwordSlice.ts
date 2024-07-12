import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PasswordState {
    value: string;
    password: string;
    confirmPassword: boolean | null;
}

const initialState: PasswordState = {
    value: '',
    password: '0724',
    confirmPassword: null,
}

export const PasswordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        add: (state: PasswordState, action: PayloadAction<PasswordState>) => {
            if (state.value.length < 4 && action.payload) {
                state.value += action.payload;
            }
        },
        checkValue: (state: PasswordState) => {
            if (state.value === state.password) {
                state.confirmPassword = true;
            } else {
                state.confirmPassword = false;
            }
        }
    },
});

export type { PasswordState };
export const PasswordReducer = PasswordSlice.reducer;
export const {
    add,
    deleteSymbol,
    checkValue,
} = PasswordSlice.actions;