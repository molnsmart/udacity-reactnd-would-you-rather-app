import React from 'react'
import Avatar from '../User/Avatar'

function hasAnsweredOption(option, user) {
  if (option.votes.includes(user.id)) {
    return true
  }
  return false
}
function getVotesPercent(question, option) {

  let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  let votes = option.votes.length
  return ((votes / totalVotes) * 100).toFixed()
}
function Summary(props) {

  let optionTwoVotesPercent = getVotesPercent(props.Question, props.Question.optionTwo)
  let optionOneVotesPercent = getVotesPercent(props.Question, props.Question.optionOne)
  let optionTwoVotes = props.Question.optionTwo.votes.length;
  let optionOneVotes = props.Question.optionOne.votes.length;
  let optionOneHasAnswered = hasAnsweredOption(props.Question.optionOne, props.User)
  let optionTwoHasAnswered = hasAnsweredOption(props.Question.optionTwo, props.User)
  let totalVotes = props.Question.optionOne.votes.length + props.Question.optionTwo.votes.length

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card mt-3">
            <div className="card-header">
              <h6>Asked by {props.User.name}</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4 border-right">
                  <div className="summary-avatar">
                    <Avatar AvatarUrl={props.User.avatarURL} Size="large"></Avatar>
                  </div>
                </div>
                <div className="col-8">
                  <h3 className="card-title">Results:</h3>
                  <div className="row">
                    <div className="col-12">
                      {optionOneHasAnswered === true
                        ?
                        <div className="optionOne border p-3 user-vote">
                          <div>
                            <div className="circle"><p className="mt-2 d-inline-block">your vote</p></div>
                            <h6>{props.Question.optionOne.text}?</h6>
                            <div className="progress mt-3">
                              <div className="progress-bar bg-success" style={{ width: optionOneVotesPercent + '%' }} role="progressbar" aria-valuenow={optionOneVotesPercent} aria-valuemin="0" aria-valuemax="100">{optionOneVotesPercent}%</div>
                            </div>
                            <h6 className="text-center mt-3">{optionOneVotes} out of {totalVotes} votes</h6>
                          </div>
                        </div>
                        : <div className="optionOne border p-3">
                          <div>
                            <h6>{props.Question.optionOne.text}?</h6>
                            <div className="progress mt-3">
                              <div className="progress-bar bg-success" style={{ width: optionOneVotesPercent + '%' }} role="progressbar" aria-valuenow={optionOneVotesPercent} aria-valuemin="0" aria-valuemax="100">{optionOneVotesPercent}%</div>
                            </div>
                            <h6 className="text-center mt-3">{optionOneVotes} out of {totalVotes} votes</h6>
                          </div>
                        </div>}
                    </div>
                    <div className="col-12 mt-3">
                      {optionTwoHasAnswered === true
                        ?
                        <div className="optionOne border p-3 user-vote">
                          <div>
                            <div className="circle"><p className="mt-2 d-inline-block">your vote</p></div>
                            <h6>{props.Question.optionTwo.text}?</h6>
                            <div className="progress mt-3">
                              <div className="progress-bar bg-success" style={{ width: optionTwoVotesPercent + '%' }} role="progressbar" aria-valuenow={optionTwoVotesPercent} aria-valuemin="0" aria-valuemax="100">{optionTwoVotesPercent}%</div>
                            </div>
                            <h6 className="text-center mt-3">{optionTwoVotes} out of {totalVotes} votes</h6>
                          </div>
                        </div>
                        : <div className="optionOne border p-3">
                          <div>
                            <h6>{props.Question.optionTwo.text}?</h6>
                            <div className="progress mt-3">
                              <div className="progress-bar bg-success" style={{ width: optionTwoVotesPercent + '%' }} role="progressbar" aria-valuenow={optionTwoVotesPercent} aria-valuemin="0" aria-valuemax="100">{optionTwoVotesPercent}%</div>
                            </div>
                            <h6 className="text-center mt-3">{optionTwoVotes} out of {totalVotes} votes</h6>
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  )
}
export default Summary
