import React/*, { useState }*/ from 'react'
import './Eventspage.css'

/*import { useCollapse } from 'react-collapsed'

const [isExpanded, setExpanded] = useState(false)
const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })*/


export const EventsVerCard = (
  {
    verCardImage,
    verCardTitle,
    verCardCoordinator,
    verCardSpeaker,
    verCardDate,
    verCardContent,
  }
) => {
  return (
    <div>
        <div className="ver-card">
        {/*image*/}
        <img className="image" src={ verCardImage } alt="image" />
        {/*description*/}
        <div className="des">
          <h3>{ verCardTitle }</h3>
          <br />
          <h5>Coordinator: { verCardCoordinator }</h5>
          <h5>Speaker: { verCardSpeaker }</h5>
          <h5>Date: { verCardDate }</h5>
          <br />
          <p> { verCardContent }</p>
          <br />
          {/*button
          {/*<section {...getCollapseProps()}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis adipisci molestias voluptas minima natus, provident suscipit laborum animi ad dolor laudantium assumenda repellat totam voluptate ut inventore exercitationem vero.
          </section>
          <div>
          <button className='read-more-less-btn' {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
          {isExpanded ? 'Collapse' : 'Expand'}
          </button>*/}
        </div>
        </div>
    </div>
  );
}


