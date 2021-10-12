import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {

  render() {
    console.log(this.props)
    console.log("hello")
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
            <ul className="nav">
              <li className="p-3">
                <p>Hej Tommy Vadman</p>
              </li>
              <li className="p-3">
                <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar ml-4" alt="avatar"></img>
              </li>
              <li className="p-3">
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NavBar);
