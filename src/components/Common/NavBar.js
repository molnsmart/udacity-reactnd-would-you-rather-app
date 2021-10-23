import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserList } from '../../utils/userHelper'
import { withRouter } from "react-router";
import Avatar from '../User/Avatar';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
  getUser() {
    if (this.props.authedUser !== null) {
      return this.props.users.filter(u => u.id === this.props.authedUser)[0]
    }
    return null
  }


  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add">New Question</NavLink>
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
                <Avatar AvatarUrl={this.getUser().AvatarUrl} Size="small"></Avatar>
              </li>
              <li className="p-3">
                <NavLink to="/signin" exact={true}>Logout</NavLink>
              </li>
            </ul>
            : <ul className="nav">
              <li className="p-3">
              </li>
              <li className="p-3">
              </li>
              <li className="p-3">
                <NavLink className="nav-link" to="/signin" exact={true}>Login</NavLink>
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
    users: formatUserList(users)
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));
