import React, { useState } from "react";
import "../../App.css";
import FormSignUp from "../FormSignUp";
import FormSuccess from "../FormSuccessSignUp";
import "./../Form.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

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
						src="images/doctor.png"
						alt="doctor-female"
					/>
				</div>
				{!isSubmitted ? (
					<FormSignUp submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
			</div>
		</>
	);
};

export default SignUp;
