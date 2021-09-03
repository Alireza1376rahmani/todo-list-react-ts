import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import TaskType from "./../../types/Task";
import Task from "./Task";
import { getAllTasks } from "./../../api/task";
import { setData } from "./../../store/reducers/tasks";

function TaskList(props: any) {
	useEffect(() => {
		console.log("USE EFFECT");
		getAllTasks()
			.then((res) => {
				console.log("res from todo-list : ", res);
				props.setData(res);
			})
			.catch((err) => {
				alert(err);
			});
	}, []);

	return (
		<div className="task-list ">
			{props.isDataLoaded ? (
				<ol className="tasks">
					{props.tasks
						.slice(0)
						.reverse()
						.map((task: TaskType, index: number) => {
							return <Task {...task} key={index} />;
						})}
				</ol>
			) : (
				<Loading />
			)}
		</div>
	);
}

function mapStateToProps(state: any, myProps: any) {
	return {
		tasks: state.tasks.tasks,
		isDataLoaded: state.tasks.isLoaded,
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		setData: (data: Array<TaskType>) => {
			dispatch(setData(data));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
