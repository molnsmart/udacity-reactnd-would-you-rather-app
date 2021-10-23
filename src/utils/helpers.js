// const USER_ID_LOCAL_STORAGE = "molnsmartUserId"

// export function formatUserObjectList(users) {
//   let userList = []
//   if (Object.keys(users).length !== 0) {
//     Object.values(users).forEach(val => {
//       userList.push(val)
//     });
//   }
//   return userList
// }
export function formatQuestionObjectList(questions) {
  let questionList = []
  if (Object.keys(questions).length !== 0) {
    Object.values(questions).forEach(val => {
      questionList.push(val)
    });
  }
  return questionList
}

export function findQuestion(questions, id) {
  if (questions !== undefined && questions !== null && id !== undefined) {
    let questionList = formatQuestionObjectList(questions)
    return questionList.filter(q => q.id.toUpperCase() === id.toUpperCase())[0]
  }
  return null;
}


export function formatUserStats(user, questionList) {
  let userQuestionList = formatQuestionObjectList(questionList).filter(q => q.author === user.id || q.optionOne.votes.includes(user.id) || q.optionTwo.votes.includes(user.id))
  let answeredQuestions = userQuestionList.filter(q => q.optionOne.votes.includes(user.id) || q.optionTwo.votes.includes(user.id)).length
  let createdQuestions = userQuestionList.filter(q => q.author === user.id).length
  let score = answeredQuestions + createdQuestions
  return {
    answeredQuestions: answeredQuestions,
    createdQuestions: createdQuestions,
    score: score,
    user: user,
    userId: user.id
  }
}

export function generateQuestion(userId, optionOne, optionTwo) {
  let id = Math.random().toString(36).substr(2, 11);
  return {
    [id]: {
      id: id,
      author: userId,
      timestamp: new Date().getTime(),
      optionOne: {
        votes: [],
        text: optionOne,
      },
      optionTwo: {
        votes: [],
        text: optionTwo
      }
    }
  }
}