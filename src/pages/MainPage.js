import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList, } from '../utils/helpers'
import { withRouter } from "react-router";
import QuestionList from "../components/Question/QuestionList"
class MainPage extends Component {

  render() {
    return (
      <QuestionList></QuestionList>
    )
  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    users: formatUserObjectList(users),
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(MainPage));
