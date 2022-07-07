
import { React, Component } from 'react';
import "./gallary.css"

import Modal from 'react-modal';
import HandleOutsideClick from "react-outside-click-event";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '0',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    width: '50%',
    zIndex: "100",
    padding: '0 !important'
  }
};

class Gallary extends Component {
  constructor() {
    super();
    this.state = {
      isimagesmodalopen: false
    };
  }

  componentDidMount() {

  }
  openimg = () => {

    this.setState({
      isimagesmodalopen: true
    })
  }
  closing = () => {
    this.setState({
      isimagesmodalopen: false
    })
  }

  render() {
    const { imgsrc, key } = this.props
    const { isimagesmodalopen } = this.state
    return (
      <>

        <div className='col-12 col-sm-6 col-md-4 col-lg-4 imagescontainer'>
          <img src={imgsrc} alt="Oops! Sorry" className='image' height={"90%"} width={"90%"} />
          <div class="middle">
            <div class="icon" onClick={() => this.openimg()}><i className="fa fa-plus" aria-hidden="true" key={key}></i></div>
          </div>
          <HandleOutsideClick
            onOutsideClick={()=>this.closing()}
          >
            <Modal isOpen={isimagesmodalopen} style={customStyles} >
              <img src={imgsrc} alt="Oops! Sorry" height={"100%"} width={"100%"} />
              {/* <div className='d-inline'>
          <i class="fa fa-window-close closeIcon" aria-hidden="true"  onClick={()=> this.closing()}></i>
          </div> */}
            </Modal>
          </HandleOutsideClick>
        </div>

      </>
    );
  }
}

export default Gallary;