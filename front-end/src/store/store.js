import { configureStore, createSlice } from "@reduxjs/toolkit";
// Initial state for infoUserSlice
const infoUserInitialState = {
  firstName: "no firstName",
  lastName: "no lastName",
  connect: false,
};

// Initial state for userNameSlice
const userNameInitialState = {
  userName: "no UserName",
};

// Create infoUserSlice
export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: infoUserInitialState,
  reducers: {
    addInfoUser: (state, action) => {
      const { firstName, lastName, connect } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.connect = connect;
    },
    reset: (state) => {
      Object.assign(state, infoUserInitialState);
    },
  },
});

// Create userNameSlice
export const userNameSlice = createSlice({
  name: "userName",
  initialState: userNameInitialState,
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
    },
    reset: (state) => {
      state.userName = userNameInitialState.userName;
    },
  },
});
export const connectedSlice = createSlice({
  name: "userName",
  initialState: userNameInitialState,
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
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
