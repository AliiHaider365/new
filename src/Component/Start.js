import React, { Component } from 'react';
import Back from '../assets/img/a5d79c8.webp';
import Decription from './Decript'
import LightSpeed from 'react-reveal/LightSpeed';

export default class Home extends Component {
  render() {
    return (
      <header id="start">
        <div className="navbar-offset-top min100vh d-flex top-jumbotron pr container-fluid"
          style={{ backgroundImage: Back }}>
          <div className="row align-self-center w-100 align-items-center justify-content-center">
            <div className="mx-auto col-sm-7 col-md-7 col-9">
              <div className="timeline">
                <div className="bullet"></div>
                <a href="#work" aria-label="Go to next section"
                  className="scroll-bottom scale-hover">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 30"
                    space="preserve">
                    <path fill="#988E9F" d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4
c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1
c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z" className="st0"></path>
                  </svg> <br /> <span>SCROLL</span></a>
              </div>
              <LightSpeed left>
                <span>
                  <div className="block-reveal "><span className="block-reveal__block white"></span> <small id="first-element"
                    className="block-reveal__text section-title mb-3 pb-3">
                                Start /&gt;
                  </small></div>
                </span><br />
                <div className="block-reveal"><span className="block-reveal__block mb-0"></span>
                  <h1 className="block-reveal__text subtitle mb-0">
                    Hi, my name is <strong className="purple">Afzaal Amjad</strong><br /></h1>
                </div> <br />
                <div className="block-reveal"><span className="block-reveal__block  mb-0"></span>
                  <h1 className="block-reveal__text subtitle mt-0 ws-nowarp">
                    i <em className="serif normal">design </em> and <span className="mono fat">develop</span> <span
                      className="anim-txt">{<Decription />}</span></h1>
                </div><br />
                <div className="block-reveal"><span className="block-reveal__block white"></span>
                  <p className="color-gray mt-2 pb-3 block-reveal__text ">Let me show You...</p>
                </div>
              </LightSpeed>
            </div>
          </div> <a href="#work" aria-label="Go to next section" className="cp down-arrow"><span>→</span></a>
        </div>
      </header>
    );
  }
}
