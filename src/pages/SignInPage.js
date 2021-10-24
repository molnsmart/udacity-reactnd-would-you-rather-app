import React from 'react'
import { connect } from 'react-redux'
import { formatUserList } from '../utils/userHelper'
import { withRouter } from "react-router";
import LogOut from "../components/User/Logout"
import SignIn from '../components/User/SignIn'

function isAuthenticated(props) {
  if (props.authedUser !== null) {
    return true;
  }
  return false;
}
function getUser(id, props) {
  return props.users.filter(u => u.id === id)[0]
}

function SignInPage(props) {
  if (isAuthenticated(props)) {
    return (
      <LogOut User={getUser(props.authedUser, props)} Dispatch={props.dispatch} History={props.history}></LogOut>
    )
  }
  if (props.users.length > 0) {
    return (
      <SignIn User={getUser(props.authedUser, props)} UserList={props.users} Dispatch={props.dispatch}></SignIn>
    )
  } else {
    return null
  }

}

function mapStateToProps({ users, authedUser }) {
  return {
    users: formatUserList(users),
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(SignInPage));
