import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../DOC DETAILS/DocInfoData";

// import { DocInfo } from "../../components";
import Footer from "../Footer";
import DocInfo from "../DOC DETAILS/DocInfo";

function Doc() {
	return (
		<>
			<DocInfo {...homeObjOne} />
			<DocInfo {...homeObjThree} />
			<DocInfo {...homeObjTwo} />
			<DocInfo {...homeObjFour} />
			<Footer />
		</>
	);
}

export default Doc;
