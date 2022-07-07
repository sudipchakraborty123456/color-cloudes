import React, { Component } from "react";

// import axios from "axios";

// const constants = require("../Constants");
// const API_URL = constants.API_URL;

import './OurCourses.scss';
class OurCourses extends Component {
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

                <div class="bubbles">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div className="row justify-content-center">
                        <h1 className="text-center mt-5 mb-3" style={{ color: "white", "font-size": "300%p" }}>OUR COURSES</h1>
                        <h5 id="white" className="p-5 text-center" style={{width:"50%"}}>Get the right training at CREATION MULTIMEDIA and prepare for a creative career in Animation, VFX, Gaming, Media and Entertainment industry.</h5>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 mb-5">
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3 ">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/Diploma in 2D Animation.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Diploma in 2D Animation</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/3d-animation.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">3D Animation Course</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/visual-effect.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Visual Effects Course</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/augmented-reality.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Diploma in Arch visualisation</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/graphic-design.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Augmented Reality Course</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/video-editing.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Graphic Design Course</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                                <div className="col-12 col-sm-6 col-mg-6 col-lg-4 text-center mt-3 mb-3">
                                    <img className="redious mt-3 mb-3 coursesImg" src={require("./Img/video-editing.jpg")} alt="Opps Sorry!" />
                                    <h5 id="white" className="mt-3 mb-3">Diploma in Video Editing</h5>
                                    <button className="readMoreButton mt-3 mb-3">Read More</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>




            </>
        );
    }
}

export default OurCourses;