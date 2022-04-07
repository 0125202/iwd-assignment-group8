import React from "react";
import { Link } from "react-router-dom";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	Container,
	Button,
} from "./FeedbackInfoElements";

function FeedbackInfo({
	primary,
	lightBg,
	topLine,
	lightTopLine,
	lightText,
	lightTextDesc,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	imgStart,
	start,
}) {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
}

export default FeedbackInfo;
