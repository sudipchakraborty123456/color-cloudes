import React, { Component } from "react";

import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import { Spin as Hamburger } from 'hamburger-react';
// import axios from "axios";

// const constants = require("../Constants");
// const API_URL = constants.API_URL;

import "./Header.css"


class Header extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }


    render() {

        return (
            <>
                <div className=".container-fluid header">
                    <div id="mainDiv" className="row justify-content-center">
                        
                            
                            <div className="col-md-6">
                            <button className="btn btn-dark">Download Brochure</button>
                            <span className="">
                                <h6 className="m-3 d-inline" >Tuesday to Sunday : 10am - 07pm (Monday weekly off)</h6>
                            </span>
                            </div>
                            <span className="col-md-4">
                                <img src={require('./Images/icons8-facebook-48.png')} />
                                <img src={require('./Images/icons8-instagram-48.png')} />
                                <img src={require('./Images/icons8-linkedin-48.png')} />
                                <img src={require('./Images/icons8-whatsapp-48 (1).png')} />
                                <img src={require('./Images/icons8-youtube-48.png')} />
                                {/* <a id="google_translate_element" style={{ display: "inline-block" }}></a> */}
                            </span>
                           
                        

                    </div>
                </div>
                <div className="container">
                    <div className="headerDiv row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-none d-md-block text-center">
                            <i className="fa fa-envelope  fa-2x " aria-hidden="true"></i>
                            <h6>E-Mail us</h6>
                            <h5>sudipchakraborty47@gmail.com</h5>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                            <img id="logo" src={require('./Images/logo.jpg')} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <h6>Call Us</h6>
                            <h5>+91-8927179792</h5>
                        </div>
                    </div>
                </div>
                <Navbar className="container navBar" collapseOnSelect expand="lg" variant="dark" sticky="top" >



                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navBarToggler" >
                        <a>
                            <Hamburger />
                        </a>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ width: '100%' }}>
                        <Nav className="mr-auto" style={{ width: '100%' }}>
                            {/* onClick={this.logoClick} */}
                            <Nav.Link href="Home" className="pages" > Home</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="aboutUs" className="pages">About Us</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <NavDropdown title="Coureses" id="collasible-nav-dropdown" className="pages" >
                                <NavDropdown.Item href="#" >Deploma in 2d Animation</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Deploma in 3d Animation</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Deploma in Visual Effect / VFX</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Architectural Visualization </NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Augmented Reality </NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Graphic Design</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Video Editing</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="#" className="pages" > Recruiters</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="#" className="pages">Placements</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" style={{ color: "white" }} />
                            <Nav.Link href="#" className="pages" > Student Work</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="#" className="pages" > nfrastructure</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="#" className="pages" > Events</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <NavDropdown title="Locations" id="collasible-nav-dropdown" className="pages">
                                <NavDropdown.Item href="#" >Kolhapur</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Deploma in 3d Animation</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Deploma in Visual Effect / VFX</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Architectural Visualization </NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Augmented Reality </NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Graphic Design</NavDropdown.Item>
                                <NavDropdown.Divider className="dropdown-deviders" />
                                <NavDropdown.Item href="#" >Diploma in Video Editing</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            <Nav.Link href="#" className="pages" > Contact</Nav.Link>
                            <NavDropdown.Divider className="dropdown-deviders" />
                            {/* {
                                        isLoggedIn === false
                                            ?
                                            <Nav.Link href="#" className="pages" onClick={() => this.loginClicked()}>LogIn</Nav.Link>
                                            :


                                            <NavDropdown title={user.firstName} id="collasible-nav-dropdown" className="pages">
                                                <NavDropdown.Item href="#" onClick={() => this.myProfileClicked()} >My Profile</NavDropdown.Item>
                                                <NavDropdown.Divider className="dropdown-deviders" />
                                                <NavDropdown.Item onClick={() => this.bookingDetailsClicked()}>Booking Details</NavDropdown.Item>
                                                <NavDropdown.Divider className="dropdown-deviders" />
                                                <NavDropdown.Item href="#" onClick={() => this.logout()}>LogOut</NavDropdown.Item>

                                            </NavDropdown>
                                    } */}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;