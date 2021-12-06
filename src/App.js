import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Travel from './components/Travel';
import LoginSecurity from './util/LoginSecurity';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
      <div id="App">
          <Switch>
            <Route exact path="/" render={() => <Main /> }></Route>
            <Route path="/login" render={() => <Login /> }></Route>
            <Route path="/forgot" render={() => <Forgot />}></Route>
            {/* <Route path="/travel" render={() => LoginSecurity.isLogin() ? <Travel /> : <Redirect to="/login" />}/> */}
            <Route path="/travel" render={() => <Travel />}/>
            <Redirect path="*" to="/" />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}