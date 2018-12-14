import React, { Component } from 'react'

class UIButton extends Component {
  render () {
    const basicOptions = this.props.basicOptions
    const buttonOptions = this.props.buttonOptions
    const constraintOptions = this.props.constraintOptions
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
    if (constraintOptions.checkSelfWidth && constraintOptions.selfWidth > 0) {
      style.width = constraintOptions.selfWidth
    }
    if (constraintOptions.checkSelfHeight && constraintOptions.selfHeight > 0) {
      style.height = constraintOptions.selfHeight
    }

    return (
      <div className={'UIButton'} style={style}>Button</div>
    )
  }
}

export default UIButton
