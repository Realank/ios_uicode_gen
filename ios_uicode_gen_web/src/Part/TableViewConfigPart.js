import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Switch } from 'antd'

class TableViewConfigPart extends Component {
  handleScrollEnableChange = (checked) => {
    console.log('handleScrollEnableChange ' + checked)
    this.props.updateTableViewOptions({ ...this.props.tableViewOptions, scrollEnabled: checked })
  }

  render () {
    const scrollEnabled = this.props.tableViewOptions.scrollEnabled
    return (

      <div className={'config'}>
        <h3 >UIImageView配置</h3>
        <Row className={'row'} type='flex' align={'middle'}>
          <Col span={4}>
            <h5>可以滚动</h5>
          </Col>
          <Col span={6}>
            <Switch onChange={this.handleScrollEnableChange} defaultChecked={scrollEnabled} />
          </Col >

        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tableViewOptions: state.tableViewOptions }
}

const mapDispatchToProps = {
  updateTableViewOptions: (value) => ({
    type: 'UpdateTableView',
    value
  })

}

export default connect(mapStateToProps, mapDispatchToProps)(TableViewConfigPart)
