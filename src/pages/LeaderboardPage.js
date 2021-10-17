import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList, } from '../utils/helpers'
import { withRouter } from "react-router";
class LeaderboardPage extends Component {

  render() {
    return (
      <h1>Leaderboard</h1>
    )
  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    users: formatUserObjectList(users),
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(LeaderboardPage));
