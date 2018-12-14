import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles/hljs'
import { connect } from 'react-redux'
import { genButtonCode, genCustomViewCode } from '../CodeGen/CodeGenerator'
class SourceCodeComponent extends Component {
  render () {
    let codeString = ''
    switch (this.props.selectedView) {
      case 'UIView':
        codeString = genCustomViewCode(this.props.selectedView, this.props.basicOptions, this.props.constraintOptions)
        break
      case 'UIButton':
        codeString = genButtonCode(this.props.selectedView, this.props.basicOptions, this.props.buttonOptions, this.props.constraintOptions)
        break
      case 'UIImageView':
        break
    }

    return (
      <div className={'codeShow'}>
        <h1>源码</h1>
        <SyntaxHighlighter className={'sourceCode'} language='objectivec' style={github} showLineNumbers wrapLines>{codeString}</SyntaxHighlighter>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(SourceCodeComponent)
