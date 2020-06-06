import React, { Component } from 'react';
import $ from 'jquery'
import Logo from '../logo'

export default class Nav extends Component {
  state = {
    show:false,
  
  } 
  componentDidMount() {
    $(document).ready(function() {
  
      var scrollLink = $('.scroll');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 500 );
      });
      
      // // Active link switching
      // $(window).scroll(function() {
      //   var scrollbarLocation = $(this).scrollTop();
        
      //   scrollLink.each(function() {
          
      //     var sectionOffset = $(this.hash).offset().top - 90;
      //       // console.log(sectionOffset);
      //       console.log(this.hash);
            
      //     if ( sectionOffset <= scrollbarLocation ) {
      //       $(this).parent().addClass('active');
      //       $(this).parent().siblings().removeClass('active');
      //     }
      //   })
        
      // })
      
    })
  } 
  render() {
    return (
      <div>
        <div className="curtain">
              <div className="curtain-inner"></div>
            </div>
        <nav id="main-nav" className="navbar navbar-dark fixed-top navbar-expand-md"><button type="button"
          aria-label="Toggle navigation" aria-controls="nav_collapse" aria-expanded="true" onClick={() => {
            this.setState({
                show: !this.state.show,
            })
          }}
          className="navbar-toggler"><span className="navbar-toggler-icon"></span></button> <a aria-label="Yasio"
            href="#start" target="_self" className="navbar-brand logoinfo">
            {<Logo />}
          </a>
          <div id="nav_collapse" className={this.state.show ? "navbar-collapse collapse show" : "navbar-collapse collapse hide"  }
            // style={{ display: 'none' }}
            >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#start" target="_self" className="nav-link scroll ">Start
                    <span>/&gt;</span></a></li>
              <li className="nav-item"><a href="#work" target="_self" className="nav-link scroll">Work <span>/&gt;</span></a></li>
              <li className="nav-item"><a href="#lab" target="_self" className="nav-link scroll">Lab <span>/&gt;</span></a></li>
              <li className="nav-item"><a href="#about" target="_self" className="nav-link scroll">About <span>/&gt;</span></a></li>
              <li className="nav-item">
                <a href="#contact" target="_self" className="nav-link scroll">Contact <span>/&gt;</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
