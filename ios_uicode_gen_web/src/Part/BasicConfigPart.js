import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Row, Col, Input } from 'antd'
import ColorPicker from '../Widget/ColorPicker'

class BasicConfigPart extends Component {
  handleInputChange = (id, e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.handleChange(id, value)
  }

  handleChange = (id, value) => {
    console.log('handleChange ' + id + ' ' + value)
    let state = { ...this.props.options }
    state[id] = value
    this.props.updateOptions(state)
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
            <Input placeholder='变量名' onChange={this.handleInputChange.bind(this, 'name')} value={this.props.options.name} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>父视图名称</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='变量名' onChange={this.handleInputChange.bind(this, 'superName')} value={this.props.options.superName} />
          </Col >
        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>背景颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.options.backgroundColor} onChange={this.handleChange.bind(this, 'backgroundColor')} />
          </Col >

        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>边框宽度</h5>
          </Col>
          <Col span={5}>
            <InputNumber min={0} max={30} precision={1} step={0.5} value={this.props.options.borderWidth ? this.props.options.borderWidth : 0} onChange={this.handleChange.bind(this, 'borderWidth')} />
          </Col >
          <Col span={2} />
          <Col span={4}>
            <h5>边框颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.options.borderColor} onChange={this.handleChange.bind(this, 'borderColor')} />
          </Col >

        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>圆角半径</h5>
          </Col>
          <Col span={8}>
            <InputNumber min={0} max={30} value={this.props.options.borderRadius ? this.props.options.borderRadius : 0} onChange={this.handleChange.bind(this, 'borderRadius')} />
          </Col >
          <Col span={8} />

        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.basicOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateBasic',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(BasicConfigPart)
