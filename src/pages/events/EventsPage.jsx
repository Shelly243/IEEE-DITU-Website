import React, { useState} from 'react'
import '../events/EventsPage.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useCollapse } from 'react-collapsed'


function EventsPage() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>
        {/*main container*/}
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
            {/*content section close*/}

          
            {/*event horizontal cards section*/}
            <h1>Workshop</h1>
            <div className="event-hori-cards-container">
                
                {/*card slider*/}
                <Carousel responsive={responsive}>
                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/*cards */}
                        <div className="hori-card">
                            {/*image*/}
                            <div className="image">
                                <img src="https://picsum.photos/200/300" alt="image" />
                            </div>
                            {/*description*/}
                            <div className="des">
                                <h3>title Here</h3>
                                <br />
                                <h5>Coordinator</h5>
                                <h5>Speaker</h5>
                                <h5>Date</h5>
                                <br />
                                {/*button*/}
                                <a href='_blank' className="hori-card-btn">Read More</a>
                            </div>
                        </div>
                    </div>

                </Carousel>
                {/*card slider close*/}
            </div>
            <br />
            {/*event horizontal cards section close*/}

          
            {/*event vertical cards section*/}
            <h1>Youthopia</h1>
            <div className="event-ver-cards-container">
                {/*cards*/}
                <div className="ver-card">
                    {/*image*/}
                    <img className="image" src="https://picsum.photos/200/300" alt="image" />
                  
                    {/*description*/}
                    <div className="des">
                      <h3>title Here</h3>
                      <br />
                      <h5>Coordinator</h5>
                      <h5>Speaker</h5>
                      <h5>Date</h5>
                      <br />
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui autem quo voluptatem. Nihil, commodi molestiae fugiat assumenda quidem tenetur corporis, inventore vitae laboriosam sint illo fuga similique ad maiores iusto!
                          <section {...getCollapseProps()}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis adipisci molestias voluptas minima natus, provident suscipit laborum animi ad dolor laudantium assumenda repellat totam voluptate ut inventore exercitationem vero.
                          </section>   
                      </p>
                      <br />
                      {/*button*/}
                      <button className='read-more-less-btn' {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </button>
                </div>
                {/*cards close*/}


            </div>
            {/*event vertical cards section close*/}
            
        </div>
    </div>
    </div>
  );
}

export default EventsPage
