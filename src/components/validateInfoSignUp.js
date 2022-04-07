// Third party library can make this easier :) maybe chg if want but now we do manually here
export default function validateInfoSignUp(values) {
	let errors = {};

	if (!values.fullname.trim()) {
		errors.fullname = "Full Name required";
	} else if (values.fullname.length < 2) {
		errors.username = "Full Name needs to be 2 characters or more";
	}

	if (!values.email) {
		errors.email = "Email required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	if (!values.password2) {
		errors.password2 = "Password is required";
	} else if (values.password2 !== values.password) {
		errors.password2 = "Password do not match";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs to be 8 characters or more";
	}

	return errors;
}
