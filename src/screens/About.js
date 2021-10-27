import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
    return (
        <div className="ab">
             <Element name="about">
        </Element>
        <div className="container">
        <div className="container-fluid">
            <h4 style={{color: 'black'}}>We believe in</h4>
            <div className="slide-container">
                <h4 className="slide-text">making things happen</h4>
                <h4>people over anything else</h4>
                <h4>experimenting over assuming</h4>
            </div>
        </div>
        <div className="d-flex justify-content-end">
            <div className="about-para">
                <p className="about-text">Walbury, is a full-service digital transformation consultancy company that specializes in software development, mobile applications, and web development. The company builds and upgrades professional websites, develops and manages apps, and offers digital consultancy services for clients from a wide range of industries, including advertising, communications, fashion, finance, e-commerce, law, medical, and health, construction, insurance, and real estate. Our wide array of services are carefully curated for the ultimate solution to all kinds of web, app, and internet-related problems that the industries of today face. Being a new-age company we understand the problems faced by the client from all possible dimensions, analyze all the factors and come up with solutions which make use of the latest technologies and tools at our disposal.</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About
