import React from "react";
import { connect } from "react-redux";
// import { AiTwotoneDelete } from "react-icons/fa";
import { removeTask as removeTaskReq, updateTask } from "./../../api/task";
import { removeTask, setDone } from "./../../store/reducers/tasks";
import { setWaiting } from "./../../store/reducers/app";

function Task(props: any) {
	function deleteItem(e: any) {
		props.setWaiting(true);
		removeTaskReq(props.id)
			.then((res) => {
				if (res) {
					props.removeTask(props.id);
				}
				props.setWaiting(false);
			})
			.catch((err) => {
				console.log(err);
				props.setWaiting(false);
			});
	}

	function checkHandler(e: any) {
		props.setWaiting(true);
		updateTask(props.id, !props.completed)
			.then((res) => {
				props.setDone(props.id, !props.completed);
				props.setWaiting(false);
			})
			.catch((err) => {
				console.log(err);
				props.setWaiting(false);
			});
	}

	return (
		<li className="task">
			<div className="description">
				<input
					type="checkbox"
					id={"i" + props.id}
					name="check"
					checked={props.completed}
					onChange={checkHandler}
				/>
				<label
					className={props.completed ? "done" : ""}
					htmlFor={"i" + props.id}
				>
					{props.description}
				</label>
			</div>
			<div className="remove" onClick={deleteItem}>
				Delete
			</div>
		</li>
	);
}

function mapDispatchToProps(dispatch: any) {
	return {
		setWaiting: (data: boolean) => {
			dispatch(setWaiting(data));
		},
		removeTask: (id: string) => {
			dispatch(removeTask(id));
		},
		setDone: (id: string, isDone: boolean) => {
			dispatch(setDone({ id, isDone }));
		},
	};
}

export default connect(null, mapDispatchToProps)(Task);
