import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input } from 'antd'

class ImageViewConfigPart extends Component {
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
        <h3 >UIImageView配置</h3>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>前景图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='图片名' onChange={this.handleInputChange.bind(this, 'image')} value={this.props.options.image} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>高亮图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='图片名' onChange={this.handleInputChange.bind(this, 'hightLightedImage')} value={this.props.options.hightLightedImage} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.imageViewOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateImageView',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewConfigPart)
