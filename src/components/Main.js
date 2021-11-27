import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import backGround from '../../public/assets/backGround.mp4';
import './Main.scss';


export default class Main extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   message: null
    // }
  }
  render() {
    return (
      <div id="Main">
        <video muted="muted" preload="auto" autoPlay="autoplay" loop="loop" volume="0">
          <source src={backGround} type="video/mp4"/>
        </video>
        <div id="main-section">
          <div id="main-info"> 
            <h2 id="main-title">Welcome to Travler</h2>
            <h4 id="main-title-description">More Fun, More Interested</h4>
            <p>Include photos taken while traveling around the world.<br>
            </br>Record your memories.</p>
          </div>
          <Link to="/login">
            <button type="button" className="btn btn-light" id="btnJoin">Join</button>
          </Link>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // axios.get('/api/hello', { 
    //   // params: { id: 1 } 
    // })
    // .then(function(response) {
    //   this.setState({
    //     message: response.data
    //   })
    // }.bind(this))
    // .catch(function(error) { 
    //   console.log(error);
    // });
  }
}