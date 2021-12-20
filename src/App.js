import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticatedRoute from './route/AuthenticatedRoute';

import Main from './components/Main';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Travel from './components/Travel';


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
            <Route path="/login" component = {withRouter(Login) }></Route>
            <Route path="/forgot" render={() => <Forgot />}></Route>
            <AuthenticatedRoute path="/travel" render={() => <Travel />}/>
            <Redirect path="*" to="/" />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}