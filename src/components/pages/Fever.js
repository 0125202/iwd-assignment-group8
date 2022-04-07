import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
	homeObjSix,
	homeObjSeven,
} from "../FEVER SERVICES/FeverInfoData";

// import { FeverInfo } from "../../components";
import Footer from "../Footer";
import FeverInfo from "../FEVER SERVICES/FeverInfo";
import FeverSubInfo from "../FEVER SERVICES/FeverSubInfo";
import Popupchat from "../Popupchat";

function Fever() {
	return (
		<>
			<FeverInfo {...homeObjOne} />
			<FeverSubInfo {...homeObjThree} />
			<FeverSubInfo {...homeObjSeven} />
			<FeverSubInfo {...homeObjFour} />
			<FeverSubInfo {...homeObjFive} />
			<FeverSubInfo {...homeObjSix} />
			<Popupchat />
			<Footer />
		</>
	);
}

export default Fever;
