import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../FEEDBACK/FeedbackInfoData";

// import { FeedbackInfo } from "../../components";
import Footer from "../Footer";
import FeedbackInfo from "../FEEDBACK/FeedbackInfo";
import FeedbackSubInfo from "../FEEDBACK/FeedbackSubInfo";

function Feedback() {
	return (
		<>
			<FeedbackInfo {...homeObjOne} />
			<FeedbackSubInfo {...homeObjThree} />
			<FeedbackSubInfo {...homeObjFive} />
			<FeedbackSubInfo {...homeObjFour} />
			<Footer />
		</>
	);
}

export default Feedback;
