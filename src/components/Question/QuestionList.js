import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserObjectList, formatQuestionObjectList } from '../../utils/helpers'
import { withRouter } from "react-router";
class QuestionList extends Component {

  getAnsweredQuestionList() {
    let questionList = formatUserObjectList(this.props.questions)
    let result = questionList.filter(x => (x.optionOne.votes.length > 0 || x.optionTwo.votes.length > 0))
    return result
  }

  render() {
    let myQuestions = this.getAnsweredQuestionList()
    return (
      <div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 border">
            <div class="row">
              <div class="col-6 border text-center p-0 m-0">
                <button type="button" class="btn btn-link w-100 active">
                  <h6 class="m-3">
                    Unanswered Questions
                  </h6>
                </button>
              </div>
              <div class="col-6 border text-center p-0 m-0">
                <button type="button" class="btn btn-link btn-link-custom w-100">
                  <h6 class="m-3">
                    Unanswered Questions
                  </h6>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                {
                  myQuestions.map(element => {
                    return (
                      <div class="card mt-3">
                        <div class="card-header">
                          <h5>{element.author} asks:</h5>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">Would you rather</h5>
                          <p class="card-text">{element.optionOne.text}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div class="col-3"></div>


        </div>
        <div class="col-12">

        </div>
      </div>
    )
  }

}
function mapStateToProps({ users, authedUser, questions }) {
  return {
    users: formatUserObjectList(users),
    questions: questions,
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(QuestionList));
