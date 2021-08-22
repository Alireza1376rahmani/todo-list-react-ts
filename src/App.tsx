import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserChecker from "./components/login/UserChecker";
import TodoApp from "./components/todo";

function App() {
	return (
		<div className="App">
			<Header />
			<UserChecker>
				<TodoApp />
			</UserChecker>
		</div>
	);
}

export default App;
