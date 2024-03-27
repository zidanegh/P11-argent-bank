import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = configureStore({});

const username = createSlice({
  name: username,
  initialState: [{ signIN: false, userName: "" }],
});
