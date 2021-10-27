import React from 'react'
import { GrInstagram, GrYoutube } from 'react-icons/gr';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../assets/walbury2.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Footer = () => {
    return (
        <div className="footerr">
        <div className="foot-block">
            <img src={logo} alt="logo" width="140" />
            <p style={{color: '#000'}}> 
            313, Silver Sanchora Castle
RNT marg, Indore
            </p>
        </div>
        {/* <div className="foot-block">
            <h5 className="foot-head">Quick Links
            <div
                style={{
                backgroundColor: '#0286FF',
                height: '0.3rem',
                width: '4rem',
                marginTop: 10,
                }}
            ></div></h5>
            <Link activeClass="active" to="about" smooth={true} duration={500}>About</Link>
            <Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link>
        </div> */}
        <div className="foot-block">
            <h5 className="foot-head">Get In Touch
            <div
                style={{
                backgroundColor: '#0286FF',
                height: '0.3rem',
                width: '4rem',
                marginTop: 10,
                }}
            ></div></h5>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <a className="link" href="https://www.instagram.com/walburytl/"><GrInstagram size="23"/></a>
            <a className="link" style={{marginLeft: 20}} href="https://www.linkedin.com/company/walbury-technolabs/about/"><FaLinkedin size="23"/></a>
            </div>
            <a className="link" href="tel:+919827283232">+91 9827283232</a>
        </div>
    </div>
    )
}

export default Footer
