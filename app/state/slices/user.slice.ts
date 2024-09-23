import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { T_USER_SLICE } from "../types";

const initialState: T_USER_SLICE = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    actionSetUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionSetUser } = userSlice.actions;

export default userSlice.reducer;
