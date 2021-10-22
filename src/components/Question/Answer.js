import React, { Component } from 'react'
import Avatar from '../User/Avatar'
import { addVoteOptionOne, addVoteOptionTwo } from '../../actions/questions'
class Answer extends Component {
  state = {
    optionOne: true,
    optionTwo: false,
  }
  handleChange = (e) => {

    if (e.target.value === 'optionTwo') {
      this.setState(() => ({
        optionOne: false,
        optionTwo: true
      }))
    } else {
      this.setState(() => ({
        optionOne: true,
        optionTwo: false
      }))
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.optionOne) {
      this.props.Dispatch(addVoteOptionOne(this.props.Question, this.props.AuthedUser));
    } else {
      this.props.Dispatch(addVoteOptionTwo(this.props.Question, this.props.AuthedUser));
    }
  }

  render() {

    let questionOneText = this.props.Question.optionOne.text
    let questionTwoText = this.props.Question.optionTwo.text

    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div class="card mt-3">
              <div class="card-header">
                <h6>{this.props.User.name} asks:</h6>
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-4 border-right">
                    <Avatar AvatarUrl={this.props.User.avatarURL} Size="large"></Avatar>
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12">
                        <form className="ml-3" onSubmit={this.handleSubmit}>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="optionOne" value="OptionOne" onChange={this.handleChange} defaultChecked>{this.prop}</input>
                            <label>{questionOneText}</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="optionTwo" value="optionTwo" onChange={this.handleChange}>{this.prop}</input>
                            <label>{questionTwoText}</label>
                            <button className='btn btn-success w-100' type='submit'>Submit</button>
                          </div>
                        </form>
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
}
export default Answer
