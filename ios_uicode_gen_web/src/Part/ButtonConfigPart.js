import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, Tooltip, Icon } from 'antd'
import ColorPicker from '../Widget/ColorPicker'

class ButtonConfigPart extends Component {
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
        <h3 style={{ display: 'inline' }}>UIButton配置</h3><Tooltip title={'只配置Normal状态下的内容，其他状态自行添加'}> <Icon type='question-circle' /></Tooltip>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>标题</h5>

          </Col>
          <Col span={5}>
            <Input placeholder='标题内容' onChange={this.handleInputChange.bind(this, 'title')} value={this.props.options.title} />
          </Col >
          <Col span={2} />
          <Col span={4}>
            <h5>标题颜色</h5>
          </Col>
          <Col span={8}>
            <ColorPicker initialValue={this.props.options.titleColor} onChange={this.handleChange.bind(this, 'titleColor')} />
          </Col >

        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>前景图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='图片名' onChange={this.handleInputChange.bind(this, 'image')} value={this.props.options.image} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>背景图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='图片名' onChange={this.handleInputChange.bind(this, 'backgroundImage')} value={this.props.options.backgroundImage} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.buttonOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateButton',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonConfigPart)
