import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Row, Col, Input } from 'antd'
import ColorPicker from '../Widget/ColorPicker'

class BasicConfigPart extends Component {
  handleNameChange = (e) => {
    console.log('handleNameChange ' + e.target.value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, name: e.target.value })
  }

  handleSuperNameChange = (e) => {
    console.log('handleSuperNameChange ' + e.target.value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, superName: e.target.value })
  }

  handleBackgroundColorChange = (value) => {
    console.log('handleBackgroundColorChange ' + value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, backgroundColor: value })
  }

  handleBorderWidthChange = (value) => {
    console.log('handleBorderWidthChange ' + value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, borderWidth: value })
  }

  handleBorderColorChange = (value) => {
    console.log('handleBorderColorChange ' + value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, borderColor: value })
  }

  handleBorderRadiusChange = (value) => {
    console.log('handleBorderRadiusChange ' + value)
    this.props.updateBasicOptions({ ...this.props.basicOptions, borderRadius: value })
  }

  render () {
    return (

      <div className={'config'}>
        <h3>通用配置</h3>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>变量名</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='变量名' onChange={this.handleNameChange} value={this.props.basicOptions.name} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>父视图名称</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='变量名' onChange={this.handleSuperNameChange} value={this.props.basicOptions.superName} />
          </Col >
        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>背景颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.basicOptions.backgroundColor} onChange={this.handleBackgroundColorChange} />
          </Col >

        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>边框宽度</h5>
          </Col>
          <Col span={5}>
            <InputNumber min={0} max={30} precision={1} step={0.5} value={this.props.basicOptions.borderWidth ? this.props.basicOptions.borderWidth : 0} onChange={this.handleBorderWidthChange} />
          </Col >
          <Col span={2} />
          <Col span={4}>
            <h5>边框颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.basicOptions.borderColor} onChange={this.handleBorderColorChange} />
          </Col >

        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>圆角半径</h5>
          </Col>
          <Col span={8}>
            <InputNumber min={0} max={30} value={this.props.basicOptions.borderRadius ? this.props.basicOptions.borderRadius : 0} onChange={this.handleBorderRadiusChange} />
          </Col >
          <Col span={8} />

        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { basicOptions: state.basicOptions }
}

const mapDispatchToProps = {
  updateBasicOptions: (value) => ({
    type: 'UpdateBasic',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(BasicConfigPart)
