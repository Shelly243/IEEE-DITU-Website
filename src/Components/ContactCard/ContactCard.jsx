import React from 'react'
import './ContactCard.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CreateIcon from '@mui/icons-material/Create';

function ContactCard() {
    const adjustSize = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return (
        <div className='contactCard'>
            <div className="contactHeading">
                Let's Connect!
            </div>
            <div className="contactSubHeading">
                Hey there! Wanna connect? Have a message for us, any suggestions or doubts. Feel free to contact us directly by filling the form or reach us through our social media handles
            </div>
            <div className="contactForm">
                <div className="info">
                    <div className="name">
                        <PersonIcon />
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="email">
                        <EmailIcon />
                        <input type="text" placeholder="Your Email" />
                    </div>
                </div>
                <div className="subjects">
                    <div className="subjectField">
                        <ChatBubbleIcon />
                        <input type="text" placeholder="Subject" />
                    </div>
                </div>
                <div className="message">
                    <div className="messageArea">
                        <CreateIcon />
                        <textarea rows={1} onChange={adjustSize} placeholder="Your Message" />
                    </div>
                </div>
                <button className="sendMessage">
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default ContactCard
