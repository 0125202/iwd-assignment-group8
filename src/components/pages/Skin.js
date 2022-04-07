import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
} from "../SKIN SERVICES/SkinInfoData";

// import { SkinInfo } from "../../components";
import Footer from "../Footer";
import SkinInfo from "../SKIN SERVICES/SkinInfo";
import SkinSubInfo from "../SKIN SERVICES/SkinSubInfo";
import Popupchat from "../Popupchat";

function Skin() {
	return (
		<>
			<SkinInfo {...homeObjOne} />
			<SkinSubInfo {...homeObjThree} />
			<SkinSubInfo {...homeObjFive} />
			<SkinSubInfo {...homeObjFour} />
			<Popupchat />
			<Footer />
		</>
	);
}

export default Skin;
