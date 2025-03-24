import { createSlice } from "@reduxjs/toolkit";

const initialState: { sidebarWidth: number } = {
  sidebarWidth: 213,
};
const authFormStateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSidebarWidth: (state, action) => {
      state.sidebarWidth = action.payload == 60?action.payload:action.payload + 20;
    },
  },
});

export default authFormStateSlice.reducer;
export const { setSidebarWidth } = authFormStateSlice.actions;
