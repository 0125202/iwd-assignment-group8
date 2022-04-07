import React, { useState, useEffect, createContext, useContext } from "react";
import { Link /*, useHistory*/ } from "react-router-dom";
import { Btn } from "./Btn";
import "./NavigationBar.css";

import { LogInState } from "../globalState";

function NavigationBar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	// const history = useHistory();

	// const handleLogoutClick = () => {
	// logout()
	// 	history.push("/");
	// };
	const logState = LogInState.useState((s) => s.isLoggedIn);
	const chgBtn = () => {
		if (logState === true) {
			return (
				<Link to="/profile" className="btn-mobile">
					{button && (
						<Btn buttonStyle="btn--outline" buttonSize="btn--medium">
							Profile
						</Btn>
					)}
				</Link>
			);
		} else {
			return (
				<Link to="/sign-up" className="btn-mobile">
					{button && (
						<Btn buttonStyle="btn--outline" buttonSize="btn--medium">
							SIGN UP / LOGIN
						</Btn>
					)}
				</Link>
			);
		}
	};

	return (
		<>
			<nav className="navigationBar">
				<div className="navigationBarContainer">
					<Link
						to="/"
						id="NavigationBarLogo"
						onClick={closeMobileMenu}
						// style={{ textDecoration: "none", color: "black" }}
					>
						ONLINEDOC
						<i className="fa-solid fa-stethoscope"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="navigation-item">
							<Link
								to="/home"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about-us"
								className="nav-links"
								onClick={closeMobileMenu}
								// style={{ textDecoration: "none", color: "black" }}
							>
								About us
							</Link>
						</li>
						{!logState ? (
							<li className="nav-item">
								<Link
									to="/sign-up"
									className="nav-links-mobile"
									onClick={closeMobileMenu}
								>
									Sign Up / Login
								</Link>
							</li>
						) : (
							<li className="nav-item">
								<Link
									to="/profile"
									className="nav-links-mobile"
									onClick={closeMobileMenu}
								>
									Profile
								</Link>
							</li>
						)}
					</ul>
					{chgBtn()}
					{/* {!userIsLoggedIn ? (
						<Link to="/sign-up" className="btn-mobile">
							{button && (
								<Btn buttonStyle="btn--outline" buttonSize="btn--medium">
									SIGN UP
								</Btn>
							)}
						</Link>
					) : (
						<Link to="/home" className="btn-mobile">
							{button && (
								<Btn buttonStyle="btn--outline" buttonSize="btn--medium">
									Profile
								</Btn>
							)}
						</Link>
					)} */}
				</div>
			</nav>
		</>
	);
}

export default NavigationBar;
