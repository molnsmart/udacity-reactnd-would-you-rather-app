import React, { Component } from 'react'
import Avatar from '../User/Avatar'
import { NavLink } from 'react-router-dom';
class Question extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="card mt-3">
              <div class="card-header">
                <h6>{this.props.Author.name} asks:</h6>
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-4 border-right">
                    <Avatar AvatarUrl={this.props.Author.avatarURL} Size="large"></Avatar>
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12">
                        <h5>Would you rather</h5>
                        <p>{this.props.Question.optionOne.text}</p>
                        <NavLink className="nav-link" to={"/questions/" + this.props.Question.id}>
                          <button type="button" class="btn btn-outline-success w-100">View Poll</button>
                        </NavLink>

                      </div>
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
export default Question