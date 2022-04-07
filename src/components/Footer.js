import React from "react";
import { Link } from "react-router-dom";
import { LogInState } from "../globalState";
import { Btn } from "./Btn";
import "./Footer.css";

function Footer() {
	const logged = LogInState.useState((s) => s.isLoggedIn);
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Subscribe to our newsletter !!
				</p>
				<p className="footer-subscription-text">
					You can unsubscribe at any time.
				</p>
				<div className="input-areas">
					<form>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="footer-input"
						/>
						<Btn buttonStyle="btn--outline">Subscribe</Btn>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/about-us">ONLINEDOC</Link>
						<Link to="/about-us">Doctors</Link>
						<Link to="/about-us">Hospitals & Pharmacies</Link>
						<Link to="/about-us">Secure Database</Link>
					</div>
					<div className="footer-link-items">
						<h2>Services</h2>
						<Link to="/services">Services We Provide</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					{!logged ? (
						<div className="footer-link-items">
							<h2>Account</h2>
							<Link to="/sign-up">Sign Up</Link>
							<Link to="/login">Login</Link>
						</div>
					) : (
						<></>
					)}
					<div className="footer-link-items">
						<h2>Know Us More</h2>
						<Link to="/doc-details">Doctor Details</Link>
						<Link to="/article">Articles</Link>
						<Link to="/collaboration-info">Collab Info</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrapper">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							ONLINEDOC <i className="fa-solid fa-stethoscope" />
						</Link>
					</div>
					<small className="website-rights">ONLINEDOC ® 2022</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</Link>
						<Link
							className="social-icon-link youtube"
							to="/"
							target="blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube"></i>
						</Link>
						<Link
							className="social-icon-link twitter"
							to="/"
							target="blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
