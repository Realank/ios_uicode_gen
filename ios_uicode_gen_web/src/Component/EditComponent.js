import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Row } from 'antd'
import BasicConfigPart from '../Part/BasicConfigPart'
import ButtonConfigPart from '../Part/ButtonConfigPart'
import ConstraintConfigPart from '../Part/ConstraintConfigPart'
const Option = Select.Option

class EditComponent extends Component {
  handleViewChange = (value) => {
    console.log(`selected ${value}`)
    this.props.updateView(value)
  }

  render () {
    console.log('render ' + JSON.stringify(this.props))
    let parts = []
    if (this.props.selectedView && this.props.selectedView.length) {
      parts.push(<BasicConfigPart key={'BasicConfigPart'} />, <ConstraintConfigPart key={'ConstraintConfigPart'} />)
    }
    if (this.props.selectedView === 'UIButton') {
      parts.splice(1, 0, <ButtonConfigPart key={'ButtonConfigPart'} />)// 插入
    }
    return (
      <div>
        <h1>编辑</h1>
        <Row className={'row'} type='flex' align={'middle'}>
          <Select
            showSearch
            value={this.props.selectedView.length ? this.props.selectedView : undefined}
            style={{ width: 200 }}
            placeholder='选择一个控件'
            optionFilterProp='children'
            onChange={this.handleViewChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value='UIView'>UIView</Option>
            <Option value='UIButton'>UIButton</Option>
            {/* <Option value='UIImageView'>UIImageView</Option> */}
          </Select>
        </Row>
        {parts}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedView: state.selectedView }
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
