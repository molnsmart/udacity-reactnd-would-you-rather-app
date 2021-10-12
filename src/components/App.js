import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NavBar from './Common/NavBar';
import NotFound from '../pages/404'
import SignInPage from '../pages/SignInPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="container">
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <p>/defaultPage</p>
                </Route>
                <Route exact path="/signin">
                  <SignInPage history={this.props.history}></SignInPage>
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }

}

export default connect()(App);
