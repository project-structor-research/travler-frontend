import React from 'react';
import axios from 'axios';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }
  render() {
    return (
      <div id="Travel">
        <h2>여행화면</h2>
      </div>
    );
  }
  
  componentDidMount() {
    axios.get('/api/hello', { 
      params: { 
        email: this.state.email,
        password: this.state.password
      } 
    })
    .then(function(response) {
      this.setState({
        message: response.data
      })
    }.bind(this))
    .catch(function(error) { 
      console.log(error);
    });
  }
}