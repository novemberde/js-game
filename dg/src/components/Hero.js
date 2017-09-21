import React, { Component, PropTypes } from 'react'

const defaultProps = {
  title: "hero"
};

class Hero extends Component {
  render () {
    return (
      <span>
        {this.props.title}
      </span>
    )
  }
}

Hero.defaultProps = defaultProps;

export default Hero