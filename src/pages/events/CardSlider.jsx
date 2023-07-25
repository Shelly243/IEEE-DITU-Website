import React from 'react'
import EventsHoriCard from './EventsHoriCard';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div>
            <div><EventsHoriCard /></div> 
        </Carousel>
    </center>

  )
}

export default CardSlider

