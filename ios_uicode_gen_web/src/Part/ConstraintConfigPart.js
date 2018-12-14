import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Row, Col, Checkbox } from 'antd'

class ConstraintConfigPart extends Component {
  handleSelfWidthCheckChange = (e) => {
    console.log('handleSelfWidthCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSelfWidth: e.target.checked })
  }
  handleSelfHeightCheckChange = (e) => {
    console.log('handleSelfHeightCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSelfHeight: e.target.checked })
  }
  handleSelfWidthChange = (value) => {
    console.log('handleSelfWidthChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, selfWidth: value })
  }

  handleSelfHeightChange = (value) => {
    console.log('handleSelfHeightChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, selfHeight: value })
  }

  handleSuperTopCheckChange = (e) => {
    console.log('handleSuperTopCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperTop: e.target.checked })
  }

  handleSuperTopOffsetChange = (value) => {
    console.log('handleSuperTopOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superTopOffset: value })
  }

  handleSuperBottomCheckChange = (e) => {
    console.log('handleSuperBottomCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperBottom: e.target.checked })
  }

  handleSuperBottomOffsetChange = (value) => {
    console.log('handleSuperBottomOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superBottomOffset: value })
  }

  handleSuperLeftCheckChange = (e) => {
    console.log('handleSuperLeftCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperLeft: e.target.checked })
  }

  handleSuperLeftOffsetChange = (value) => {
    console.log('handleSuperLeftOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superLeftOffset: value })
  }

  handleSuperRightCheckChange = (e) => {
    console.log('handleSuperRightCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperRight: e.target.checked })
  }

  handleSuperRightOffsetChange = (value) => {
    console.log('handleSuperRightOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superRightOffset: value })
  }

  handleSuperCenterXCheckChange = (e) => {
    console.log('handleSuperCenterXCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperCenterX: e.target.checked })
  }

  handleSuperCenterXOffsetChange = (value) => {
    console.log('handleSuperCenterXOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superCenterXOffset: value })
  }

  handleSuperCenterYCheckChange = (e) => {
    console.log('handleSuperCenterYCheckChange ' + e.target.checked)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, checkSuperCenterY: e.target.checked })
  }

  handleSuperCenterYOffsetChange = (value) => {
    console.log('handleSuperCenterYOffsetChange ' + value)
    this.props.updateConstraintOptions({ ...this.props.constraintOptions, superCenterYOffset: value })
  }

  render () {
    return (

      <div className={'config'}>
        <h3>约束配置</h3>
        <h4>自我约束</h4>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSelfWidth} onChange={this.handleSelfWidthCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>宽度</h5>
          </Col>
          <Col offset={1}>
            <InputNumber
              min={0}
              max={300}
              defaultValue={this.props.constraintOptions.selfWidth}
              onChange={this.handleSelfWidthChange}
              disabled={!this.props.constraintOptions.checkSelfWidth} />
          </Col >
        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSelfHeight} onChange={this.handleSelfHeightCheckChange} />
          </Col>
          <Col offset={1}>
            <h5>高度</h5>
          </Col>
          <Col offset={1}>
            <InputNumber
              min={0}
              max={300}
              defaultValue={this.props.constraintOptions.selfHeight}
              onChange={this.handleSelfHeightChange}
              disabled={!this.props.constraintOptions.checkSelfHeight} />
          </Col >
        </Row>

        <h4>与父视图约束</h4>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperTop} onChange={this.handleSuperTopCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>顶部约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperTopOffsetChange} disabled={!this.props.constraintOptions.checkSuperTop} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperBottom} onChange={this.handleSuperBottomCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>底部约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperBottomOffsetChange} disabled={!this.props.constraintOptions.checkSuperBottom} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperLeft} onChange={this.handleSuperLeftCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>左侧约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperLeftOffsetChange} disabled={!this.props.constraintOptions.checkSuperLeft} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperRight} onChange={this.handleSuperRightCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>右侧约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperRightOffsetChange} disabled={!this.props.constraintOptions.checkSuperRight} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperCenterX} onChange={this.handleSuperCenterXCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>水平居中</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperCenterXOffsetChange} disabled={!this.props.constraintOptions.checkSuperCenterX} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.constraintOptions.checkSuperCenterY} onChange={this.handleSuperCenterYCheckChange} />
          </Col>

          <Col offset={1}>
            <h5>垂直居中</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleSuperCenterYOffsetChange} disabled={!this.props.constraintOptions.checkSuperCenterY} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { constraintOptions: state.constraintOptions }
}

const mapDispatchToProps = {
  updateConstraintOptions: (value) => ({
    type: 'UpdateConstraint',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintConfigPart)
