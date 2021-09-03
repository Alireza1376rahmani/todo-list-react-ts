import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "app",
	initialState: {
		isLoggedIn: !!localStorage.getItem("token"),
		waiting: false,
	},
	reducers: {
		loggedIn: (state, action) => {
			state.isLoggedIn = true;
		},
		loggedOut: (state, action) => {
			state.isLoggedIn = false;
		},
		setWaiting: (state, action) => {
            state.waiting = action.payload
        },
	},
});

export default slice.reducer;
export const { loggedIn, loggedOut,setWaiting } = slice.actions;
