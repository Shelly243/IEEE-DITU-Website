import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { EventsHoriCard } from './EventsHoriCard';
import { sliderCards } from './Eventspagedata.jsx'

function CardSlider() {
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1700, min: 1401 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1400, min: 1035 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1034, min: 699 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 698, min: 0 },
    items: 1
  }
};
  return (
    <center>
        <Carousel responsive={responsive}>
          
            {sliderCards.map((sliderCard, id) => {
              return (
                <div key={id}>
                <div><EventsHoriCard 
                  horiCardImage = {sliderCard.horiCardImage}
                  horiCardTitle = {sliderCard.horiCardTitle}
                  horiCardCoordinator = {sliderCard.horiCardCoordinator}
                  horiCardSpeaker = {sliderCard.horiCardSpeaker}
                  horiCardDate = {sliderCard.horiCardDate}
                /></div>
              </div>
             );
            })}
          
            
        </Carousel>
    </center>

  )
}

export default CardSlider

