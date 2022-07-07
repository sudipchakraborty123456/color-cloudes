import React, { Component } from "react";

// import axios from "axios";

// const constants = require("../Constants");
// const API_URL = constants.API_URL;

import "./aboutus.css"
import Gallary from "../Gallary/Gallary";
class About_Us extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }


    render() {
        const Images = ["t-creation-multimedia-infrastructure-18.jpg", "t-creation-multimedia-infrastructure-19.jpg", "t-creation-multimedia-infrastructure-22.jpg", "t-creation-multimedia-infrastructure-23.jpg", "t-creation-multimedia-infrastructure-25.jpg", "t-creation-multimedia-infrastructure-26.jpg", "t-creation-multimedia-infrastructure-28.jpg", "t-creation-multimedia-infrastructure-29.jpg", "t-creation-multimedia-infrastructure-30.jpg", "t-creation-multimedia-infrastructure-31.jpg", "t-creation-multimedia-infrastructure-32.jpg", "t-creation-multimedia-infrastructure-33.jpg"]

        return (

            <>

                <div className="container-fluied aboutuscontainer">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="aboutusheadingdiv p-5">
                                <h1 className="aboutusheading"> About Us</h1>
                                <div className="linkdiv">
                                    <p className="d-inline linkhome" href="Home">Home</p>
                                    <p className="d-inline m-3 linkaboutus" href="aboutUs">About Us</p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="mt-5 ">
                                    <h1 className="d-inline creation">CREATION</h1>
                                    <h1 className="d-inline multimedia">MULTIMEDIA</h1>
                                    <h4 className="">3D Animation and Visual Effects Training Institute in Kolhapur.</h4>
                                </div>
                            </div>
                            <div className="devider"></div>
                        </div>
                    </div>
                    <div className="row m-5 justify-content-center">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-jystify">
                                    <p>Creation Multimedia is a Premium 3D Animation and Vfx Education Institute located in Kolhapur, Maharashtra. With an experience of 15 Years in this field and its expertise in delivering employable candidates to the Animation Production Industry, Creation Multimedia has become the leader in Kolhapur, Sangli, Ratnagiri, Sindhudurg and Belgaum.
                                    </p><p>
                                        Creation Multimedia has got Modern Infrastructure and Technology in place for providing updated Education to its Students. Along with the Software(s) Education it develops the most essential thing required for a student to grow as Professional, i.e., Discipline and Patience.
                                    </p><p>
                                        Presently, it is imparting Diploma in 3D Animation, with all the Stages of Animation Pipeline, which cover 3D Modeling, Texturing, Rigging, Animation, Lighting and Rendering. Diploma in Vfx is the other popular Course.
                                    </p><p>
                                        Photoshop, Corel Draw, Graphic Designing, Interior Designing, VRay Lighting are provided by the Institute.
                                    </p><p>
                                        The courses soon to be launched by this Academic Year are Diploma in 3D Printing, Mobile App. Development, Virtual Reality and Augmented Reality.
                                    </p><p>
                                        Creation Multimedia animation, Kolhapur Provide Placement assistance to its Students, based on their Creative and Technical Performance, discipline and behavior throughout the duration of the Course.</p>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                                    <div id="vedio">
                                        <iframe src="https://www.youtube.com/embed/Uel_JprRk2I" title="Komt Een Man Bij De Dokter | Waar woon jij? 🤔" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="mt-5 ">
                                <h1 className="d-inline multimedia">OUR </h1>
                                <h1 className="d-inline  creation"> INFRASTRUCTURE</h1>
                            </div>
                            <div className="devider mb-5 mt-2"></div>
                        </div>

                    </div>
                    <div className="row " style={{padding:"0 20% 10% 20%"}}>
                            {
                                Images.map((item,index)=>{
                                    return(
                                      <Gallary imgsrc={require(`../Gallary/img/${item}`)} key={index}  />
                                    )
                                })
                            }
                    </div>
                </div>
            </>
        );
    }
}

export default About_Us;