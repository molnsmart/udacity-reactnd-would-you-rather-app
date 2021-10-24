import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { formatUserList, getUser } from '../utils/userHelper'
import { formatQuestionList } from '../utils/questionHelper'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Question from "../components/Question/Question"


function MainPage(props) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-3"></div>
        <div className="col-6 mt-0">
          <Tabs>
            <TabList>
              <Tab><h5 className="text-center">Unanswered Questions</h5></Tab>
              <Tab><h5 className="text-center">Answered Questions</h5></Tab>
            </TabList>
            <div className="col-12 border">
              <TabPanel>
                <div className="row mt-5">
                  <div className="col-12">
                    {
                      props.questions
                        .filter(x => (!x.optionOne.votes.includes(props.authedUser) && !x.optionTwo.votes.includes(props.authedUser)))
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map(
                          question => {
                            let user = getUser(props.users, question.author)
                            return (
                              <Question key={question.id} Question={question} Author={user}></Question>
                            )
                          }
                        )
                    }
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row mt-5 mb-3">
                  {
                    props.questions
                      .filter(x => (x.optionOne.votes.includes(props.authedUser) || x.optionTwo.votes.includes(props.authedUser)))
                      .sort((a, b) => b.timestamp - a.timestamp)
                      .map(
                        question => {
                          let user = getUser(props.users, question.author)
                          return (
                            <Question key={question.id} Question={question} Author={user}></Question>
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
      <div className="col-3"></div>
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
export default withRouter(connect(mapStateToProps)(MainPage));
