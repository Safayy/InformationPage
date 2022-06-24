import React from 'react'
import profilePicture from '../images/safa.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Info() {
    return (
        <div className="info">
            <img className="info--picture" src={profilePicture}/>
            <h1 className="info--name">Safa Yousif</h1>
            <h3 className="info--role">Aspiring Frontend Developer</h3>
            {/* <a src="https://safa.codes">
                <p className="info--website">safa.codes</p>
            </a> */}
            <a className="info--website" href="https://safa.codes">
                <p>safa.codes</p>
            </a>
            <div className="info--links">
                <button className="info--links--button info--links--button--email"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='mailto://safa.yousif@outlook.com';
                    }}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>    
                </button> 
                <button className="info--links--button info--links--button--linkedin"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.linkedin.com/in/safa-yousif/';
                    }}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>    
                </button>
            </div>
        </div>
    )
}