import React, { useState, useEffect } from "react";
import useFormSignUp from "./useFormSignUp";
import validateSignUp from "./validateInfoSignUp";
import "./Form.css";
import Axios from "axios";

const FormSignUp = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useFormSignUp(
		submitForm,
		validateSignUp
	);

	//
	const [width, setWidth] = useState(window.innerWidth);

	// method to update the width size
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	// create a eventListener to update the width every time the user resize the window
	useEffect(() => {
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);

		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return (
		<div className="form-content-right">
			<form onSubmit={handleSubmit} className="form" noValidate>
				<h1>
					Get started with us today! Create your account by filling out the
					information below.
				</h1>
				<div className="form-inputs">
					<label className="form-label">Full Name</label>
					<input
						className="form-input"
						type="text"
						name="fullname"
						placeholder="Enter your Full Name"
						value={values.fullname}
						onChange={handleChange}
					/>
					{errors.fullname && <p>{errors.fullname}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Email</label>
					<input
						className="form-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Password</label>
					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className="form-inputs">
					<label className="form-label">Confirm Password</label>
					<input
						className="form-input"
						type="password"
						name="password2"
						placeholder="Confirm your password"
						value={values.password2}
						onChange={handleChange}
					/>
					{errors.password2 && <p>{errors.password2}</p>}
				</div>
				<button className="form-input-btn" type="submit">
					Sign up
				</button>

				<span className="form-input-login">
					Already have an account? Login <a href="/login">here</a>
				</span>
			</form>
		</div>
	);
};

export default FormSignUp;
