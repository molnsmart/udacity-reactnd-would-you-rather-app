import React from 'react'
import Avatar from '../User/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

function getTrophy(index) {
  if (index === 0) {
    return (
      <div className="triangle">
        <FontAwesomeIcon icon={faTrophy} pulse className="ml-2 mt-2 trophy-winner" />
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="triangle">
        <FontAwesomeIcon icon={faTrophy} className="ml-2 mt-2 trophy-silver" />
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="triangle">
        <FontAwesomeIcon icon={faTrophy} className="ml-2 mt-2 trophy-bronze" />
      </div>
    )
  }
  return (
    <div className="triangle-white">
      <p className="ml-2 mt-2">{index + 1}</p>
    </div>
  )
}
function StatsCard(props) {
  let statsIndex = props.StatsList.findIndex(i => i.userId === props.Stats.userId);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-3">
            <div className="card-body">
              {getTrophy(statsIndex)}
              <div className="row">
                <div className="col-4 border-right">
                  <div className="statsCard-avatar">
                    <Avatar AvatarUrl={props.Stats.user.avatarURL} Size="large"></Avatar>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <h3>{props.Stats.user.name}</h3>
                    </div>
                    <div className="col-10">
                      <p>Answered Questions</p>
                    </div>
                    <div className="col-2">
                      <p>{props.Stats.answeredQuestions}</p>
                    </div>
                    <div className="col-10 border-top pt-3">
                      <p>Created Questions</p>
                    </div>
                    <div className="col-2 pt-3">
                      <p>{props.Stats.createdQuestions}</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 border-left">
                  <div className="row">
                    <div className="col-10 ml-4 border text-center p-3 bg-light mb-0">
                      <h6>Score</h6>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-10 ml-4 border text-center p-3">
                      <div className="circle-score ml-3"><p className="mt-2 d-inline-block">{props.Stats.score}</p></div>
                    </div>
                    <div className="col-2"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard