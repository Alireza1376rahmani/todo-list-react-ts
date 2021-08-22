import React from "react";
import { connect } from "react-redux";
import {loggedOut} from "./../store/reducers/app"

function Header(props:any) {
	function clickHandler() {
		localStorage.removeItem("token");
        props.loggedOut()
	}

	return (
		<div>
			<button onClick={clickHandler}>Log Out</button>
		</div>
	);
}

// function mapStateToProps(state: any, myProps: any) {}
function mapDispatchToProps(dispatch: any) {
	return {
		loggedOut: () => {
			dispatch(loggedOut({}));
		},
	};
}

export default connect(null,mapDispatchToProps)(Header);
