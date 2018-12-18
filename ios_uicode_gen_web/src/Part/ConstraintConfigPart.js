import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Row, Col, Checkbox } from 'antd'

class ConstraintConfigPart extends Component {
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
        <h3>约束配置</h3>
        <h4>自我约束</h4>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSelfWidth} onChange={this.handleInputChange.bind(this, 'checkSelfWidth')} />
          </Col>

          <Col offset={1}>
            <h5>宽度</h5>
          </Col>
          <Col offset={1}>
            <InputNumber
              min={0}
              max={300}
              defaultValue={this.props.options.selfWidth}
              onChange={this.handleChange.bind(this, 'selfWidth')}
              disabled={!this.props.options.checkSelfWidth} />
          </Col >
        </Row>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSelfHeight} onChange={this.handleInputChange.bind(this, 'checkSelfHeight')} />
          </Col>
          <Col offset={1}>
            <h5>高度</h5>
          </Col>
          <Col offset={1}>
            <InputNumber
              min={0}
              max={300}
              defaultValue={this.props.options.selfHeight}
              onChange={this.handleChange.bind(this, 'selfHeight')}
              disabled={!this.props.options.checkSelfHeight} />
          </Col >
        </Row>

        <h4>与父视图约束</h4>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperTop} onChange={this.handleInputChange.bind(this, 'checkSuperTop')} />
          </Col>

          <Col offset={1}>
            <h5>顶部约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superTopOffset')} disabled={!this.props.options.checkSuperTop} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperBottom} onChange={this.handleInputChange.bind(this, 'checkSuperBottom')} />
          </Col>

          <Col offset={1}>
            <h5>底部约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superBottomOffset')} disabled={!this.props.options.checkSuperBottom} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperLeft} onChange={this.handleInputChange.bind(this, 'checkSuperLeft')} />
          </Col>

          <Col offset={1}>
            <h5>左侧约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superLeftOffset')} disabled={!this.props.options.checkSuperLeft} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperRight} onChange={this.handleInputChange.bind(this, 'checkSuperRight')} />
          </Col>

          <Col offset={1}>
            <h5>右侧约束</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superRightOffset')} disabled={!this.props.options.checkSuperRight} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperCenterX} onChange={this.handleInputChange.bind(this, 'checkSuperCenterX')} />
          </Col>

          <Col offset={1}>
            <h5>水平居中</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superCenterXOffset')} disabled={!this.props.options.checkSuperCenterX} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperCenterY} onChange={this.handleInputChange.bind(this, 'checkSuperCenterY')} />
          </Col>

          <Col offset={1}>
            <h5>垂直居中</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superCenterYOffset')} disabled={!this.props.options.checkSuperCenterY} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperEqualWidth} onChange={this.handleInputChange.bind(this, 'checkSuperEqualWidth')} />
          </Col>

          <Col offset={1}>
            <h5>等&emsp;&emsp;宽</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superEqualWidthOffset')} disabled={!this.props.options.checkSuperEqualWidth} />
          </Col >
        </Row>

        <Row className={'row'} type='flex' align={'middle'}>
          <Col>
            <Checkbox checked={this.props.options.checkSuperEqualHeight} onChange={this.handleInputChange.bind(this, 'checkSuperEqualHeight')} />
          </Col>

          <Col offset={1}>
            <h5>等&emsp;&emsp;高</h5>
          </Col>
          <Col offset={1}>
            <h5>偏移</h5>
          </Col>
          <Col span={7}>
            <InputNumber min={-300} max={300} defaultValue={0} onChange={this.handleChange.bind(this, 'superEqualHeightOffset')} disabled={!this.props.options.checkSuperEqualHeight} />
          </Col >
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.constraintOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateConstraint',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintConfigPart)
