import { createSlice } from "@reduxjs/toolkit";
import Task from "./../../types/Task";

const slice = createSlice({
	name: "tasks",
	initialState: {
		allTasks: [] as Array<Task>,
		tasks: [] as Array<Task>,
		isLoaded: false,
		status: "all" as string,
	},
	reducers: {
		setData: (state, action) => {
			//loads data to reducer for initialization
			state.allTasks = action.payload;
			slice.caseReducers.updateList(state, action);
			state.isLoaded = true;
		},

		addTask: (state, action) => {
			// gets a task and adds it to begining of array
			state.allTasks.push(action.payload);
			// console.log("addTask state : ", state.allTasks);
			slice.caseReducers.updateList(state, action);
		},

		setDone: (state, action) => {
			//gets an id and sets (the task with the id)'s "completed" property to true
			state.allTasks.forEach((task) => {
				if (task.id === action.payload.id) {
					task.completed = action.payload.isDone;
				}
			});
			slice.caseReducers.updateList(state, action);
		},

		updateList: (state, action) => {
			if (state.status === "active") {
				state.tasks = state.allTasks.filter(
					(task) => task.completed === false
				);
			} else if (state.status === "done") {
				state.tasks = state.allTasks.filter(
					(task) => task.completed === true
				);
			} else {
				state.tasks = state.allTasks;
			}
		},

		removeTask: (state, action) => {
			state.allTasks = state.allTasks.filter(
				(task) => task.id !== action.payload
			);
			slice.caseReducers.updateList(state, action);
		},

		changeStatus: (state, action) => {
			state.status = action.payload;
			slice.caseReducers.updateList(state, action);
		},
	},
});

export default slice.reducer;
export const { setData, addTask, setDone, removeTask, changeStatus } =
	slice.actions;
