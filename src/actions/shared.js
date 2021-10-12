import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from '../actions/authedUser'
import { userIdFromLocalStorage, userIsLoggedInFromLocalStorage } from '../utils/helpers'


export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatchLoggedInUser(dispatch, users)
      })
  }
}

function dispatchLoggedInUser(dispatch, users) {
  // Check if userId exist in LocalStorage
  if (userIsLoggedInFromLocalStorage()) {
    // Check If localStorage UserId exist in usersList from ApI
    if (users[userIdFromLocalStorage()] !== undefined) {
      // Valid User, Dispatch authedUser
      dispatch(setAuthedUser(userIdFromLocalStorage()))
    }
  }
}