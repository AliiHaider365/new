import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    state = {
        username: '',
        password: '',
    }

    authentication() {

        

        if ( this.state.username === "" ) {
            let tag1 = document.getElementById("errorname")
            tag1.classList.add('error')
            setTimeout(() => {
                let tag1 = document.getElementById("errorname")
                tag1.classList.remove('error')
            }, 1000);

        } else if(this.state.password === "") {
            let tag1 = document.getElementById("errorpass")
            tag1.classList.add('error')
            setTimeout(() => {
                let tag1 = document.getElementById("errorpass")
                tag1.classList.remove('error')
            }, 1000);
        }else {
            
            console.log(this.state);
        }
        
    }

    render() {
        return (
            <div className="modal-dialog modal-full modal-dialog-centered">
                <div  className="modal-content">
                    <header id="modallg___BV_modal_header_" className="modal-header">
                        <h5 className="modal-title">Log In!</h5><Link to={'/'} onClick={() => { }} type="button" className="close">×</Link>
                    </header>

                    <div id="modallg___BV_modal_body_" className="modal-body">
                        <form action="#" className="mian-form" style={{ overflow: 'unset', padding: '0px', height: 'auto' }} >
                            <span>
                                <div className='show1' style={{ display: 'inline-block', padding: '0px', }}> <span style={{ display: 'block', marginTop: '0px', maxWidth: " 200px" }} className="  input input--ruri el-wrapper animated" id="errorname" ><input
                                    onChange={(evt) => { this.setState({ username: evt.target.value }); }}
                                    name="uname" type="text" className="input__field input__field--ruri input-email " /> <label
                                       className="input__label input__label--ruri"><span
                                            className="input__label-content input__label-content--ruri">your
                          Username</span></label></span> <span
                                        className="input input--ruri el-wrapper animated " id='errorpass' style={{ maxWidth: " 200px", display: 'block', marginTop: '70px', }}><input name="email"
                                            onChange={(evt) => { this.setState({ password: evt.target.value }); }}
                                            type="email" required="required" className="input__field input__field--ruri input-email  " />
                                        <label  className="input__label input__label--ruri"><span
                                            className="input__label-content input__label-content--ruri">your
                          password</span></label></span>
                                    <a className="btn btn-primary"  onClick={()=>{this.authentication()}} style={{ marginLeft: '40px' }} href="#">Log In <div className="btn2"></div></a>

                                </div>
                            </span>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
