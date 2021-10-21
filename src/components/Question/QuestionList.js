import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from 'react-redux'
import { formatUserObjectList, getUser } from '../../utils/helpers'
import { withRouter } from "react-router";
import Question from './Question';
class QuestionList extends Component {
  state = {
    questionListWithAnswers: [],
    questionListWithOoutAnswers: [],
    loaded: false,
  }
  componentDidMount() {
    this.updateQuestionLists();
  }
  hideQuestionListWithAnswers() {

  }
  updateQuestionLists() {
    let questionList = formatUserObjectList(this.props.questions)
    let questionsWithAnswers = questionList.filter(x => (x.optionOne.votes.length > 0 || x.optionTwo.votes.length > 0))
    let questionsWithOutAnswers = questionList.filter(x => (x.optionOne.votes.length === 0 && x.optionTwo.votes.length === 0))
    this.setState(
      {
        questionListWithAnswers: questionsWithAnswers,
        questionListWithOutAnswers: questionsWithOutAnswers,
        loaded: true
      }
    )
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          <div class="row mt-3">
            <div class="col-4"></div>
            <div class="col-4 mt-0">
              <Tabs>
                <TabList>
                  <Tab><h5 className="text-center">Unanswered Questions</h5></Tab>
                  <Tab><h5 className="text-center">Answered Questions</h5></Tab>
                </TabList>
                <div className="col-12 border">
                  <TabPanel>
                    <div class="row mt-5">
                      {/* <div class="col-12">
                        {
                          this.state.questionListWithAnswers.map(question => {
                            let user = getUser(this.props.users, question.author)
                            return (
                              <Question Question={question} Author={user}></Question>
                            )
                          })
                        }
                      </div> */}
                      <div class="col-12">
                        {
                          formatUserObjectList(this.props.questions).filter(x => (x.optionOne.votes.length === 0 && x.optionTwo.votes.length === 0)).map(
                            question => {
                              let user = getUser(this.props.users, question.author)
                              return (
                                <Question Question={question} Author={user}></Question>
                              )
                            }
                          )
                        }
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div class="row mt-5 mb-3">
                      {/* <div className="col-12">
                        {
                          this.state.questionListWithOutAnswers.map(question => {
                            let user = getUser(this.props.users, question.author)
                            return (
                              <Question Question={question} Author={user}></Question>
                            )
                          })
                        }
                      </div> */}
                      {
                        formatUserObjectList(this.props.questions).filter(x => (x.optionOne.votes.length > 0 || x.optionTwo.votes.length > 0)).map(
                          question => {
                            let user = getUser(this.props.users, question.author)
                            return (
                              <Question Question={question} Author={user}></Question>
                            )
                          }
                        )
                      }
                    </div>
                  </TabPanel>
                </div>

              </Tabs>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      )
    } else {
      return null
    }

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
