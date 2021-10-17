import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList } from '../../utils/helpers'
import { withRouter } from "react-router";
import Avatar from '../User/Avatar';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
  getUser() {
    if (this.props.authedUser !== null) {
      let users = formatUserObjectList(this.props.users)
      return users.filter(u => u.id === this.props.authedUser)[0]
    }
    return null
  }


  render() {
    console.log(this.getUser())
    return (
      <nav className="navbar navbar-light bg-light">
        {/* <div></div> */}
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/question/new">New Question</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>
        <div>
          {this.getUser() !== null
            ?
            <ul className="nav">
              <li className="p-3">
                <p>Welcome {this.getUser().name}</p>
              </li>
              <li className="p-3">
                {/* <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar ml-4" alt="avatar"></img> */}
                <Avatar AvatarUrl={this.getUser().AvatarUrl} Size="small"></Avatar>
              </li>
              <li className="p-3">
                <NavLink className="nav-link" to="/signin">Logout</NavLink>
              </li>
            </ul>
            : <ul className="nav">
              <li className="p-3">
              </li>
              <li className="p-3">
              </li>
              <li className="p-3">
                {/* <button type="button" className="btn btn-link w-100" onClick={(e) => this.gotoSignInPage()}>
                    Login
                  </button> */}
                <NavLink className="nav-link" to="/signin">Login</NavLink>
              </li>
            </ul>
          }
        </div>
      </nav>
    );
  }

}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
