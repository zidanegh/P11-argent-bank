import { configureStore, createSlice } from "@reduxjs/toolkit";

const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: [
    {
      firstName: "no firstName",
      lastName: "no lastName",
      userName: "no userName",
    },
  ],
  reducers: {
    addInfoUser: (state, action) => {
      const newInfoUser = {
        firstName: action.payload,
        lastName: action.payload,
        userName: action.payload,
      };
      state.push(newInfoUser);
    },
  },
});

const tokenSlice = createSlice({
  name: "Token",
  initialState: [{ token: "" }],
  reducers: {
    addToken: (state, action) => {
      const newToken = {
        token: action.payload,
      };
      state.push(newToken);
    },
  },
});

export const store = configureStore({
  reducer: {
    infoUser: infoUserSlice.reducer,
    token: tokenSlice.reducer,
  },
});
