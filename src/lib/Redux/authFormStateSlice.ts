import { createSlice } from "@reduxjs/toolkit";

const initialState: { formState: string } = {
  formState: "login",
};
const authFormStateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
  },
});

export default authFormStateSlice.reducer;
export const { setFormState } = authFormStateSlice.actions;
