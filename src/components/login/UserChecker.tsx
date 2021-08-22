import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./style.css";
import { connect } from "react-redux";

function UserChecker(props: any) {
	const [formSwitch, setFormSwitch] = useState(false);

	const formsProps: any = {
		setFormSwitch: setFormSwitch,
	};

	return props.isLoggedIn ? (
		props.children
	) : (
		<>
			<div className="page">
				<div className="card">
					{formSwitch ? (
						<SignupForm {...formsProps} />
					) : (
						<LoginForm {...formsProps} />
					)}
				</div>
			</div>
		</>
	);
}

function mapStateToProps(state: any, myProps: any) {
	return {
		isLoggedIn: state.app.isLoggedIn,
	};
}

export default connect(mapStateToProps, null)(UserChecker);
