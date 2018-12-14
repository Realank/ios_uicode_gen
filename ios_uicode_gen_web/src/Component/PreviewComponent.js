import React, { Component } from 'react'
import { connect } from 'react-redux'
import UIButton from '../SimulateUI/UIButton'
import UIView from '../SimulateUI/UIView'
class PreviewComponent extends Component {
  render () {
    let widget = null
    if (this.props.selectedView === 'UIButton') {
      widget = <UIButton basicOptions={this.props.basicOptions} buttonOptions={this.props.buttonOptions} />
    } else if (this.props.selectedView === 'UIView') {
      widget = <UIView basicOptions={this.props.basicOptions} />
    }
    return (
      <div className={'preview'}>
        <h1>预览</h1>
        <div className={'renderPreview'}>
          {widget}
          {/* <div style={{ wordWrap: 'break-word' }}> */}
          {/* {JSON.stringify(this.props)} */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PreviewComponent)
