import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../COLLAB INFO/CollabInfoData";

// import { CollabInfo } from "../../components";
import Footer from "../Footer";
import CollabInfo from "../COLLAB INFO/CollabInfo";
import CollabSubInfo from "../COLLAB INFO/CollabSubInfo";

function Collab() {
	return (
		<>
			<CollabInfo {...homeObjOne} />
			<CollabSubInfo {...homeObjThree} />
			<CollabSubInfo {...homeObjFive} />
			<CollabSubInfo {...homeObjFour} />
			<Footer />
		</>
	);
}

export default Collab;
