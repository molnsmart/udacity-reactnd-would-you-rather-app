import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList, setUserIdLocalStorage, } from '../utils/helpers'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from "react-router";
import LogOut from "../components/User/Logout"
class SignInPage extends Component {
  state = {
    selectedUserId: null,
    userIsSelected: false,
  }

  selectUser = (e, id) => {
    this.setState(
      {
        selectedUserId: id,
        userIsSelected: true
      }
    )
  }

  authenticateUserHandler = (id) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
    setUserIdLocalStorage(id)
    this.props.history.push("/");
  }

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
      return (
        <LogOut User={this.getUser(this.props.authedUser)} Dispatch={this.props.dispatch}></LogOut>
      )
    }
    if (this.props.users.length > 0) {
      return (
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6 pb-5">
            <div className="card text-center">
              <img className="signin-image mx-auto d-block mt-5" src="https://mailsignature01.blob.core.windows.net/mailsignature/molnsmart-lg.png" alt="Molnsmart Company Logo"></img>
              <div className="card-body">
                {this.state.userIsSelected === true
                  ? <button type="button" className="btn btn-success w-100" onClick={(e) => this.authenticateUserHandler(this.state.selectedUserId)}>
                    Sign in <b>'{this.state.selectedUserId}'</b>
                  </button>
                  : <h2 className="card-title mt-5">Sign in</h2>
                }

              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-light signin-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select user
                </button>
                <div className="dropdown-menu dropdown-menu-right signin-dropdown">
                  {
                    this.props.users.map((user) => {
                      return (
                        <button key={user.id} className="dropdown-item" type="button" onClick={(e) => this.selectUser(e, user.id)}>
                          <img src={user.avatarURL} className="avatar" alt="avatar"></img>
                          <span className="ml-2">{user.name}</span>
                        </button>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      )
    } else {
      return null
    }

  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    users: formatUserObjectList(users),
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(SignInPage));
