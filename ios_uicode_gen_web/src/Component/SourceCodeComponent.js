import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { hybrid } from 'react-syntax-highlighter/dist/styles/hljs'

class SourceCodeComponent extends Component {
  render () {
    const codeString = 'NSLog(@"hello world");\nNSString *a = @"safhadsofnasdo";'

    return (
      <div>
        <h1>源码</h1>
        <SyntaxHighlighter language='objectivec' style={hybrid} showLineNumbers >{codeString}</SyntaxHighlighter>
      </div>

    )
  }
}

export default SourceCodeComponent
