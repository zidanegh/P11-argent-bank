import { configureStore, createSlice } from "@reduxjs/toolkit";

export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: [
    {
      firstName: "no firstName",
      lastName: "no lastName",
    },
  ],
  reducers: {
    addInfoUser: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      const newInfoUser = {
        firstName,
        lastName,
      };
      state.push(newInfoUser);
    },
  },
});

export const userNameSlice = createSlice({
  name: "userName",
  initialState: [{ userName: "no userName" }],
  reducers: {
    addUserName: (state, action) => {
      const newUserName = {
        userName: action.payload,
      };
      state.push(newUserName);
    },
  },
});

export const store = configureStore({
  reducer: {
    infoUser: infoUserSlice.reducer,
    userName: userNameSlice.reducer,
  },
});
