import React, { Component } from 'react'
import './JoyStick.css'
import Arrow from '../images/down.svg'

class JoyStick extends Component {
  render () {
    return (
      <div className="JoyStick">
        <div className="JoyStick buttons">
          <div className="row">
            <img src={Arrow} className="Arrow up"/>
          </div>
          <div className="row">
            <img src={Arrow} className="Arrow left"/>
            <img src={Arrow} className="Arrow down"/>
            <img src={Arrow} className="Arrow right"/>
          </div>
        </div>
        <div className="JoyStick buttons">
          right Box
        </div>
      </div>
    )
  }
}

export default JoyStick