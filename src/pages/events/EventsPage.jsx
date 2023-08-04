import React from "react";

import CardSlider from "./CardSlider";

import { EventsVerCard } from "./EventsVerCard";
import { verCards } from "./Eventspagedata.jsx";

function EventsPage() {
	return (
		<div className="event-page-container">
			{/*content section*/}
			<h1>Explore IEEE Student Branch DITU</h1>
			<br />
			<p className="event-content-section">
				The IEEE Student Branch Chapter of DIT University provides a variety of
				conferences, workshops and professional development experiences, both
				face-to-face and online, that address the networking and learning needs
				of advancing technology for the benefit of humanity.
			</p>
			<p>
				IEEE-DITU events, workshops and professional development programs
				deliver both forward-thinking innovation and exploration as well as
				practical, tangible advances and research to address challenges and
				identify opportunities.
			</p>
			<br />

			{/*event horizontal cards section*/}
			<h1>Workshop</h1>
			<div className="event-hori-cards-container">
				<CardSlider /> {/*card slider*/}
			</div>
			<br />

			{/*event vertical cards section*/}
			<h1>Youthopia</h1>
			<div className="eventVerCardsContainer">
				{verCards.map((verCard, id) => {
					return (
						<div key={id}>
							<EventsVerCard
								verCardImage={verCard.verCardImage}
								verCardTitle={verCard.verCardTitle}
								verCardCoordinator={verCard.verCardCoordinator}
								verCardSpeaker={verCard.verCardSpeaker}
								verCardDate={verCard.verCardDate}
								verCardContent={verCard.verCardContent}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default EventsPage;
