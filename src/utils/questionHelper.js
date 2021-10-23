export function formatQuestionList(questions) {
  let questionList = []
  if (Object.keys(questions).length !== 0) {
    Object.values(questions).forEach(val => {
      questionList.push(val)
    });
  }
  return questionList
}

export function findQuestion(questionList, id) {
  if (questionList !== undefined && questionList !== null && id !== undefined) {
    return questionList.filter(q => q.id.toUpperCase() === id.toUpperCase())[0]
  }
  return null;
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