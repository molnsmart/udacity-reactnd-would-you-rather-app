import React from 'react'

function Avatar(props) {
  if (props.Size !== undefined) {
    if (props.AvatarUrl !== undefined) {
      if (props.Size === 'large') {
        return (
          <img src={props.AvatarUrl} className="avatar-lg" alt="avatar"></img>
        )
      } else {
        return (
          <img src={props.AvatarUrl} className="avatar" alt="avatar"></img>
        )
      }

    } else {
      return (
        <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar" alt="avatar"></img>
      )
    }
  } else {
    if (props.AvatarUrl !== undefined) {
      return (
        <img src={props.AvatarUrl} className="avatar" alt="avatar"></img>
      )
    } else {
      return (
        <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar" alt="avatar"></img>
      )
    }
  }
}


export default Avatar;
