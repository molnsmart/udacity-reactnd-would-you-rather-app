import { RECEIVE_QUESTIONS, ADD_VOTE_OPTION_ONE, ADD_VOTE_OPTION_TWO } from "../actions/questions"
export default function questions(state = {}, action) {
  console.log("hello")
  console.log(action)
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_VOTE_OPTION_ONE:
      let optionOne = state[action.question.id].optionOne.votes.concat([action.userId])
      action.question.optionOne.votes = optionOne
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_VOTE_OPTION_TWO:
      let optionTwo = state[action.question.id].optionTwo.votes.concat([action.userId])
      action.question.optionTwo.votes = optionTwo
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}