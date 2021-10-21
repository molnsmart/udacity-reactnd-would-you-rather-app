import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { findQuestion } from '../utils/helpers'
import Summary from '../components/Question/Summary';
import { getUser } from '../utils/helpers'
import Answer from '../components/Question/Answer';

class QuestionPage extends Component {


  questionsLoaded() {
    if (this.props.questions !== undefined) {
      return true;
    }
    return false;
  }

  userHasAnswered(question) {
    if (question.optionTwo.votes.includes(this.props.authedUser) || question.optionOne.votes.includes(this.props.authedUser)) {
      return true
    }
    return false
  }

  render() {
    if (this.questionsLoaded()) {
      let question = findQuestion(this.props.questions, this.props.match.params.questionId)
      let user = getUser(this.props.users, this.props.authedUser)
      if (question !== undefined) {
        if (this.userHasAnswered(question)) {
          return (
            <Summary Question={question} User={user}></Summary>
          )
        } else {
          return (
            <Answer User={user} Question={question} Dispatch={this.props.dispatch} AuthedUser={this.props.authedUser}></Answer >
          )
        }
      } else {
        this.props.history.push("/notfound");
      }
    } else {
      this.props.history.push("/notfound");
    }
    return null
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users,
    questions: questions
  }
}
export default withRouter(connect(mapStateToProps)(QuestionPage));
