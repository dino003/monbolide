import React, { Component } from 'react'

export default class LoginModal extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-body">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 m-auto">
                            <div className="login-page-content">
                                <div className="login-form">
                                    <h3>Bienvenue!</h3>
                                    <form action="index.html">
                                        <div className="username">
                                            <input type="text" placeholder="Email or Username" />
                                        </div>
                                        <div className="password">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="log-btn">
                                            <button type="submit"><i className="fa fa-sign-in"></i> Log In</button>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="login-other">
                                    <span className="or">or</span>
                                    <a href="#" className="login-with-btn facebook"><i className="fa fa-facebook"></i> Login With Facebook</a>
                                    <a href="#" className="login-with-btn google"><i className="fa fa-google"></i> Login With Google</a>
                                </div>
                                <div className="create-ac">
                                    <p>Don't have an account? <a href="register.html">Sign Up</a></p>
                                </div>
                                <div className="login-menu">
                                    <a href="about.html">About</a>
                                    <span>|</span>
                                    <a href="contact.html">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
