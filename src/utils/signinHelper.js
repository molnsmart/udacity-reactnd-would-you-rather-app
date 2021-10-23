const USER_ID_LOCAL_STORAGE = "molnsmartUserId"

export function removeUserIdFromLocalStorage() {
  localStorage.removeItem(USER_ID_LOCAL_STORAGE)
}
export function setUserIdLocalStorage(id) {
  localStorage.setItem(USER_ID_LOCAL_STORAGE, id)
}
export function userIdFromLocalStorage() {
  return localStorage.getItem(USER_ID_LOCAL_STORAGE)
}
export function userIsLoggedInFromLocalStorage() {
  if (localStorage.getItem(USER_ID_LOCAL_STORAGE) === null) {
    return false;
  }
  return true;
}