import React, { Component } from 'react'
import Avatar from '../User/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
class StatsCard extends Component {

  getTrophy(index) {
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
    return null;
  }
  render() {
    let statsIndex = this.props.StatsList.findIndex(i => i.userId === this.props.Stats.userId);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-3">
              <div className="card-body">
                {this.getTrophy(statsIndex)}
                <div className="row">
                  <div className="col-4 border-right">
                    <div className="statsCard-avatar">
                      <Avatar AvatarUrl={this.props.Stats.user.avatarURL} Size="large"></Avatar>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <h3>{this.props.Stats.user.name}</h3>
                      </div>
                      <div className="col-10">
                        <p>Answered Questions</p>
                      </div>
                      <div className="col-2">
                        <p>{this.props.Stats.answeredQuestions}</p>
                      </div>
                      <div className="col-10 border-top pt-3">
                        <p>Created Questions</p>
                      </div>
                      <div className="col-2 pt-3">
                        <p>{this.props.Stats.createdQuestions}</p>
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
                        <div className="circle-score"><p className="mt-2 d-inline-block">{this.props.Stats.score}</p></div>
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
}
export default StatsCard