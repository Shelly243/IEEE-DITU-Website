import React from 'react'
import './Eventspage.css'


export const EventsHoriCard = (
  {
    horiCardImage,
    horiCardTitle,
    horiCardCoordinator,
    horiCardSpeaker,
    horiCardDate,
  }
) => {
  return (
    <div>
        {/*cards */}
        <div className="hori-card">
            {/*image*/}
            <div className="image">
                <img src={ horiCardImage } alt="image" />
            </div>
            {/*description*/}
            <div className="des">
                <h3>{ horiCardTitle }</h3>
                <br />
                <h5>Coordinator: { horiCardCoordinator }</h5>
                <h5>Speaker: { horiCardSpeaker }</h5>
                <h5>Date: { horiCardDate }</h5>
                <br />
                {/*button
                <a href='_blank' className="hori-card-btn">Read More</a>*/}
            </div>
        </div>
    </div>
  )
}


