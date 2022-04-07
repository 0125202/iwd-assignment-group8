import React, { Component } from "react";
import {
	addResponseMessage,
	Chat,
	addLinkSnippet,
	addUserMessage,
	addResponseChoices,
	toggleInputDisabled,
	toggleChat,
} from "react-chat-popup";
import logo from "./op.png";

class Popupchat extends Component {
	chatEndded = false;
	componentDidMount() {
		const hasVisited = localStorage.getItem("hasVisited");
		function doThis() {
			addResponseChoices({
				text: "Please pick one of the services below: ",
				choices: [
					{
						text: "FAQ",
						value: "FAQ",
					},
					{
						text: "Consultation",
						value: "Consultation",
					},
				],
			});
		}
		if (!hasVisited) {
			localStorage.setItem("hasVisited", true);
			toggleChat();
			addResponseMessage(
				"Hello there, I'm OnlineDoc Chatbot, how may I assist you?"
			);
			doThis();
		} else {
			if (hasVisited === null) {
				addResponseMessage(
					"Hello there, I'm OnlineDoc Chatbot, how may I assist you?"
				);
				doThis();
			}
			// return;
		}
	}

	handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		var response = newMessage;
		function doThis() {
			addResponseChoices({
				text: "Please pick one of the services below: ",
				choices: [
					{
						text: "FAQ",
						value: "FAQ",
					},
					{
						text: "Consultation",
						value: "Consultation",
					},
				],
			});
		}
		if (response === "FAQ") {
			addResponseMessage("Below are the list of FAQ:");
			addResponseMessage(
				`1. How to deal with Flu? Solution:\n\n -rest and sleep \n\n-keep warm \n\n-take paracetamol or ibuprofen to lower your temperature and treat aches and pains \n\n-drink plenty of water to avoid dehydration (your pee should be light yellow or clear)`
			);
			addResponseMessage(
				`2. How to deal with period cramps? Solution:\n\n -exercise \n\n -taking a hot bath\n\n -putting a heating pad on your belly\n\n -take ibuprofen`
			);
			addResponseMessage(
				`3. How to deal with skin ? Solution:\n\n -moisture your skin at least twice a day\n\n -apply an anti-itch cream to the affected area\n\n -apply bandages\n\n -use a humidifier`
			);
			addResponseMessage(
				`4. How to deal with fever? Solution:\n\n -rest and drink plenty of water \n\n -take ibuprofen if you're uncomfortable\n\n -consult a doctor if fever is accompanied by severe headache`
			);
			// addResponseMessage(
			// 	`Type 'Consultation' if you wish to start a consultation session with our doctor on call`
			// );
			addResponseMessage(
				"The chat has ended. Please select an option below if you would like to start again."
			);
			doThis();
			return false;
		} else if ((response = true)) {
			addResponseChoices({
				text: "Please choose the following media to proceed with consultation: ",
				choices: [
					{
						text: "Messenger",
						value: "Messenger",
					},
					{
						text: "Whatsapp",
						value: "Whatsapp",
					},
				],
			});

			if (newMessage === "Messenger") {
				var Messenger = {
					title: "Our Messenger Link",
					link: "https://www.fb.com/messages/t/106038188702400/",
					target: "_blank",
				};
				addLinkSnippet(Messenger);
				addResponseMessage(
					"Kindly click on the link to start a free consultation session with our doctor on call."
				);
				// addResponseMessage(
				// 	"Please be assured that we will not share your personal information to third parties or any other organisations without your permission."
				// );
				//addUserMessage("End");
				addResponseMessage(
					"The chat has ended. Please select an option below if you would like to start again."
				);
				//toggleInputDisabled();
				doThis();
			} else if (newMessage === "Whatsapp") {
				var Whatsapp = {
					title: "Our Whatsapp Link",
					link: "https://wa.me/60102392161",
					target: "_blank",
				};
				addLinkSnippet(Whatsapp);
				addResponseMessage(
					"Kindly click on the link to start a free consultation session with our doctor on call."
				);
				// addResponseMessage(
				// 	"Please be assured that we will not share your personal information to third parties or any other organisations without your permission."
				// );
				//addUserMessage("End");
				addResponseMessage(
					"The chat has ended. Please select an option below if you would like to start again."
				);
				//toggleInputDisabled();
				doThis();
			}
		}
		//this one is error message but not sure why its not working T.T
		else if (response !== "FAQ" && response !== true) {
			addResponseMessage(
				"Please type only FAQ or Consultation to proceed with our service"
			);
		}
	};

	render() {
		return (
			<div className="popup">
				<Chat
					handleNewUserMessage={this.handleNewUserMessage}
					profileAvatar={logo}
					title="OnlineDoc ChatBot"
					subtitle="Hello there!"
					senderPlaceHolder="Ask any questions..."
				/>
			</div>
		);
	}
}

localStorage.clear();

export default Popupchat;
