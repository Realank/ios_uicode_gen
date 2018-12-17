import React, { Component } from 'react'

class UIView extends Component {
  render () {
    const basicOptions = this.props.basicOptions
    const constraintOptions = this.props.constraintOptions
    let style = {
      backgroundColor: basicOptions.backgroundColor,
      borderWidth: basicOptions.borderWidth + 'px',
      borderColor: basicOptions.borderColor,
      borderStyle: 'solid',
      borderRadius: basicOptions.borderRadius + 'px'
    }
    if (constraintOptions.checkSelfWidth && constraintOptions.selfWidth > 0) {
      style.width = constraintOptions.selfWidth
    }
    if (constraintOptions.checkSelfHeight && constraintOptions.selfHeight > 0) {
      style.height = constraintOptions.selfHeight
    }
    return (
      <div className={'UIView'} style={style} >{this.props.name ? this.props.name : 'View'}</div>
    )
  }
}

export default UIView
