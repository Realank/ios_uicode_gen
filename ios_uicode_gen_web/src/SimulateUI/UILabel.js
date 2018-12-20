import React, { Component } from 'react'

class UILabel extends Component {
  render () {
    const basicOptions = this.props.basicOptions
    const labelOptions = this.props.labelOptions
    const constraintOptions = this.props.constraintOptions
    let style = {
      backgroundColor: basicOptions.backgroundColor,
      borderWidth: basicOptions.borderWidth + 'px',
      borderColor: basicOptions.borderColor,
      borderStyle: 'solid',
      borderRadius: basicOptions.borderRadius + 'px'
    }

    if (labelOptions.textColor) {
      style.color = labelOptions.textColor
    }

    if (labelOptions.fontSize) {
      style.fontSize = labelOptions.fontSize
    }

    if (labelOptions.textAlign === 'NSTextAlignmentLeft') {
      style.justifyContent = 'flex-start'
    } else if (labelOptions.textAlign === 'NSTextAlignmentCenter' || labelOptions.textAlign === 'NSTextAlignmentJustified' || labelOptions.textAlign === 'NSTextAlignmentNatural') {
      style.justifyContent = 'center'
    } else if (labelOptions.textAlign === 'NSTextAlignmentRight') {
      style.justifyContent = 'flex-end'
    }

    if (constraintOptions.checkSelfWidth && constraintOptions.selfWidth > 0) {
      style.width = constraintOptions.selfWidth
    }
    if (constraintOptions.checkSelfHeight && constraintOptions.selfHeight > 0) {
      style.height = constraintOptions.selfHeight
    }

    return (
      <div className={'UILabel'} style={style}>{labelOptions.text ? labelOptions.text : 'Label'}</div>
    )
  }
}

export default UILabel
