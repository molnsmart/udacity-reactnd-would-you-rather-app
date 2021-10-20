import React, { Component } from 'react'

class Avatar extends Component {


  render() {
    console.log(this.props)
    if (this.props.Size !== undefined) {
      if (this.props.AvatarUrl !== undefined) {
        if (this.props.Size === 'large') {
          return (
            <img src={this.props.AvatarUrl} className="avatar-lg" alt="avatar"></img>
          )
        } else {
          return (
            <img src={this.props.AvatarUrl} className="avatar" alt="avatar"></img>
          )
        }

      } else {
        return (
          <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar" alt="avatar"></img>
        )
      }
    } else {
      if (this.props.AvatarUrl !== undefined) {
        return (
          <img src={this.props.AvatarUrl} className="avatar" alt="avatar"></img>
        )
      } else {
        return (
          <img src="https://img.tradera.net/images/596/314487596_8f1b27c6-c493-4655-8da2-b579217e1980.jpg" className="avatar" alt="avatar"></img>
        )
      }
    }

  }

}
export default Avatar;
