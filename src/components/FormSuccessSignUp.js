import React, { useContext } from "react";
import "./Form.css";
import "../globalState";
import { LogInState } from "../globalState";

const FormSuccess = () => {
	console.log("sign up successful");
	return (
		<div className="form-content-right">
			<h1 className="form-success">
				You successfully signed up!! Please Proceed to Login !
			</h1>
			<img className="form-img-2" src="images/smile.png" alt="smile-letter" />
		</div>
	);
};

export default FormSuccess;
