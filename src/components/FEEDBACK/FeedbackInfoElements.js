import styled from "styled-components";

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;
	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}s
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ primary }) => (primary ? "#414969" : "#546375")};
	/* background: linear-gradient(
		90deg,
		rgb(84, 99, 117) 0%,
		rgb(65, 73, 105) 100%
	); */

	white-space: nowrap;
	padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	margin-left: 22px;
	&:hover {
		transition: all 0.3s ease-out;
		background: #fff;
		background-color: ${({ primary }) => (primary ? "#2C5485" : "#2D4294")};
		/* background-color: linear-gradient(
		90deg,
		rgb(44, 84, 133) 0%,
		rgb(45, 66, 148) 100%
	);
	} */
	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const InfoSec = styled.div`
	color: #fff;
	padding: 40px 0;
	background: ${({ lightBg }) => (lightBg ? "#f7fbff" : "#D9E2EB" /*#9dbabf*/)};
`;

export const InfoRow = styled.div`
	display: flex;
	margin: 0 -15px -90px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
	margin-bottom: 80px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	max-width: 50%;
	flex-basis: 50%;
	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 800px;
	padding-top: 0;
	padding-bottom: 0px;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
	}
`;	

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
	color: ${({ lightTopLine }) => (lightTopLine ? "#206796" : "#1d3a78")};
	font-size: 18px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
	margin-left: 22px;
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#23475F" : "#496487")};
	text-align: left;
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align:justify;
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#4d6378" : "#243b4a")};
	margin-left: 22px;
`;

export const Heading2 = styled.h1`
	margin-bottom: 24px;
	font-size: 30px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#23475F" : "#496487")};
	text-align: left;
`;

export const Subtitle2 = styled.p`
	max-width: 150%;
	margin-bottom: 0px;
	font-size: 18px;
	line-height: 24px;
	text-align:justify;
	color: ${({ lightTextDesc }) => (lightTextDesc ? "#4d6378" : "#243b4a")};
	margin-left: 22px;
	width:10000px;
`;

export const InfoRow3 = styled.div`
	display: flex;
	margin: 0 400px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

