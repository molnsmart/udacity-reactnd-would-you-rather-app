import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { generateQuestion } from '../utils/helpers';
import { addQuestion } from '../actions/questions'

class AddQuestionPage extends Component {

  state = {
    optionOne: '',
    optionTwo: ''
  }
  updateOptionOne = (e) => {
    const optionOne = e.target.value
    this.setState(() => ({
      optionOne
    }))
  }
  updateOptionTwo = (e) => {
    const optionTwo = e.target.value
    this.setState(() => ({
      optionTwo
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.optionOne.length < 5 || this.state.optionTwo.length < 5) {
      alert("A question has to be more than 5 characters")
    } else {
      let question = generateQuestion(this.props.authedUser, this.state.optionOne, this.state.optionTwo)
      this.props.dispatch(addQuestion(question));
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-8 border">
            <div className="row">
              <div className="col-12 text-center border-bottom">
                <h1 className="p-2">Create new question</h1>
              </div>
              <div className="col-12 mb-4">
                <p className="mt-3">Complete the question</p>
                <h3 className="mt-4 mb-3">Would you rather ...</h3>
                <textarea placeholder="What's happening?" value={this.state.optionOne} onChange={this.updateOptionOne} className='w-100 new-question-textarea' maxLength={280} />
              </div>
              <div className="col-5">
                <hr className="my-12" />
              </div>
              <div className="col-2 text-center">
                <h4>OR</h4>
              </div>
              <div className="col-5">
                <hr className="my-12" />
              </div>
              <div className="col-12">
                <textarea placeholder="What's happening?" value={this.state.optionTwo} onChange={this.updateOptionTwo} className='w-100 new-question-textarea' maxLength={280} />
                <div className="col-auto pb-4 pt-4">
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success mb-2 w-100" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>

        </div>

      </div>
    )
  }

}
function mapStateToProps({ users, authedUser }) {
  return {
    authedUser: authedUser
  }
}
export default withRouter(connect(mapStateToProps)(AddQuestionPage));
