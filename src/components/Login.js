import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import LoginImage from '../../public/assets/login.jpg';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({email, password});
  });

  const getLoginInfo = async() => {
    await axios.get('/api/hello', { 
      params: { 
        email: email,
        password: password
      } 
    })
    .then(response => {
      console.log(response);
      // history.push("/travel");
    });
  }

  const onChangeEmail = e => {
    setEmail(e.target.value);
  }

  const onChangePassword = e => {
    setPassword(e.target.value);
  }

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
              <input type="text" className="form-control" placeholder="Email" name="email" onChange={onChangeEmail}></input>
            </div>
            <div id="login-password">
              <input type="password" className="form-control" placeholder="Password" name="password" onChange={onChangePassword}>
              </input>
            </div>
            <div id="login-forgot">
              <Link to="/forgot">
                <p>Forgot your Password?</p>
              </Link>
            </div>
            <div id="login-button">
              <button className="btn btn-info" id="btnLogin" onClick={getLoginInfo}>SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;