import React, { useState } from "react";
import { login } from "./../../api/user";
import { connect } from "react-redux";
import { loggedIn } from "./../../store/reducers/app";
import Loading from "../Loading";

function LoginForm(props: any) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState([] as Array<string>);
	const [loading, setLoading] = useState(false);

	function submitHandler(e: any) {
		e.preventDefault();

		setLoading(true);
		login({ email, password })
			.then((res: any) => {
				//save token
				localStorage.setItem("token", res);
				//update state
				props.loggedIn();
				setLoading(false);
			})
			.catch((err) => {
				setErrors([...errors, err + ""]);
				setLoading(false);
			});
	}

	function swtch() {
		props.setFormSwitch(true);
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<p className="title">Login Form</p>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					placeholder="Enter Email"
				/>
				<input
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type="password"
					placeholder="Enter Password"
				/>
				{loading ? <Loading /> : <input type="submit" />}
			</form>
			{errors ? (
				errors.map((error) => <p className="error">{error}</p>)
			) : (
				<></>
			)}
			<small onClick={swtch}>Sign up</small>
		</>
	);
}

function mapDispatchToProps(dispatch: any) {
	return {
		loggedIn: () => {
			dispatch(loggedIn({}));
		},
	};
}

export default connect(null, mapDispatchToProps)(LoginForm);
