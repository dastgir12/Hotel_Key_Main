import { createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../../services/authHeader";
const initialState = {
	user: null,
	auth: {},
};
export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		savelogin: (state, { payload }) => {
			state.user = payload;
			state.auth = { ...apiKey, token: payload.token };
		},
		logout: (state, { payload }) => {
			state.user = null;
			state.auth = null;
		},
	},
});

export const { savelogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
