

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
