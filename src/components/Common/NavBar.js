import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import Avatar from '../User/Avatar';
import { useHistory } from "react-router-dom";

const history = useHistory();
class NavBar extends Component {
  getUser() {
    if (this.props.authedUser !== null) {
      let users = formatUserObjectList(this.props.users)
      return users.filter(u => u.id === this.props.authedUser)[0]
    }
    return null
  }

  gotoSignInPage() {
    history.push("/signin");
  }
  render() {
    console.log(this.getUser())
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <div></div>
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Question</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
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
                  <button type="button" className="btn btn-link w-100" onClick={(e) => this.gotoSignInPage()}>
                    Logout
                  </button>
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
                  <Link to="/signin">signin</Link>
                </li>
              </ul>
            }


          </div>
        </nav>
      </div>
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
