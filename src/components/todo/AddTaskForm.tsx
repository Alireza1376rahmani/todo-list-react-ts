import React, { useState } from "react";
import { connect } from "react-redux";
import { setWaiting } from "./../../store/reducers/app";
import { addTask as addTaskReq } from "./../../api/task";
import { addTask } from "./../../store/reducers/tasks";
import Task from "../../types/Task";

function AddTaskForm(props: any) {
	const [text, setText] = useState("");

	function submitHandler(e: any) {
		e.preventDefault();
		// set waiting to true
		props.setWaiting(true);
		// send data
		addTaskReq(text).then((res) => {
			// set data to redux
			props.addTask(res);
			// set waiting to false
			props.setWaiting(false);
		});
        setText("")
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				placeholder="Your New Task"
				type="text"
				required
			/>
			<input type="submit" value="ADD" />
		</form>
	);
}

function mapDispatchToProps(dispatch: any) {
	return {
		setWaiting: (data: boolean) => {
			dispatch(setWaiting(data));
		},
		addTask: (data: Task) => {
			dispatch(addTask(data));
		},
	};
}

export default connect(null, mapDispatchToProps)(AddTaskForm);
