import React from "react";
import { Link } from "react-router-dom";
import {
	InfoSec,
	InfoRow3,
	//InfoColumn,
	TextWrapper,
	TopLine,
	Heading2,
	Subtitle2,
	//ImgWrapper,
	//Img,
	Container,
	//Button,
} from "./FluInfoElements";

function FluSubInfo({
	//primary,
	lightBg,
	topLine,
	lightTopLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	//buttonLabel,
	//img,
	//alt,
	imgStart,
	//start,
}) {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow3 imgStart={imgStart}>
						<TextWrapper>
							<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
							<Heading2 lightText={lightText}>{headline}</Heading2>
							<Subtitle2 lightTextDesc={lightTextDesc}>{description}</Subtitle2>
						</TextWrapper>
					</InfoRow3>
				</Container>
			</InfoSec>
		</>
	);
}

export default FluSubInfo;
