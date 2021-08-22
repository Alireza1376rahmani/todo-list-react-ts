import React, { useState } from "react";
import { signup } from "./../../api/user";
import { connect } from "react-redux";
import { loggedIn } from "./../../store/reducers/app";

function SignupForm(props: any) {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState([] as Array<string>);
    const [loading, setLoading] = useState(false)

	function submitHandler(e: any) {
		e.preventDefault();

        setLoading(true)

		//send data
		signup({ name, age, email, password })
			.then((res: any) => {
				//save token
				localStorage.setItem("token", res);
				//update state
				props.loggedIn();
                setLoading(false)
			})
			.catch((err) => {
				setErrors([...errors, err + ""]);
                setLoading(false)
			});
	}

	function swtch() {
		props.setFormSwitch(false);
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<p className="title">Signup Form</p>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					placeholder="Enter Your Name"
				/>
				<input
					value={age}
					onChange={(e) => {
						setAge(Number(e.target.value));
					}}
					type="number"
					placeholder="Enter Your Age"
				/>
				<input
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					placeholder="Enter Your Email"
				/>
				<input
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type="password"
					placeholder="Enter Your Password"
				/>
				{loading ? <div>loading ...</div> : <input type="submit" />}{" "}
			</form>
			{errors ? (
				errors.map((error) => <p className="error">{error}</p>)
			) : (
				<></>
			)}
			<small onClick={swtch}>Log in</small>
		</>
	);
}

function mapStateToProps(state: any, myProps: any) {
	return {};
}
function mapDispatchToProps(dispatch: any) {
	return {
		loggedIn: () => {
			dispatch(loggedIn({}));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
