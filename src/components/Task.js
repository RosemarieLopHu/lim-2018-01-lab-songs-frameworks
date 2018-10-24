import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div className="Task">
        {this.props.artista.key}
      </div>
    )
  }
}
export default Task;