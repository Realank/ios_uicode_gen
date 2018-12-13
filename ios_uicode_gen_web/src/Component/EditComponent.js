import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, InputNumber, Row, Col, Input } from 'antd'
import ColorPicker from '../Widget/ColorPicker'
const Option = Select.Option

class EditComponent extends Component {
  handleViewChange = (value) => {
    console.log(`selected ${value}`)
    this.props.updateView(value)
  }

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
    console.log('render ' + JSON.stringify(this.props))
    return (
      <div>
        <h1>编辑</h1>
        <Row className={'row'} type='flex' align={'middle'}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder='选择一个控件'
            optionFilterProp='children'
            onChange={this.handleViewChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='UIView'>UIView</Option>
            <Option value='UIButton'>UIButton</Option>
            <Option value='UIImageView'>UIImageView</Option>
          </Select>
        </Row>
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
              <ColorPicker onChange={this.handleBackgroundColorChange} />
            </Col >

          </Row>

          <Row className={'row'} type='flex' align={'middle'}>
            <Col span={4}>
              <h5>边框宽度</h5>
            </Col>
            <Col span={5}>
              <InputNumber min={0} max={30} defaultValue={0} onChange={this.handleBorderWidthChange} />
            </Col >
            <Col span={2} />
            <Col span={4}>
              <h5>边框颜色</h5>
            </Col>
            <Col span={8}>
              <ColorPicker onChange={this.handleBorderColorChange} />
            </Col >

          </Row>

          <Row className={'row'} type='flex' align={'middle'}>
            <Col span={4}>
              <h5>圆角半径</h5>
            </Col>
            <Col span={8}>
              <InputNumber min={0} max={30} defaultValue={0} onChange={this.handleBorderRadiusChange} />
            </Col >
            <Col span={8} />

          </Row>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  updateView: (value) => ({
    type: 'UpdateView',
    value
  }),
  updateBasicOptions: (value) => ({
    type: 'UpdateBasic',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent)
