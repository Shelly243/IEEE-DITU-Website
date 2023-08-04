import React from "react";
import "./ContactCard.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CreateIcon from "@mui/icons-material/Create";
import { useForm } from "@formspree/react";

function ContactCard() {
	const [state, handleSubmit] = useForm("xgejoqbl");
	const adjustSize = (e) => {
		e.target.style.height = "inherit";
		e.target.style.height = `${e.target.scrollHeight}px`;
        console.log("change")
	};
	if (state.succeeded) {
		return <h1>submitted thankyou</h1>;
	}

	return (
		<div className="contactCard">
			<div className="contactHeading">Let's Connect!</div>
			<div className="contactSubHeading">
				Hey there! Wanna connect? Have a message for us, any suggestions or
				doubts. Feel free to contact us directly by filling the form or reach us
				through our social media handles
			</div>
			<form className="contactForm" onSubmit={handleSubmit}>
				<div className="info">
					<div className="name">
						<PersonIcon />
						<input type="text" id="name" name="name" placeholder="Your Name" />
					</div>
					<div className="email">
						<EmailIcon />
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
						/>
					</div>
				</div>
				<div className="subjects">
					<div className="subjectField">
						<ChatBubbleIcon />
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="Subject"
						/>
					</div>
				</div>
				<div className="message">
					<div className="messageArea">
						<CreateIcon />
						<input
							rows={1}
							onChange={adjustSize}
							placeholder="Your Message"
							id="message"
							name="message"
						/>
					</div>
				</div>
				<button
					className="sendMessage"
					type="submit"
					disabled={state.submitting}
				>
					Send Message
				</button>
			</form>
		</div>
	);
}

export default ContactCard;
