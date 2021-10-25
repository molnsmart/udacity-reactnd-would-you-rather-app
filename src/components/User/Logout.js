import React from 'react'
import { removeAuthedUser } from '../../actions/authedUser'
import { removeUserIdFromLocalStorage } from '../../utils/signinHelper'

function logoutHandler(props) {

  const { Dispatch, History, User } = props
  Dispatch(removeAuthedUser(User.id))
  removeUserIdFromLocalStorage()
  History.push("/");
}

function LogOut(props) {


  if (props.user !== null) {
    return (
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6 pb-5">
          <div className="card text-center mt-5">
            <p className="mt-5">Logged in as: {props.User.name}</p>
            <div className="card-body">
              <button type="button" className="btn btn-danger w-100" onClick={(e) => logoutHandler(props)}>Sign Out</button>            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    )
  } else {
    return (
      <div>Opps! Something went wrong..</div>
    )
  }
}

export default LogOut;
