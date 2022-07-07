import React, { Component } from "react";
import "./home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import $ from "jquery";
import OurCourses from "./OurCourses";


import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import axios from "axios";

// const constants = require("../Constants");
// const API_URL = constants.API_URL;




class Home extends Component {
    constructor() {
        super();
        this.state = {
            isCollapseOpen: true
        };
    }

    componentDidMount() {

        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    collapes = (e) => {
        console.log(e);
        const content = document.getElementById(e)
        if (content.style.display === 'block') {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
    render() {
        const thumb = ["carasoul1.jpg", "carasoul2.jpg", "carasoul3.jpg"]
        const { isCollapseOpen } = this.state
        return (
            <>

                <Carousel className="carousel" showThumbs={false} stopOnHover={true} autoPlay={true} interval={3000} infiniteLoop={true} >
                    {thumb.map((item, index) => {
                        return (<div key={index}>
                            <img src={require("./Img/" + item)} key={index} id={index} alt="Opps Sorry!" style={{ height: "10%" }} />
                        </div>);
                    })
                    }
                </Carousel>
                <div className="container-flued">
                    <div className="row text-center">
                        <h1 className="firstHeading">Creation Multimedia</h1>
                        <p className="secoundHeading">2D/ 3D Animation Training Institute in Kolhapur.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="row justify-content-end ">
                                <div className="col-12 col-md-10 col-sm-12 col-lg-10">
                                    <div className="row quickContact shadow-lg p-3 mb-5 bg-white rounded">
                                        <div style={{ background: "#FC9928", color: "white" }}>
                                            <h1 className="m-4">Quick Contact</h1>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <label className="m-2">Name*</label>
                                            <br />
                                            <input type="text" />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <label className="m-2">Mobile*</label>
                                            <br />
                                            <input type="number" />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                            <label className="m-2">Course*</label>
                                            <br />
                                            <select>
                                                <option selected disabled>-Select a course</option>
                                                <option>2D Animation</option>
                                                <option>Vedio Editing</option>
                                                <option>3D Animation</option>
                                                <option>Visual Effects/ VFX</option>
                                                <option> Architectural Visualization</option>
                                                <option>Graphic Design</option>
                                                <option>Augmented Reality</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <button id="sendMess">Send your message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6" >
                            <p className="">Today Creation Multimedia Animation & VFX Institute Kolhapur has become one of the most reputed brand and having current strength of more than 800 students. Over the period of 15 years Creation Multimedia, Kolhapur has become a big institute. Many students have successfully completed various professional courses and are working with growing multimedia industry.

                                Creation Multimedia Animation & VFX Kolhapur Provide 2D/3D Animation, (modeling, rendering) Graphic Designing, Advanced VFX (roto, croma, paint, PF tracking) & Effects, Gaming & Multimedia. Many students have been Successfully trained and placed in reputed studios.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                            <img className="review" src={require("./Img/jd-review.jpg")} alt="Opps Sorry!" style={{}} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                            <img className="review" src={require("./Img/google-review.jpg")} alt="Opps Sorry!" style={{}} />
                        </div>
                    </div>
                    <div className="row aboutCom justify-content-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center justify-content-center">
                            <i className="fa-solid fa-book-open fa-3x"></i>
                            <div id="counter"><span className="count">20</span></div>
                            <h4>YEARS OF EXPERIENCE</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                            <i className="fa-solid fa-user-group fa-3x"></i>
                            <div id="counter"><span className="count">900</span></div>
                            <h4>STUDENTS</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                            <i className="fa-regular fa-face-smile fa-3x"></i>
                            <div id="counter"><span className="count">10</span></div>
                            <h4>EXPERT FACULTIES</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                            <i className="fa-solid fa-graduation-cap fa-3x"></i>
                            <div id="counter"><span className="count">400</span></div>
                            <h4>RECUITERS</h4>
                        </div>
                    </div>

                    <OurCourses />
                    <div className="row">
                        <div className="col-12" style={{ height: "20%", 'backgroundColor': '#333333', color: 'white', }}>
                            <div className="mt-5 mb-5 text-center" >
                                <h2 className="d-inline" style={{ fontWidth: 'bolder !important' }}>Join Creation Multimedia Today</h2>
                                <span className="ml-5">
                                    <button className="contactButton">
                                        <i className="fa fa-envelope  fa-2x" aria-hidden="true"></i>
                                        <h4 className="d-inline m-2">sudipchakraborty47@gmail.com</h4>
                                    </button>
                                </span>
                                <button className="contactButton">
                                    <i className="fa fa-phone fa-2x " aria-hidden="true"></i>
                                    <h4 className="d-inline m-2">+91-8927179792</h4>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center" style={{ backgroundColor: "#f2f2f2" }} >
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                            <div className="row justify-content-center">
                                <div className="col-9">
                                    <h1 style={{ color: '#FC9928 ', 'font-Size': '30px' }} className="mt-5 mb-2">Testimonials</h1>
                                    <div id="devider"> </div>
                                    <OwlCarousel items={1}
                                        className="owl-theme mt-3"
                                        loop
                                        nav
                                        margin={8}
                                        dots={false} >
                                        <div>
                                            <p>Goa, I am really happy to be a part of Creation Multimedia, I was interested In Multimedia courses, After searching a lot, I came to know About Creation Multimedia, Taking admission was here was my life changing day. Thanks All Team, Creation Multimedia.</p>
                                            <p className="author">Animesh Samanta</p>
                                        </div>

                                        <div>
                                            <p>Banglore, Graphic Designing & Video Editing : Personally it’s been a great learning experience for me. It’s amazing to see technology opening so many doors be it animation, Graphic Designing etc. Thank you so much for this incredible learning experience!!</p>
                                            <p className="author">Animesh Samanta</p>
                                        </div>

                                        <div>
                                            <p>Kankavli, Graphic Designing & Video Editing , In search of the best Graphics & Video editing className I joined Creation Multimedia. Now I have got a job in Dubai. I am getting ready to fly to Dubai. Thanks Team Creation Multimedia</p>
                                            <p className="author">Animesh Samanta</p>
                                        </div>

                                        <div>
                                            <p>Sawantwadi, I was searching for an animation institute in Maharashtra. I got the reference from one of my friends working in Mumbai as  a modeling artist. I joined Creation Multimedia and really got the best job in a famous studio in Maharashtra. Thanks to Creation Multimedia.</p>
                                            <p className="author">Animesh Samanta</p>
                                        </div>

                                        <div>
                                            <p>Kolhapur, VFX,  Do you want to get a perfect future in Video Editing & VFX Industry in Kolhapur ? You have only One Best Option, that is CREATION MULTIMEDIA.</p>
                                            <p className="author">Animesh Samanta</p>
                                        </div>

                                    </OwlCarousel>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                            <div className="mt-5 mb-2">

                                <h1 style={{ color: '#FC9928 ', 'font-Size': '30px' }} className="mt-5 mb-2 d-inline freQus">Frequently Asked </h1>
                                <h1 style={{ color: 'black ', 'font-Size': '30px', }} className="mt-5 mb-2 d-inline freQus">Questions</h1>
                            </div>
                            <div id="devider"> </div>



                            <div className="m-2 row">
                                <div className="col-1">
                                    <button type="button" onClick={() => this.collapes('1stCollapesContent')} className="collapsible mt-2 " ><i className="fa-solid fa-plus"></i></button>

                                </div>
                                <div className="col-11">
                                    <h5 className="d-inline" style={{ fontSize: "bolder" }}>Who can join Creation Multimedia?</h5>
                                    <div className="content" id="1stCollapesContent" style={{ display: "none" }}>
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i>Creative and passionate students who are Interested in drawing.</li>
                                            <li><i className="fa-solid fa-check"></i>Anyone who has passed 10 th/12th and who has completed or will be completing 18 years within an year after Joining the Institute). Graduate Students can join the Animation/Vfx/3d Printing Diploma Programs.</li>
                                            <li><i className="fa-solid fa-check"></i>An Inclination towards Drawing is appreciable but not Compulsory. For joining Diploma Programs in Android App Development and Augmented Reality, Graduation is Compulsory.</li>
                                            <li><i className="fa-solid fa-check"></i>Any 10 th/12th passed(who has completed or will be completing 18 Years within an Year after Joining the Institute), Graduate Student can join the Animation/Vfx/3d Printing Diploma Programs. An Inclination towards Drawing is appreciable but not Compulsory.</li>
                                            <li><i className="fa-solid fa-check"></i>For joining Diploma Programs in Android App Development and Augmented Reality, Graduation is Compulsory.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="m-2 parent row">
                                <div className="col-1">
                                    <button type="button" onClick={() => this.collapes('2stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                </div>
                                <div className="col-11">
                                    <h5 className="d-inline" style={{ 'margin-left': '20px' }}>Does Creation Multimedia Provide Job Placement Assistance?</h5>
                                    <div className="content" id="2stCollapesContent" style={{ display: "none" }}>
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i>Yes, provided the student completes his or her Assignments in given time, maintains discipline and follows rules and regulations of the Institute.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('3stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>Why to Join Creation Multimedia only?</h5>
                                <div className="content" id="3stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>Leader amongst Peers in Animation Education in Kolhapur and adjoining districts in Western Maharashtra and North Karnataka.</li>
                                        <li><i className="fa-solid fa-check"></i>Standard Infrastructure, Updated Creative and Technical Education through Industry experienced Faculties, Job Assistance, Disciplined Atmosphere and dedicated Practice area for the Students.</li>
                                        <li><i className="fa-solid fa-check"></i>CCTV Monitoring for Security Purpose of the Students.</li>
                                        <li><i className="fa-solid fa-check"></i>Co-ordination with Parents/Guardians, if any Misconduct in Behavior is found from the Student and if any flaws are observed repeatedly from Student’s end.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('4stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>What is the fee Structure ?</h5>
                                <div className="content" id="4stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>For more details Contact : 9225807779</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('5stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>What Are the modes of Payments ?</h5>
                                <div className="content" id="5stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>One Time Payment with special discount</li>
                                        <li><i className="fa-solid fa-check"></i>Easy installment payment</li>
                                        <li><i className="fa-solid fa-check"></i>Partial payment</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('6stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>Do we provide Internship ?</h5>
                                <div className="content" id="6stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>Internship is mandatory after completing the course</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('7stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>What Certificate do we provide ?</h5>
                                <div className="content" id="7stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>Course completion Certificate</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-2 parent">
                                <button type="button" onClick={() => this.collapes('8stCollapesContent')} className="collapsible mt-2"><i className="fa-solid fa-plus"></i></button>
                                <h5 className="d-inline" style={{ 'margin-left': '20px' }}>What are the courses Duration ?</h5>
                                <div className="content" id="8stCollapesContent" style={{ display: "none" }}>
                                    <ul>
                                        <li><i className="fa-solid fa-check"></i>Right from 1 month short term courses to 1 year. We have multiple career oriented courses</li>
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </>
        );
    }
}

export default Home;
