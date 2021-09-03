import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import "./style.css";

function TodoApp() {
	return (
		<div className="todo">
			<div className="adder">
				<AddTaskForm />
			</div>
			<div className="tasks">
				<TaskList />
			</div>
			<div className="status"></div>
		</div>
	);
}

export default TodoApp;
