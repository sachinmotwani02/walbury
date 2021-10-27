import React from 'react'
import { NavLink } from 'react-router-dom';
import walbury from '../assets/walbury2.svg';

const Navbar = () => {
    return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    <img
                                        src={walbury}
                                        className=" img-fluid logo ms-5"
                                        alt="logo"
                                    />
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/about"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/services"
                                            >
                                                Services
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/about"
                                            >
                                                Connect
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    )
}

export default Navbar
