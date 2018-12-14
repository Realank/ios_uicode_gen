import React, { Component } from 'react'

class UIButton extends Component {
  render () {
    const basicOptions = this.props.basicOptions
    const buttonOptions = this.props.buttonOptions
    let style = {
      backgroundColor: basicOptions.backgroundColor,
      borderWidth: basicOptions.borderWidth + 'px',
      borderColor: basicOptions.borderColor,
      borderStyle: 'solid',
      borderRadius: basicOptions.borderRadius + 'px'
    }
    if (buttonOptions.titleColor) {
      style.color = buttonOptions.titleColor
    }

    return (
      <div className={'UIButton'} style={style}>Button</div>
    )
  }
}

export default UIButton
