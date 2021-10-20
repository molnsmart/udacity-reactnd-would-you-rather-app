import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
class AddQuestionPage extends Component {


  render() {
    // add
    // questions/question_id

    console.log(this.props.authedUser)
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className="col-8">
            <form class>
              <div class="form-row border">
                <div class="col-12 text-center border">
                  <h1 className="p-2">Create new question</h1>
                </div>
                <div class="col-12 border">
                  <div class="form-group p-4">
                    <label >Complete the question:</label>
                    <h3 className="mt-4">Would you rather ...</h3>
                    <input type="text" class="form-control" id="optionOne" aria-describedby="optionOne" placeholder="Enter options One text"></input>
                  </div>
                  <div class="form-group pl-4 pr-4">
                    <input type="text" class="form-control" id="optionOne" aria-describedby="optionTwo" placeholder="Enter options Two text"></input>
                  </div>
                  <div class="col-auto pb-4 pt-4">
                    <button type="submit" class="btn btn-success mb-2 w-100">Submit</button>
                  </div>
                </div>

              </div>
            </form>
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
