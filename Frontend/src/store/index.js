import { createSlice, configureStore } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "movingDataBackAndForth",
  initialState: {
    featureFlags: [],
    usernameAndPassword: { username: "", password: "" },
    username: { username: "" },
  },
  reducers: {
    recievedFlagsFromServer(state, action) {
      state.featureFlags = action.payload;
    },
    sendReqToLogin(state, action) {
      state.usernameAndPassword = action.payload;
    },
    isLogedin(state, action) {
      state.username = action.payload;
    },
  },
});

const store = configureStore({
  reducer: dataSlice.reducer,
});

export const { recievedFlagsFromServer, sendReqToLogin, isLogedin } =
  dataSlice.actions;
export default store;
