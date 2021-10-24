import React from 'react'
import Avatar from '../User/Avatar'
import { NavLink } from 'react-router-dom';

// Return a preview of Text with random word count.
// input: "this is a question"
// returns ..this.. or it could return ..this is a...
function previewText(text) {
  let length = text.split(" ").length;
  let max = Math.floor(Math.random() * length);
  if (max === 0) {
    max = 1;
  }
  return "..." + text.split(' ').slice(0, max).join(' ') + ".."
}

function Question(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mt-3">
          <div className="card-header">
            <h6>{props.Author.name} asks:</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4 border-right p-4">
                <Avatar AvatarUrl={props.Author.avatarURL} Size="large"></Avatar>
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col-12">
                    <h5 className="pt-3">Would you rather</h5>
                    <p className="pt-2">{previewText(props.Question.optionOne.text)}</p>
                    <NavLink className="nav-link" to={"/questions/" + props.Question.id}>
                      <button type="button" className="btn btn-outline-success w-100">View Poll</button>
                    </NavLink>

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

export default Question