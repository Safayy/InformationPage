import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGithub, faGithubSquare, faInstagram, faInstagramSquare, faLinkedin, faStackExchange, faStackOverflow, faTwitterSquare, faWeebly } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="about">
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter-square" />
            <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
            <FontAwesomeIcon icon="fa-brands fa-instagram-square" />
            <FontAwesomeIcon icon="fa-brands fa-github-square" />
            <FontAwesomeIcon icon="fa-brands fa-twitter-square" /> */}
            
            <p>test</p>
            <FontAwesomeIcon icon={faGithubSquare} />
            <FontAwesomeIcon icon={faStackOverflow} />
            <FontAwesomeIcon icon={faCode} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
    )
}