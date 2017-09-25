import React, { Component } from 'react'

class Bullet extends Component {
  render () {
    const style = {
      backgroundColor: "blue", 
      color:"green",
      position: "relative",
      top: `${this.props.top}px`,
      left: `${this.props.left}px`
    };

    return (
      <span style={style}>
        *
      </span>
    )
  }
}

export default Bullet