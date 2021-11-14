import React from 'react';
import { Link } from 'react-router-dom';

import LoginImage from '../../public/assets/login.jpg';
import './Login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    console.log("qwe");
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
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div id="login-email">
                <input type="text" className="form-control" placeholder="Email"></input>
              </div>
              <div id="login-password">
                <input type="password" className="form-control" placeholder="Password"></input>
              </div>
              <div id="login-forgot">
                <Link to="/forgot">
                  <p>Forgot your Password?</p>
                </Link>
              </div>
              <div id="login-button">
                <button type="submit" className="btn btn-info" id="btnLogin">SIGN IN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}