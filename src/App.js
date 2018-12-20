import React, { Component } from 'react';
import { Router , Route, Switch, Redirect} from 'react-router-dom';
import history from './config/history';
import LoginComponent from './components/login';
import MapComponent from './components/map';


class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/map" component={MapComponent} />
              <Redirect to="/" />
          </Switch>
      </Router>
    );
  }
}

export default App;
