import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <h1>Safa Yousif</h1>
            <h3>Aspiring Frontend Developer</h3>
            <a src="safa.codes">safa.codes</a>
            <button className="info--email">Email</button> 
            <button className="info--linkedin">LinkedIn</button>        {/*onClick="sendLinkedIn()"*/}
        </div>
    )
}