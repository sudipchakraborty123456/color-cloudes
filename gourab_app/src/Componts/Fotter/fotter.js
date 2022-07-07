import { Component } from "react";


class Fotter extends Component {
    constructor() {
        super();
        this.state = {
            isCollapseOpen: true
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <>
                <div className="container-fluid ">
                    <div className="row fotter justify-control-center pb-5" style={{    backgroundColor: '#f7faff',color: 'rgb(82 62 62)',paddingLeft: '10%'}}>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 fotter_contact mt-5  ">
                            <img src={require("../header/Images/logo.jpg" )} alt="sorry"  className="fotter-logo" height={"150px"} width={"150px"} />
                            <h5 className="mt-3 mb-3">Creation Multimedia Animation and Vfx</h5>
                            <p>334, Trade Centre, 3rd Floor, Kolhapur Station Rd, New Shahupuri, Kolhapur, Maharashtra 416001</p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i>+91-9225807779</p>
                            <p><i className="fa fa-envelope  " aria-hidden="true"></i> creationmultimedia3d@gmail.com</p>
                            <p><i class="fa fa-globe" aria-hidden="true"></i> www.creationmultimedia.net</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2   col-lg-2 mt-5">
                            <h3>Useful Links</h3>
                            <div id="devider" className="mt-3 mb-3"> </div>
                            <ul className="mt-4">
                                <li className="mb-2 ">Home</li>
                                <li className="mb-2 ">About Us</li>
                                <li className="mb-2 ">Recruiters</li>
                                <li className="mb-2 ">Placements</li>
                                <li className="mb-2 ">Student Works</li>
                                <li className="mb-2 ">Contact</li>
                                <li className="mb-2 ">Student Feedback</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-5">
                            <h3>Our Courses</h3>
                            <div id="devider" className="mt-3 mb-3"> </div>
                            <ul className="mt-4">
                                <li className="mb-2 ">Diploma in 2D Animation</li>
                                <li className="mb-2 ">Diploma in 3D Animation</li>
                                <li className="mb-2 ">Diploma in Visual Effects/ VFX</li>
                                <li className="mb-2 ">Diploma in Architectural Visualization</li>
                                <li className="mb-2 ">Diploma in Augmented Reality</li>
                                <li className="mb-2 ">Diploma in Graphic Designing</li>
                                <li className="mb-2 ">Diploma in Video Editing</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 mt-5">
                                <h3> Facebook</h3>
                                <div id="devider" className="mt-3 mb-3"></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Fotter;