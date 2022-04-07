import axios from "axios";
import React, { useState, useEffect } from "react";
import { useBetween } from "use-between";
import { LogInState } from "../globalState";

const useFormLogin = (callback, validate) => {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);

		try {
			const url = "http://localhost:5000/login";
			const { data: res } = await axios.post(url, values);
			LogInState.update((s) => {
				s.loggedInEmail = values.email;
				s.loggedInPw = values.email;
				s.loggedInName = values.name;
			});

			localStorage.setItem("token", res.data);
			alert("You are logged in!!");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setErrors(error.response.data.message);
				LogInState.update((s) => {
					s.loginFailed = true;
				});

				alert("Invalid Email or Password! Please try again.");
			} else
				LogInState.update((s) => {
					s.isLoggedIn = true;
				});
		}
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useFormLogin;
