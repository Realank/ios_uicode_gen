import React, { Component } from 'react'

class UIView extends Component {
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
      <div className={'UIView'} style={style} >view</div>
    )
  }
}

export default UIView
