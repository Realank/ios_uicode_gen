import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input } from 'antd'

class ImageViewConfigPart extends Component {
  handleImageChange = (e) => {
    console.log('handleImageChange ' + e.target.value)
    this.props.updateImageViewOptions({ ...this.props.imageViewOptions, image: e.target.value })
  }
  handleHighlightedImageChange = (e) => {
    console.log('handleImageChange ' + e.target.value)
    this.props.updateImageViewOptions({ ...this.props.imageViewOptions, hightLightedImage: e.target.value })
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
            <Input placeholder='图片名' onChange={this.handleImageChange} value={this.props.imageViewOptions.image} />
          </Col >
          <Col span={1} />
          <Col span={4}>
            <h5>高亮图片</h5>
          </Col>
          <Col span={6}>
            <Input placeholder='图片名' onChange={this.handleHighlightedImageChange} value={this.props.imageViewOptions.hightLightedImage} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { imageViewOptions: state.imageViewOptions }
}

const mapDispatchToProps = {
  updateImageViewOptions: (value) => ({
    type: 'UpdateImageView',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewConfigPart)
