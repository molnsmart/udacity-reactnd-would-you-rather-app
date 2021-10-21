import { RECEIVE_QUESTIONS, ADD_VOTE_OPTION_ONE, ADD_VOTE_OPTION_TWO, ADD_QUESTION } from "../actions/questions"
export default function questions(state = {}, action) {
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
    case ADD_QUESTION:
      let questionId = Object.keys(action.question)
      return {
        ...state,
        [questionId]: action.question[questionId]
      }
    default:
      return state
  }
}