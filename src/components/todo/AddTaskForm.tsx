import React, { useState } from "react";

function AddTaskForm() {
	const [text, setText] = useState("");

	function submitHandler() {}

	return (
		<form onSubmit={submitHandler}>
			<input
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				placeholder="Your New Task"
				type="text"
				required
			/>
			<input type="submit" value="ADD" />
		</form>
	);
}

export default AddTaskForm;
