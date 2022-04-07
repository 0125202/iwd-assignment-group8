import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../FLU SERVICES/FluInfoData";

// import { FluInfo } from "../../components";
import Footer from "../Footer";
import FluInfo from "../FLU SERVICES/FluInfo";
import FluSubInfo from "../FLU SERVICES/FluSubInfo";
import Popupchat from "../Popupchat";

function Flu() {
	return (
		<>
			<FluInfo {...homeObjOne} />
			<FluSubInfo {...homeObjThree} />
			<FluSubInfo {...homeObjFive} />
			<FluSubInfo {...homeObjFour} />
			<Popupchat />
			<Footer />
		</>
	);
}

export default Flu;
