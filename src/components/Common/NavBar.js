import React from 'react'
import Avatar from '../User/Avatar';
import { NavLink } from 'react-router-dom';

function getUser(props) {
  const { users, authedUser } = props.props
  if (authedUser !== null) {
    return users.filter(u => u.id === authedUser)[0]
  }
  return null
}
function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav nav-tabs justify-content-right w-70">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">New Question</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <div className="user-item">
        {getUser(props) !== null
          ?
          <ul className="nav">
            <li className="p-3">
              <p>Welcome {getUser(props).name}</p>
            </li>
            <li className="p-3">
              <Avatar AvatarUrl={getUser(props).AvatarUrl} Size="small"></Avatar>
            </li>
            <li className="p-3">
              <NavLink to="/signin" exact={true}>Logout</NavLink>
            </li>
          </ul>
          : <ul className="nav">
            <li className="p-3">
            </li>
            <li className="p-3">
            </li>
            <li className="p-3">
              <NavLink className="nav-link" to="/signin" exact={true}>Login</NavLink>
            </li>
          </ul>
        }
      </div>
    </nav>
  );
}

export default NavBar
