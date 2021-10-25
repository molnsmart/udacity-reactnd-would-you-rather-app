import React from 'react'
import { connect } from 'react-redux'
import { formatQuestionList } from '../utils/questionHelper'
import { formatUserList, formatUserStats } from '../utils/userHelper'
import { withRouter } from "react-router";
import StatsCard from '../components/Question/StatsCard'

function scoreBoard(props) {
  let scoreBoard = []
  props.users.forEach(u => {
    scoreBoard.push(formatUserStats(u, props.questions))
  })
  return scoreBoard.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
}
function LeaderboardPage(props) {
  let statsList = scoreBoard(props);
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
function mapStateToProps({ questions, users, authedUser }) {
  return {
    users: formatUserList(users),
    authedUser: authedUser,
    questions: formatQuestionList(questions)
  }
}
export default withRouter(connect(mapStateToProps)(LeaderboardPage));
