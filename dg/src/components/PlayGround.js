import React, { Component } from 'react'
import './PlayGround.css'

const defaultProps = {
  hero: null,
};

class PlayGround extends Component {
  render () {
    return (
      <div className="PlayGround">
        {this.props.hero}
      </div>
    )
  }
}

PlayGround.defaultProps = defaultProps;

export default PlayGround