import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../PERIOD SERVICES/PeriodInfoData";

// import { PeriodInfo } from "../../components";
import Footer from "../Footer";
import PeriodInfo from "../PERIOD SERVICES/PeriodInfo";
import PeriodSubInfo from "../PERIOD SERVICES/PeriodSubInfo";
import Popupchat from "../Popupchat";

function Period() {
	return (
		<>
			<PeriodInfo {...homeObjOne} />
			<PeriodSubInfo {...homeObjThree} />
			<PeriodSubInfo {...homeObjFive} />
			<PeriodSubInfo {...homeObjFour} />
			<Popupchat />
			<Footer />
		</>
	);
}

export default Period;
