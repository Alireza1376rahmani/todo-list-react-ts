import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import "./style.css";
import axios from "axios";
import StatusTab from "./StatusTab";

function TodoApp() {
	axios.defaults.headers.common["Authorization"] =
		localStorage.getItem("token");

	return (
		<div className="todo">
			<AddTaskForm />
			<TaskList />
			<StatusTab />
		</div>
	);
}

export default TodoApp;
