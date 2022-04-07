import React, { useContext } from "react";
import "./Form.css";
import "../globalState";
import { LogInState } from "../globalState";

const FormSuccess = () => {
	LogInState.update((s) => {
		s.isLoggedIn = true;
	});
	const login = LogInState.useState((s) => s.isLoggedIn);
	// const testing = LogInState.useState((s) => s.loggedInEmail);
	// const test = testing + "huh";
	console.log("Logged In:" + login);
	return (
		<div className="form-content-right">
			<h1 className="form-success">
				You are logged in !! You unlocked the profile page on the navigation
				bar!!
			</h1>
			<img className="form-img-2" src="images/smile.png" alt="smile-letter" />
		</div>
	);
};

export default FormSuccess;
