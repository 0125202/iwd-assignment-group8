import React, { createContext, useContext, useReducer, useState } from "react";
import "../../App.css";
import FormLogin from "../FormLogin";
import FormSuccess from "../FormSuccessLogin";
import "./../Form.css";
import { Link } from "react-router-dom";
import { LogInState } from "../../globalState";

const Login = () => {
	// const [{ logged }, dispatch] = useReducer(reducer, intialLogged);
	const [isSubmitted, setIsSubmitted, isLoggedIn, setIsLoggedIn] =
		useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	const loginFailed = LogInState.useState((s) => s.loginFailed);

	return (
		<>
			<div className="form-container">
				{/* <span className="close-btn">×</span> */}
				<Link to="/Home" className="close-btn">
					<i className="fas fa-times"></i>
				</Link>

				{/* <Link
					to="/Home"
					className="nav-links-mobile"
					onClick={closeMobileMenu}
				></Link> */}

				<div className="form-content-left">
					<img
						className="form-img"
						src="images/doctor1.png"
						alt="doctor-male"
					/>
				</div>

				{!isSubmitted ? <FormLogin submitForm={submitForm} /> : <FormSuccess />}
			</div>
		</>
	);
	// }
	// }
};

export default Login;
