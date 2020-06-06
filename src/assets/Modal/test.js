import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Mian extends Component {

    state = {
        count: 1,
        name: "",
        email: "",
        intersted: "",
        message: "",
        error: false,


    }
    submitForm = (e) => {

        const { name, email, message, intersted } = this.state;


        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                message: message,
                intersted: intersted
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                console.log("Message sent");
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
        this.setState({
            name: '',
            email: '',
            message: '',
            intersted: ''
        });
        console.log(this.setState);
    }
    counter = () => {
        switch (this.state.count) {
            case 1:
                {
                    let check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    if (this.state.email === "" || !check.test(this.state.email)) {
                        let tag1 = document.getElementById("erroremail")
                        tag1.classList.add('error')
                        setTimeout(() => {
                            let tag1 = document.getElementById("erroremail")
                            tag1.classList.remove('error')
                        }, 1000);

                    } else {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }
                    break;
                }
            case 2:
                {
                    if (this.state.intersted === "") {
                        let tag1 = document.getElementById("errorInters")
                        tag1.classList.add('error')
                        setTimeout(() => {
                            let tag1 = document.getElementById("errorInters")
                            tag1.classList.remove('error')
                        }, 1000);

                    } else {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }
                    break;
                }
            case 3:
                {
                    if (this.state.message === "") {
                        let tag1 = document.getElementById("errormsg")
                        tag1.classList.add('error')
                        setTimeout(() => {
                            let tag1 = document.getElementById("errormsg")
                            tag1.classList.remove('error')
                        }, 1000);

                    } else {
                        this.setState({
                            count: this.state.count + 1,
                        });


                    }
                    break;
                }

            case 4:
                {
                    this.submitForm()
                    this.setState({
                        count: this.state.count + 1,
                    });
                    break
                }

            default:
                {
                    this.setState({
                        count: this.state.count + 1,
                    });
                    break;
                }

        }


    }
    render() {
        return (
            <>
                <div className="modal-dialog modal-full modal-dialog-centered">
                    <div tabindex="-1" role="document" aria-labelledby="modallg___BV_modal_header_"
                        aria-describedby="modallg___BV_modal_body_" className="modal-content">
                        <header id="modallg___BV_modal_header_" className="modal-header">
                            <h5 className="modal-title">Get in touch!</h5><Link to={'/'} onClick={() => { }} type="button" aria-label="Close" className="close">×</Link>
                        </header>

                        <div id="modallg___BV_modal_body_" className="modal-body">
                            <form action="#" className="mian-form"><span>
                                {this.state.count === 1 &&
                                    <div className='show1'><span className="mt-3">Hi, my name is</span> <span className="  input input--ruri el-wrapper"><input
                                        onChange={(evt) => { this.setState({ name: evt.target.value }); }}
                                        name="uname" type="text" className="input__field input__field--ruri input-email " /> <label
                                            for="uname" className="input__label input__label--ruri"><span
                                                className="input__label-content input__label-content--ruri">your
                                      name</span></label></span> <span className="mt-3">and my email is</span> <span
                                            className="input input--ruri el-wrapper animated " id='erroremail' style={{ maxWidth: " 200px" }}><input name="email"
                                                onChange={(evt) => { this.setState({ email: evt.target.value }); }}
                                                type="email" required="required" className="input__field input__field--ruri input-email  " />
                                            <label for="uname" className="input__label input__label--ruri"><span
                                                className="input__label-content input__label-content--ruri">your
                                      email</span></label></span></div>}
                                {this.state.count === 2 &&
                                    <div ><span className="mt-3">I'm interested in </span> <span id="errorInters"
                                        className="input input--ruri el-wrapper animated" style={{ maxWidth: " 300px" }}><input
                                            onChange={(evt) => { this.setState({ intersted: evt.target.value }); }}
                                            name="interest" type="text" className="input__field input__field--ruri input-email" /> <label
                                                for="uname" className="input__label input__label--ruri"><span
                                                    className="input__label-content input__label-content--ruri">Website</span></label></span>
                                    </div>}
                                {this.state.count === 3 &&
                                    <div ><span className="mt-3">Your message: </span> <span id="errormsg"
                                        className="input input--ruri el-wrapper animated" style={{ maxWidth: " 300px" }}><input name="msg"
                                            onChange={(evt) => { this.setState({ message: evt.target.value }); }}
                                            type="text" className="input__field input__field--ruri input-email" /> <label for="uname"
                                                className="input__label input__label--ruri"><span
                                                    className="input__label-content input__label-content--ruri">hi,
                                      Afzaal</span></label></span></div>}
                                {this.state.count === 4 &&
                                    <div >
                                        sending...
                      </div>}
                                {this.state.count === 5 &&
                                    <div >
                                        Done! Will come back 2 U shortly :)
                      </div>}
                            </span></form>
                        </div>


                        {this.state.count !== 5 ? <footer id="modallg___BV_modal_footer_" className="modal-footer"><span className="step pull-left mono mr-3">
                            STEP {this.state.count}/4
              </span> <button onClick={() => { this.counter() }} aria-label="Submit" className="btn btn-primary mr-3 ml-3">NEXT →<div className="btn2"></div>
                            </button>
                        </footer> :
                            <footer id="modallg___BV_modal_footer_" className="modal-footer">
                                <Link to={'./'} onClick={() => {
                                    this.setState({ count: 0, })
                                }} aria-label="Submit" className="btn btn-primary mr-3 ml-3">Close<div className="btn2"></div>
                                </Link>
                            </footer>}


                    </div>
                </div>
            </>
        );
    }
}



