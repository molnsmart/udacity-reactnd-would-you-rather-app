import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserList } from '../utils/userHelper'
import { withRouter } from "react-router";
import LogOut from "../components/User/Logout"
import SignIn from '../components/User/SignIn'
class SignInPage extends Component {

  isAuthenticated() {
    if (this.props.authedUser !== null) {
      return true;
    }
    return false;
  }
  getUser(id) {
    return this.props.users.filter(u => u.id === id)[0]
  }

  render() {
    if (this.isAuthenticated()) {
      console.log(this.props)
      return (
        <LogOut User={this.getUser(this.props.authedUser)} Dispatch={this.props.dispatch} History={this.props.history}></LogOut>
      )
    }
    if (this.props.users.length > 0) {
      return (
        <SignIn User={this.getUser(this.props.authedUser)} UserList={this.props.users} Dispatch={this.props.dispatch}></SignIn>
      )
    } else {
      return null
    }

  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    users: formatUserList(users),
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(SignInPage));
