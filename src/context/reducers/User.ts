import uuid from "react-uuid";

import { createSlice } from "@reduxjs/toolkit";

import { IUserResponse } from "service/user/interfaces";

import { getFormInitialValues } from "pages/Users/components/Form/utils/InitialValues";

const INIT_STATE: IUserResponse = { id: uuid(), ...getFormInitialValues() };
export const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    getUserDataFormCreate: () => {
      const user = localStorage.getItem("userCreate");

      if (user) {
        return JSON.parse(user);
      }

      return INIT_STATE;
    },
    setUserDataFormCreate: (state, action) => {
      state += action.payload;

      localStorage.setItem("userCreate", JSON.stringify(action.payload));
    },
    clearUserDataFormCreate: () => {
      localStorage.setItem("userCreate", "");
    },
  },
});

export const {
  getUserDataFormCreate,
  setUserDataFormCreate,
  clearUserDataFormCreate,
} = userSlice.actions;

export default userSlice.reducer;
