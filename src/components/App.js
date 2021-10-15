import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NavBar from './Common/NavBar';
import NotFound from '../pages/404'
import SignInPage from '../pages/SignInPage';
import QuestionList from './Question/QuestionList';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import NewQuestionPage from '../pages/NewQuestionPage';

const history = createHistory();

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="container">
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/">
                  <QuestionList></QuestionList>
                </Route>
                <Route exact path="/signin">
                  <SignInPage history={this.props.history}></SignInPage>
                </Route>
                <Route exact path="/question/new">
                  <NewQuestionPage history={this.props.history}></NewQuestionPage>
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
