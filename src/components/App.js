import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import NavBar from './Common/NavBar';
import NotFoundPage from '../pages/NotFoundPage'
import SignInPage from '../pages/SignInPage';
import MainPage from '../pages/MainPage';
import NewQuestionPage from '../pages/NewQuestionPage';
import { Fragment } from 'react';
import LeaderboardPage from '../pages/LeaderboardPage';



const history = createHistory();

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <MainPage></MainPage>
              </Route>
              <Route exact path="/signin">
                <SignInPage history={this.props.history}></SignInPage>
              </Route>
              <Route exact path="/question/new">
                <NewQuestionPage history={this.props.history}></NewQuestionPage>
              </Route>
              <Route exact path="/leaderboard">
                <LeaderboardPage></LeaderboardPage>
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }

}

export default connect()(App);
