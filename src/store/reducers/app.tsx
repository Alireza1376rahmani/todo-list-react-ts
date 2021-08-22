import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "app",
	initialState: { isLoggedIn: !!localStorage.getItem('token') },
	reducers: {
		loggedIn: (state, action) => {
			state.isLoggedIn = true;
		},
		loggedOut: (state, action) => {
			state.isLoggedIn = false;
		},
	},
});

export default slice.reducer;
export const { loggedIn, loggedOut } = slice.actions;
