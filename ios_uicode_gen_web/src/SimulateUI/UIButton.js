import React, { Component } from 'react'

class UIButton extends Component {
  render () {
    const basicOptions = this.props.basicOptions
    let style = {
      backgroundColor: basicOptions.backgroundColor,
      borderWidth: basicOptions.borderWidth + 'px',
      borderColor: basicOptions.borderColor,
      borderStyle: 'solid',
      borderRadius: basicOptions.borderRadius + 'px'
    }

    return (
      <div className={'UIButton'} style={style}>Button</div>
    )
  }
}

export default UIButton
