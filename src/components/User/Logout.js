import React, { Component } from 'react'
import { removeAuthedUser } from '../../actions/authedUser'
import { removeUserIdFromLocalStorage } from '../../utils/signinHelper'
import { withRouter } from "react-router";
class LogOut extends Component {
  logout = (id) => {
    const { Dispatch } = this.props
    Dispatch(removeAuthedUser(id))
    removeUserIdFromLocalStorage()
    this.props.history.push("/");
  }
  render() {
    if (this.props.user !== null) {
      console.log(this.props.User)
      return (
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6 pb-5">
            <div className="card text-center mt-5">
              <p className="mt-5">Logged in as: {this.props.User.name}</p>
              <div className="card-body">
                <button type="button" className="btn btn-danger w-100" onClick={(e) => this.logout(this.props.User.id)}>Sign Out</button>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      )
    } else {
      return (
        <div>Opps! Something went wrong..</div>
      )
    }

  }
}
export default withRouter(LogOut)
