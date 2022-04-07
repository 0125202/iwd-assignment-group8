import { useState, useEffect } from "react";
import validate from "./validateInfoSignUp";
import Axios from "axios";

const useFormSignUp = (callback, validate) => {
	const [values, setValues] = useState({
		fullname: "",
		email: "",
		password: "",
		password2: "",
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

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
			Axios.post("http://localhost:5000/createUser", {
				fullname: values.fullname,
				email: values.email,
				password: values.password,
				password2: values.password2,
			}).then((response) => {
				alert("Sign Up Successful! Please Proceed to Login.");
			});
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useFormSignUp;
