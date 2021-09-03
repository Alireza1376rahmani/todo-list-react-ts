import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserChecker from "./components/login/UserChecker";
import TodoApp from "./components/todo";
import axios from "axios";
import WaitingOverlay from "./components/WaitingOverlay";
import {connect} from "react-redux"

function App(props:any) {
	axios.defaults.baseURL = "https://api-nodejs-todolist.herokuapp.com";

	return (
		<div className="App">
			<Header />
			<UserChecker>
				<TodoApp />
			</UserChecker>
            {props.isWaiting ?  <WaitingOverlay/> : <></>}
		</div>
	);
}

function mapStateToProps(state:any,myProps:any){
    return{
        isWaiting: state.app.waiting
    }
}


export default connect(mapStateToProps,null)( App);
