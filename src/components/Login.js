import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import LoginImage from '../../public/assets/login.jpg';
import './Login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  formHandler(e) {
    e.preventDefault();
    axios.get('/api/hello', { 
      params: { 
        email: this.state.email,
        password: this.state.password
      } 
    })
    .then(function(response) {
      console.log(response);
    }.bind(this))
    .catch(function(error) { 
      console.log(error);
    });
  }

  inputHandler(e) {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name] : e.target.value
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
            <form 
              onSubmit={this.formHandler}
              action="/api/hello" 
              method="GET">
              <div id="login-email">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Email"
                  name="email"
                  onChange={this.inputHandler}>
                </input>
              </div>
              <div id="login-password">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password"
                  name="password"
                  onChange={this.inputFormHandler}>
                </input>
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