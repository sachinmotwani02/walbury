import {Button} from 'react-bootstrap'
import React from 'react'
import cir from '../assets/img/cir.png'
import { Element } from 'react-scroll'

const Contact = () => {
    return (
        <div className="contact-contain">
             <Element name="contact">
        </Element>
            <div className="container">
                <h4 className="contact">Contact us</h4>
                <p className="contact-text">For general queries, sales and partnerships please drop a mail anytime <br></br>and we will reach you.</p>
                <Button href="mailto:coo@walbury.in" variant="dark" size="lg">Mail us</Button>
            </div>
            <img className="circles" src={cir} alt="circles"/>
        </div>
    )
}

export default Contact
