import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { formatQuestionList, findQuestion } from '../utils/questionHelper'
import Summary from '../components/Question/Summary';
import Answer from '../components/Question/Answer';
import { formatUserList, getUser } from '../utils/userHelper'



function questionsLoaded(props) {
  if (props.questions !== undefined) {
    return true;
  }
  return false;
}

function userHasAnswered(question, props) {
  if (question.optionTwo.votes.includes(props.authedUser) || question.optionOne.votes.includes(props.authedUser)) {
    return true
  }
  return false
}

function QuestionPage(props) {
  if (questionsLoaded(props)) {
    let question = findQuestion(props.questions, props.match.params.questionId)
    if (question !== undefined) {
      let user = getUser(props.users, props.authedUser)

      if (userHasAnswered(question, props)) {
        return (
          <Summary Question={question} User={user}></Summary>
        )
      } else {
        return (
          <Answer User={user} Question={question} Dispatch={props.dispatch} AuthedUser={props.authedUser}></Answer >
        )
      }
    } else {
      props.history.push("/notfound");
    }
  } else {
    props.history.push("/notfound");
  }
  return null
}


function mapStateToProps({ questions, authedUser, users }) {
  return {
    authedUser: authedUser,
    users: formatUserList(users),
    questions: formatQuestionList(questions)
  }
}
export default withRouter(connect(mapStateToProps)(QuestionPage));
