import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestionList } from '../utils/questionHelper'
import { formatUserList, formatUserStats } from '../utils/userHelper'
import { withRouter } from "react-router";
import StatsCard from '../components/Question/StatsCard'
class LeaderboardPage extends Component {
  componentDidMount() {

  }
  scoreBoard() {
    let scoreBoard = []
    this.props.users.forEach(u => {
      scoreBoard.push(formatUserStats(u, this.props.questions))
    })
    return scoreBoard.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  }
  render() {
    let statsList = this.scoreBoard(this.props.questions);
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            {
              statsList.map(stats => {
                return (
                  <StatsCard key={stats.userId} Stats={stats} StatsList={statsList}></StatsCard>
                )
              })
            }
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    )
  }

}
function mapStateToProps({ questions, users, authedUser }) {
  return {
    users: formatUserList(users),
    authedUser: authedUser,
    questions: formatQuestionList(questions)
  }
}
export default withRouter(connect(mapStateToProps)(LeaderboardPage));
