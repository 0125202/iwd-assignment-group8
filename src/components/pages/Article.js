import React from "react";
import "../../App.css";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeObjFive,
	homeObjSix,
} from "../ARTICLE/ArticleInfoData";

// import { ArticleInfo } from "../../components";
import Footer from "../Footer";
import ArticleInfo from "../ARTICLE/ArticleInfo";
import ArticleSubInfo from "../ARTICLE/ArticleSubInfo";

function Article() {
	return (
		<>
			<ArticleInfo {...homeObjOne} />
			<ArticleSubInfo {...homeObjThree} />
			<ArticleSubInfo {...homeObjFive} />
			<ArticleSubInfo {...homeObjFour} />
			<ArticleSubInfo {...homeObjSix} />
			<Footer />
		</>
	);
}

export default Article;
