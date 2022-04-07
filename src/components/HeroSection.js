import React from "react";
import "../App.css";
import { Btn } from "./Btn";
import "./HeroSection.css";
// import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { LogInState } from "../globalState";
// import { Button } from "react-bootstrap";

function HeroSection() {
	const login = LogInState.useState((s) => s.isLoggedIn);
	const navigate = useNavigate();
	return (
		<div className="hero-container">
			<video src="/videos/dna.mp4" autoPlay loop muted />
			<h1>NEW NORM, BETTER HEALTH</h1>
			<p>Online Doctor Consultation, Anytime, Anywhere.</p>
			<div className="hero-btns">
				{!login ? (
					<Link to="/sign-up" className="btn-mobile">
						<Btn
							className="btns"
							buttonStyle="btn--primary"
							buttonSize="btn--large"
							onClick={() => navigate("/sign-up")}
						>
							JOIN US!!!
						</Btn>
					</Link>
				) : (
					<></>
				)}
				{/* <Link to="/faqs" className="btn-mobile">
					<Btn
						className="btns"
						buttonStyle="btn--primary"
						buttonSize="btn--large"
						onClick={() => ("/faqs")}
					>
						FAQs <i className="far fa-circle-question" />
					</Btn>
				</Link> */}
			</div>
		</div>
	);
}

export default HeroSection;

// const Section = styled.section`
// 	background: red;
// 	height: 100px;
// `;
// const Hero = () => {
// 	return (
// 		<Section>
// 			<h1>testing</h1>
// 		</Section>
// 	);
// };

// export default Hero;
