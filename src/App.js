import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';

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
            <Redirect path="*" to="/" />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}