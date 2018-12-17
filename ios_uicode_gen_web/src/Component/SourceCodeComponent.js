import React, { Component } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import objectivec from 'react-syntax-highlighter/dist/languages/hljs/objectivec'
import github from 'react-syntax-highlighter/dist/styles/hljs/github'
import { connect } from 'react-redux'
import { Switch, Row } from 'antd'
import { genButtonCode, genCustomViewCode, genImageViewCode } from '../CodeGen/CodeGenerator'
class SourceCodeComponent extends Component {
  constructor (props) {
    super(props)
    SyntaxHighlighter.registerLanguage('objectivec', objectivec)
  }
  handleSwitchChange = (checked) => {
    console.log('handleSwitchChange ' + checked)
    this.props.updateLoadMethod(checked)
  }
  render () {
    let codeString = ''
    switch (this.props.selectedView) {
      case 'UIView':
        codeString = genCustomViewCode(this.props.selectedView, this.props.basicOptions, this.props.constraintOptions, this.props.activeLoadCode)
        break
      case 'UIButton':
        codeString = genButtonCode(this.props.selectedView, this.props.basicOptions, this.props.buttonOptions, this.props.constraintOptions, this.props.activeLoadCode)
        break
      case 'UIImageView':
        codeString = genImageViewCode(this.props.selectedView, this.props.basicOptions, this.props.imageViewOptions, this.props.constraintOptions, this.props.activeLoadCode)
        break
    }

    return (
      <div className={'codeShow'}>
        <Row type='flex' align={'middle'}>
          <h1 style={{ display: 'inline-block', margin: '0' }}>源码</h1>
          <div style={{ marginLeft: '10px' }}><Switch style={{ width: '80px' }} onChange={this.handleSwitchChange} checkedChildren='主动加载' unCheckedChildren='懒加载' defaultChecked={this.props.activeLoadCode} /></div>
        </Row>

        <SyntaxHighlighter className={'sourceCode'} language='objectivec' style={github} showLineNumbers wrapLines>{codeString}</SyntaxHighlighter>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  updateLoadMethod: (value) => ({
    type: 'UpdateLoadMethod',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodeComponent)
