import axios from "axios";
import User from "../types/User";

export function login(user: User) {
	return new Promise((resolve, reject) => {
		axios
			.post("https://api-nodejs-todolist.herokuapp.com/user/login", {
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log("response recieved , DATA :", res.data);
				resolve(res.data.token);
			})
			.catch((err) => {
				reject(err);
			});
	});
}

export function signup(user: User) {
	return new Promise((resolve, reject) => {
		axios
			.post("https://api-nodejs-todolist.herokuapp.com/user/register", {
				name: user.name,
				age: user.age,
				email: user.email,
				password: user.password,
			})
			.then((res) => {
				console.log("res recieved , DATA : ", res.data);
				resolve(res.data.token);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
