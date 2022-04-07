// Third party library can make this easier :) maybe chg if want but now we do manually here
export default function validateInfoLogin(values) {
	let errors = {};

	//email
	if (!values.email) {
		errors.email = "Email required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs to be 8 characters or more";
	}

	return errors;
}
