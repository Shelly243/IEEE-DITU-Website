import React from 'react'

import CardSlider  from './CardSlider'

import { EventsVerCard } from './EventsVerCard';
import { verCards } from './Eventspagedata.jsx'

function EventsPage() {
  return (
        <div className="event-page-container">

            {/*content section*/}
            <h1>Explore IEEE Student Branch DITU</h1>
            <br />
            <p className="event-content-section">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tenetur perferendis obcaecati. Mollitia atque nulla pariatur iste nostrum nisi minus illo est! Nihil non quas alias commodi voluptas nemo dolorum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque perferendis non cum, nulla tenetur eum repudiandae dolore similique consequuntur nisi adipisci! Pariatur aperiam dolorum cupiditate culpa ad quod modi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio incidunt explicabo amet ipsum porro consectetur in autem unde soluta possimus sint qui repellendus omnis, quaerat totam error. Doloribus, odit.
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
                        verCardImage = {verCard.verCardImage}
                        verCardTitle = {verCard.verCardTitle} 
                        verCardCoordinator = {verCard.verCardCoordinator}
                        verCardSpeaker = {verCard.verCardSpeaker }
                        verCardDate = {verCard.verCardDate}
                        verCardContent = {verCard.verCardContent}
                    />
                    </div>
                );
            })}
            </div>
        </div>
  );
}

export default EventsPage
