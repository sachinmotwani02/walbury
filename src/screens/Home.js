import React from 'react'
import LaptopIcon from '../assets/img/LaptopIcon.png'
import LaptopIcon2 from '../assets/img/LaptopIcon2.png'
import PhoneIcon from '../assets/img/PhoneIcon.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/walbury2.svg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {
    return (
        <div className="container large-con">
            <Navbar bg="transparent" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img 
                            src={logo}
                            alt="Walbury Logo"
                            className="d-inline-block align-top"
                            width="99"
                            height="63"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link activeClass="active" to="about" smooth={true} duration={500}>About</Link></Nav.Link>
                        {/* <Nav.Link href="#home">Services</Nav.Link> */}
                        <Nav.Link href="#link"><Link activeClass="active" to="contact" smooth={true} duration={500}>Connect</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="floatingCircularContain animated">
                    <div className="circularContain" style={{backgroundColor: 'rgba(147,109,255,.35)'}}>
                    <img src={LaptopIcon} alt="icon" width="45px" />
                    </div>
                </div>
                <div id="icon2" className="floatingCircularContain animated2">
                    <div className="circularContain" style={{backgroundColor: 'rgba(123,162,255,.35)'}}>
                    <img src={LaptopIcon2} alt="icon" width="45px" />
                    </div>
                </div>
                <div id="icon3" className="floatingCircularContain animated3">
                    <div className="circularContain" style={{backgroundColor: 'rgba(156,235,255,.35)'}}>
                    <img src={PhoneIcon} alt="icon" width="45px" />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center con">
                    <div className="hero-text">
                        <h1>Design.Development.<br></br>Products.</h1>
                        <p className="sub">We build new, exciting and cool digital products that change the way humans look at, and understand the world.</p>
                    </div>
                </div>    
        </div>
    )
}

export default Home
