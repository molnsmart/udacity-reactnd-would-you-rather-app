

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE_OPTION_ONE = 'ADD_VOTE_OPTION_ONE'
export const ADD_VOTE_OPTION_TWO = 'ADD_VOTE_OPTION_TWO'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
// export function addVote(question, optionNumber, userId) {
//   return {
//     type: ADD_VOTES,
//     question,
//     optionNumber,
//     userId
//   }
// }
export function addVoteOptionOne(question, userId) {
  return {
    type: ADD_VOTE_OPTION_ONE,
    question,
    userId
  }
}
export function addVoteOptionTwo(question, userId) {
  return {
    type: ADD_VOTE_OPTION_TWO,
    question,
    userId
  }
}