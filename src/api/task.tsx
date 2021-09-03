import axios from "axios";
// import Task from "../types/Task";

export function getAllTasks() {
	return new Promise((resolve, reject) => {
		// get data
		axios
			.get("/task")
			.then((res) => {
				resolve(
					// filter properties for fit data in Task type
					res.data.data.map((item: any) => {
						return {
							id: item._id,
							description: item.description,
							completed: item.completed,
							owner: item.owner,
						};
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	});
}

export function addTask(description: string) {
	return new Promise((resolve, reject) => {
		axios
			.post("/task", { description })
			.then((res) => {
				resolve({
					id: res.data.data._id,
					description: res.data.data.description,
					completed: res.data.data.completed,
					owner: res.data.data.owner,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	});
}

export function removeTask(id: string) {
	return new Promise((resolve, reject) => {
		// gets id and sends delete req with id in it
		axios
			.delete("/task/" + id)
			.then((res) => {
				resolve(res.data.success);
			})
			.catch((err) => {
				console.log(err);
			});
	});
}

export function updateTask(id: string, isDone: boolean) {
	return new Promise((resolve, reject) => {
		axios
			.put("/task/" + id, { completed: isDone })
			.then((res) => {
				resolve(res.data.success);
			})
			.catch((err) => {
				console.log(err);
			});
	});
}
