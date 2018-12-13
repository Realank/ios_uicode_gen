import React, { Component } from 'react'
import { connect } from 'react-redux'
import UIButton from '../SimulateUI/UIButton'
class PreviewComponent extends Component {
  render () {
    return (
      <div>
        <h1>预览</h1>
        <div>
          <UIButton basicOptions={this.props.basicOptions} />
          <div style={{ wordWrap: 'break-word' }}>
            {JSON.stringify(this.props)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PreviewComponent)
