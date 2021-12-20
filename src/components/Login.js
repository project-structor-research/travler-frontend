import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AuthenticationService from '../api/AuthenticationService.js';
import LoginImage from '../../public/assets/login.jpg';
import './Login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.getItem("authenticatedUser") || '',
      password: "",
      toekn: localStorage.getItem("token") || '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  inputHandler(e) {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  loginHandler() {
    AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then((response) => {
        console.log(response);
        this.setState({
          token: response.data.jwttoken
        });
        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, this.state.token)
        this.props.history.push('/travel');
      }).catch(() => {
        this.setState({
          showSuccessMessage: false,
          hasLoginFailed: true
        })
      });
  }

  render() {
    return (
      <div id="Login">
        <div id="login-section">
          <div id="login-image">
            <img src={LoginImage}></img>
            <div id="login-description">
              <h6>Travler</h6>
              <h2>Keep it special</h2>
              <p>Capture your personal memories <br></br>in a unique way.anywhere</p>
            </div>
          </div>
          <div id="login-info">
            <div id="login-title">
              <h2>Traveler</h2>
              <p>use your email account</p>
            </div>
            <div id="login-account">
              <div id="login-email">
                <input type="text" className="form-control" placeholder="Email" name="username" onChange={this.inputHandler}></input>
              </div>
              <div id="login-password">
                <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.inputHandler}>
                </input>
              </div>
              <div id="login-forgot">
                <Link to="/forgot">
                  <p>Forgot your Password?</p>
                </Link>
              </div>
              <div id="login-button">
                <button className="btn btn-info" id="btnLogin" onClick={this.loginHandler}>SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}