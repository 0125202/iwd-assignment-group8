import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Know Us More!!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/doctor-nurse.png"
							text="Check Out Our Doctor's Details"
							label="Information"
							path="/doc-details"
						/>
						<CardItem
							src="images/telemedicine.png"
							text="Have A Personal 1 to 1 Doctor Consultation"
							label="Personal"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/hospital.png"
							text="Pharmacies and Hospitals Collaboration with Us"
							label="Informative"
							path="/collaboration-info"
						/>
						<CardItem
							src="images/feedback.png"
							text="Feedbacks from Customers"
							label="Feedbacks"
							path="/feedback"
						/>
						<CardItem
							src="images/medical-checkup.png"
							text="Body Signs That You Should be Aware Of"
							label="Information"
							path="/article"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
