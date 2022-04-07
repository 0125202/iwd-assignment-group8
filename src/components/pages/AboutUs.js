import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../ABOUT US/AbtUsData";

import { AbtUs } from "../../components";
import Footer from "../Footer";

function AboutUs() {
	return (
		<>
			<AbtUs {...homeObjOne} />
			<AbtUs {...homeObjThree} />
			<AbtUs {...homeObjTwo} />
			<AbtUs {...homeObjFour} />
			{/* <AbtUs {...homeObjFive} /> */}
			<Footer />
		</>
	);
}

export default AboutUs;
