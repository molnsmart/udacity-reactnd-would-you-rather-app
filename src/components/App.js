import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import history from "./history";
import NavBar from './Common/NavBar';
import NotFoundPage from '../pages/NotFoundPage'
import SignInPage from '../pages/SignInPage';
import MainPage from '../pages/MainPage';
import AddQuestionPage from '../pages/AddQuestionPage';
import QuestionPage from '../pages/QuestionPage';
import { Fragment } from 'react';
import LeaderboardPage from '../pages/LeaderboardPage';




class App extends Component {
  isAuthenticated() {
    if (this.props.authedUser !== null) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    if (!this.isAuthenticated()) {
      return (
        <SignInPage />
      )
    }
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
              <Route exact path="/add">
                <AddQuestionPage history={this.props.history}></AddQuestionPage>
              </Route>
              <Route path="/questions/:questionId">
                <QuestionPage history={this.props.history}></QuestionPage>
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
    )
  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
