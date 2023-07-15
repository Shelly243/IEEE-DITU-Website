import React, { useState } from 'react'
import '../events/EventsPage.css'

import { useCollapse } from 'react-collapsed'

function EventsVerCard() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div>
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
          <div>
          <button className='read-more-less-btn' {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
          {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        </div>
    </div>
    </div>
  );
}

export default EventsVerCard