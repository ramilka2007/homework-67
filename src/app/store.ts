import { configureStore } from '@reduxjs/toolkit';
import {PasswordReducer} from "../containers/Password/passwordSlice";

export const store = configureStore({
    reducer: {
        password: PasswordReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;