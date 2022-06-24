import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faFreeCodeCamp, faGithubSquare, faLinkedin, faMedium, faMediumM, faStackOverflow, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <a className="footer--social" href="google.com" target="blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a className="footer--social" href="https://github.com/Safayy" target="blank">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a className="footer--social" href="" target="blank">
                <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a className="footer--social" href="" target="blank">
                <FontAwesomeIcon icon={faMediumM} />
            </a>
        </div>
    )
}