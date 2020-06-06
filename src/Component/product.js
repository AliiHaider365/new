import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'


export default class componentName extends Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".project-box"));
  }
  render() {
    
    return (
       < div id="info"
        className={this.props.styles}>
  <Link style={{color: "#f9f9f9" }} to={`/work/${this.props.path}`}  >
        <div
          aria-label="NationalcommintbrGeographiccommintbrLearning" data-tilt=""
        data-tilt-gyroscope="false" data-tilt-scale="1.05" data-tilt-speed="200" data-tilt-glare="true"
        data-tilt-max-glare="0.2" data-tilt-perspective="700" data-hover="" className="project-box h "
                      style={{ marginTop:'80px',marginLeft:'130px'}}
                  >
        <div className="spinner-border-wrp"><span role="status" className="spinner-border"><span
              className="sr-only">Spinning</span></span></div>
        <div className="block-reveal projects block-reveal--active"><span
              className="block-reveal__block white"></span> <span className="block-reveal__text">
              <div className="project-image">
              <img className="workImg" alt="icon" src={this.props.thumbnail} />
            </div>
          </span></div>
         
        <div className="project-meta">
          <div className="block-reveal projects block-reveal--active"><span
              className="block-reveal__block white"></span> <span
                  className="block-reveal__text">{this.props.Info}</span></div>
          <div className="divider"></div>
          <div className="project-nav block-reveal block-reveal--active"><span
              className="block-reveal__block"></span> <span className="block-reveal__text">
                  0{this.props.index}<br /> <span className="arr">→</span></span></div>
        </div>
      </div>
    </Link>  
    </div>
    );
  }
}
