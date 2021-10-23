

// returns array[userObject]
export function formatUserList(users) {
  let userList = []
  if (Object.keys(users).length !== 0) {
    Object.values(users).forEach(val => {
      userList.push(val)
    });
  }
  return userList
}

export function getUser(userList, id) {
  return userList.filter(u => u.id === id)[0]
}

export function formatUserStats(user, questionList) {
  let userQuestionList = questionList.filter(q => q.author === user.id || q.optionOne.votes.includes(user.id) || q.optionTwo.votes.includes(user.id))
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