import { configureStore, createSlice } from "@reduxjs/toolkit";
const infoUserInitialState = {
  firstName: "no firstName",
  lastName: "no lastName",
  userName: "no userName",
  connect: false,
};

const userNameInitialState = {
  userName: "no UserName",
};

export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: infoUserInitialState,
  reducers: {
    addInfoUser: (state, action) => {
      const { firstName, lastName, connect, userName } = action.payload;
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        connect: connect,
        userName: userName,
      };
    },
    addUserName: (state, action) => {
      return { ...state, userName: action.payload };
    },
    reset: (state) => {
      Object.assign(state, infoUserInitialState);
    },
  },
});

export const userNameSlice = createSlice({
  name: "userName",
  initialState: userNameInitialState,
  reducers: {
    addUserName: (state, action) => {
      return { ...state, userName: action.payload };
    },
    reset: (state) => {
      state.userName = userNameInitialState.userName;
    },
  },
});

export const store = configureStore({
  reducer: {
    infoUser: infoUserSlice.reducer,
    userName: userNameSlice.reducer,
  },
});
