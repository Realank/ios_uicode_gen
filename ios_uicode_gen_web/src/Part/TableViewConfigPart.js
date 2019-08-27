import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Switch } from 'antd'

class TableViewConfigPart extends Component {
  handleChange = (id, value) => {
    console.log('handleChange ' + id + ' ' + value)
    let state = { ...this.props.options }
    state[id] = value
    this.props.updateOptions(state)
  }

  render () {
    const scrollEnabled = this.props.options.scrollEnabled
    return (

      <div className={'config'}>
        <h3 >UITableView配置</h3>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>可以滚动</h5>
          </Col>
          <Col span={6}>
            <Switch onChange={this.handleChange.bind(this, 'scrollEnabled')} defaultChecked={scrollEnabled} />
          </Col >

        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { options: state.tableViewOptions }
}

const mapDispatchToProps = {
  updateOptions: (value) => ({
    type: 'UpdateTableView',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(TableViewConfigPart)
