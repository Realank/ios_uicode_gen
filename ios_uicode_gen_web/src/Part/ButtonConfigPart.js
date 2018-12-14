import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, Tooltip, Icon } from 'antd'
import ColorPicker from '../Widget/ColorPicker'

class ButtonConfigPart extends Component {
  handleTitleChange = (e) => {
    console.log('handleTitleChange ' + e.target.value)
    this.props.updateButtonOptions({ ...this.props.buttonOptions, title: e.target.value })
  }

  handleTitleColorChange = (value) => {
    console.log('handleTitleColorChange ' + value)
    this.props.updateButtonOptions({ ...this.props.buttonOptions, titleColor: value })
  }

  handleImageChange = (e) => {
    console.log('handleImageChange ' + e.target.value)
    this.props.updateButtonOptions({ ...this.props.buttonOptions, image: e.target.value })
  }
  handleBackgroundImageChange = (e) => {
    console.log('handleImageChange ' + e.target.value)
    this.props.updateButtonOptions({ ...this.props.buttonOptions, backgroundImage: e.target.value })
  }

  render () {
    return (

      <div className={'config'}>
        <h3 style={{ display: 'inline' }}>UIButton配置</h3><Tooltip title={'只配置Normal状态下的内容，其他状态自行添加'}> <Icon type='question-circle' /></Tooltip>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>标题</h5>

          </Col>
          <Col span={5}>
            <Input placeholder='标题内容' onChange={this.handleTitleChange} value={this.props.buttonOptions.title} />
          </Col >
          <Col span={2} />
          <Col span={4}>
            <h5>标题颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.buttonOptions.titleColor} onChange={this.handleTitleColorChange} />
          </Col >

        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>前景图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='变量名' onChange={this.handleImageChange} value={this.props.buttonOptions.image} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>背景图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='变量名' onChange={this.handleBackgroundImageChange} value={this.props.buttonOptions.backgroundImage} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { buttonOptions: state.buttonOptions }
}

const mapDispatchToProps = {
  updateButtonOptions: (value) => ({
    type: 'UpdateButton',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonConfigPart)
