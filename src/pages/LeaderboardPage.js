import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestionObjectList, formatUserObjectList, getUser, getUserStats } from '../utils/helpers'
import { withRouter } from "react-router";
import StatsCard from '../components/Question/StatsCard'
class LeaderboardPage extends Component {
  componentDidMount() {

  }
  scoreBoard(questionList) {
    let scoreBoard = []
    console.log(questionList)
    if (questionList !== undefined) {
      formatQuestionObjectList(questionList).map(question => {
        scoreBoard.push(getUserStats(question.author, question))
      })
    }
    return scoreBoard
  }

  scoreBoard2() {
    let scoreBoard = []
    this.props.users.map(u => {
      scoreBoard.push(getUserStats(u, this.props.questions))
    })
    console.log("scoreBoard")
    console.log(scoreBoard)
    return scoreBoard.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  }
  render() {
    let statsList = this.scoreBoard2(this.props.questions);
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            {

              statsList.map(stats => {
                return (
                  <StatsCard Stats={stats} StatsList={statsList}></StatsCard>
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
    users: formatUserObjectList(users),
    authedUser: authedUser,
    questions: questions
  }
}
export default withRouter(connect(mapStateToProps)(LeaderboardPage));
