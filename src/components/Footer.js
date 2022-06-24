import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faFreeCodeCamp, faGithubSquare, faLinkedin, faMedium, faMediumM, faStackOverflow, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <a className="footer--social" href="https://twitter.com/safayousifa" target="blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a className="footer--social" href="https://github.com/Safayy" target="blank">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a className="footer--social" href="https://www.freecodecamp.org/safayousif" target="blank">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
            </a>
            <a className="footer--social" href="https://medium.com/@safayousif" target="blank">
                <FontAwesomeIcon icon={faMediumM} />
            </a>
        </div>
    )
}