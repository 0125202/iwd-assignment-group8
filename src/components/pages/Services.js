// denyse
import React from "react";
import "../../App.css";
import { LogInState } from "../../globalState";
import CardsServices from "../CardsServices";
import Footer from "../Footer";
import Popupchat from "../Popupchat";

function Services() {
	const logState = LogInState.useState((s) => s.isLoggedIn);
	return (
		<>
			<CardsServices />
			<Footer />
			{logState ? <Popupchat /> : <></>}
		</>
	);
}

export default Services;
