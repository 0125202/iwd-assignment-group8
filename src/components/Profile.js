import axios from "axios";
import React, { useState, useEffect } from "react";
import { LogInState } from "../globalState";
import "./Profile.css";
import useFormProfile from "./useFormProfile";
import validateProfile from "./validateInfoSignUp";
// import "./Form.css";
import AppContext from "./AppContext";
import validateSignUp from "./validateInfoSignUp";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	let navigate = useNavigate();
	function submitForm() {
		setIsSubmitted(true);
		try {
			axios.post("http://localhost:5000/update-user", {
				fullname: values.fullname,
				email: values.email,
				password: values.password,
				password2: values.password2,
			});
			LogInState.update((s) => {
				s.loggedInEmail = values.email;
				s.loggedInPw = values.password;
				s.loggedInName = values.name;
				s.isLoggedIn = true;
			});
			alert("Your details is successfully updated!");
		} catch (err) {
			console.error(err);
			alert("Your details failed to update");
		}
	}
	const { handleChange, handleSubmit, values, errors } = useFormProfile(
		submitForm,
		validateSignUp
	);
	const loggedEmail = LogInState.useState((s) => s.loggedInEmail);

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

	const deleteAcc = () => {
		try {
			axios.delete("http://localhost:5000/delete-user", {
				data: { email: loggedEmail },
			});
			LogInState.update((s) => {
				s.isLoggedIn = false;
			});
			navigate("/home");
			alert("deleted");
		} catch (err) {
			console.error(err);
			alert("not deleted");
		}
	};

	function logout() {
		LogInState.update((s) => {
			s.isLoggedIn = false;
		});
		navigate("/home");
	}

	return (
		<div className="profile-container">
			<div className="pform-content">
				<form method="">
					<h1>User Details</h1>
					<div className="pform-inputs">
						<label className="pform-label">Fullname</label>
						<input
							className="pform-input"
							type="text"
							name="fullname"
							placeholder="Enter your fullname"
							onChange={handleChange}
							value={values.fullname}
						/>
					</div>
					<div className="pform-inputs">
						<label className="pform-label">Email</label>
						<input
							className="pform-input"
							type="email"
							name="email"
							placeholder="Enter your email"
							onChange={handleChange}
							value={loggedEmail}
						/>
					</div>
					<div className="pform-inputs">
						<label className="pform-label">Current Password</label>
						<input
							className="pform-input"
							type="password"
							name="curentpassword"
							placeholder="Current password"
							onChange={handleChange}
						/>
					</div>
					<div className="pform-inputs">
						<label className="pform-label">New Password</label>
						<input
							className="pform-input"
							type="password"
							name="password"
							placeholder="New password"
							onChange={handleChange}
							value={values.password}
						/>
					</div>
					<div className="pform-inputs">
						<label className="pform-label">Confirm Password</label>
						<input
							className="pform-input"
							type="password"
							name="password2"
							placeholder="Confirm password"
							onChange={handleChange}
							value={values.password2}
						/>
					</div>
					<button
						className="pform-btn"
						type="button"
						onSubmit={handleSubmit}
						onClick={submitForm}
					>
						Update
					</button>
					<button className="pform-btn" type="submit" onClick={logout}>
						Logout
					</button>
					<button className="pform-btn" type="submit" onClick={deleteAcc}>
						Delete Account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, resolvePath } from "react-router-dom";
// import { LogInState } from "../globalState";
// import { Btn } from "./Btn";
// import useFormLogin, { Test } from "./useFormLogin";

// function Profile() {
// 	const loggedEmail = LogInState.useState((s) => s.loggedInEmail);
// 	const { handleChange, handleSubmit, values, errors } = useFormLogin();
// 	const [v, setValues] = useState({
// 		email: values.email,
// 	});

// 	const deleteAcc = () => {
// 		try {
// 			axios.delete("http://localhost:5000/delete-user", {
// 				data: { email: loggedEmail },
// 			});
// 			alert("deleted");
// 		} catch (err) {
// 			console.error(err);
// 			alert("not deleted");
// 		}
// 	};

// 	return (
// 		// 	<button>yohoo</button>
// 		// 	// <h1>hihi {testing}</h1>
// 		// );
// 		<div class="container emp-profile">
// 			<form method="">
// 				<div class="row">
// 					<div class="col-md-2">
// 						<input
// 							type="submit"
// 							class="profile-edit-btn"
// 							name="btnAddMore"
// 							value="Edit Profile"
// 						/>
// 						<input
// 							type="submit"
// 							class="profile-edit-btn"
// 							name="btnAddMore"
// 							value="Delete Account"
// 							onClick={deleteAcc}
// 						/>
// 						<input
// 							type="submit"
// 							class="profile-edit-btn"
// 							name="btnAddMore"
// 							value="Logout"
// onClick={() =>
// 	LogInState.update((s) => {
// 		s.isLoggedIn = false;
// 	})
// 							}
// 						/>
// 					</div>
// 				</div>
// 			</form>
// 		</div>
// 	);
// }
// // }

// export default Profile;
