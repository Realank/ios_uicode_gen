import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, InputNumber, Radio } from 'antd'
import ColorPicker from '../Widget/ColorPicker'
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class LabelConfigPart extends Component {
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
        <h3 >UILabel配置</h3>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>文字</h5>

          </Col>
          <Col span={5}>
            <Input placeholder='文字内容' onChange={this.handleInputChange.bind(this, 'text')} value={this.props.options.text} />
          </Col >
          <Col span={2} />
          <Col span={4}>
            <h5>文字颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.options.textColor} onChange={this.handleChange.bind(this, 'textColor')} />
          </Col >

        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>字体大小</h5>
          </Col>
          <Col span={8}>
            <InputNumber min={1} max={100} value={this.props.options.fontSize !== undefined ? this.props.options.fontSize : 17} onChange={this.handleChange.bind(this, 'fontSize')} />
          </Col >
          <Col span={8} />

        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>行数</h5>
          </Col>
          <Col span={8}>
            <InputNumber min={0} max={10} value={this.props.options.numberOfLines} onChange={this.handleChange.bind(this, 'numberOfLines')} />
          </Col >
          <Col span={8} />

        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>对齐方式</h5>
          </Col>
          <Col >
            <RadioGroup onChange={this.handleInputChange.bind(this, 'textAlign')}>
              <RadioButton value='NSTextAlignmentLeft'>Left</RadioButton>
              <RadioButton value='NSTextAlignmentCenter'>Center</RadioButton>
              <RadioButton value='NSTextAlignmentRight'>Right</RadioButton>
              <RadioButton value='NSTextAlignmentJustified'>Justified</RadioButton>
              <RadioButton value='NSTextAlignmentNatural'>Natural</RadioButton>
            </RadioGroup>
          </Col >

        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.labelOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateLabel',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(LabelConfigPart)
