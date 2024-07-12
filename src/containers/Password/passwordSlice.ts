import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
  password: string;
  confirmPassword: boolean | null;
}

const initialState: PasswordState = {
  value: '',
  password: '0724',
  confirmPassword: null,
};

export const PasswordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addSymbol: (state: PasswordState, action: PayloadAction<PasswordState>) => {
      if (state.value.length < 4 && action.payload) {
        state.value += action.payload;
      }
    },
    deleteSymbol: (state: PasswordState) => {
      state.value = state.value.slice(0, -1);
    },
    checkValue: (state: PasswordState) => {
      if (state.value === state.password) {
        state.confirmPassword = true;
      } else {
        state.confirmPassword = false;
      }
    },
    reset: (state: PasswordState) => {
      state.value = '';
      state.confirmPassword = null;
    }
  },
});

export type { PasswordState };
export const PasswordReducer = PasswordSlice.reducer;
export const { addSymbol, deleteSymbol, checkValue, reset } = PasswordSlice.actions;
