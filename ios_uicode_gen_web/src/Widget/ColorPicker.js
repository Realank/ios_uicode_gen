import React, { Component } from 'react'
import { Select, Row } from 'antd'

const Option = Select.Option

class ColorPicker extends Component {
  constructor (props) {
    console.log('constructor color picker ' + JSON.stringify(props))
    super(props)
    this.state = {
      data: []
      // value: this.props.initialValue ? this.props.initialValue : []
    }
  }

  fetchData = (value) => {
    console.log('fetching data', value, JSON.stringify(this.state))
    let datas = []
    if (value) {
      datas.push({ value: value, text: value })
    }
    datas.push(
      { value: '#DBAC6F', text: '金色(#DBAC6F)' },
      { value: '#FFFFFF', text: '白色(#FFFFFF)' },
      { value: '#999999', text: '浅灰(#999999)' },
      { value: '#666666', text: '深灰(#666666)' },
      { value: '#333333', text: '深黑(#333333)' },
      { value: '#307CFF', text: '蓝色(#307CFF)' }
    )
    this.setState({ data: datas })
  }

  handleChange = (value) => {
    console.log('handle change' + JSON.stringify(value))
    this.setState({
      value,
      data: []
    })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render () {
    const { data } = this.state
    return (
      <Select
        // mode='multiple'
        // labelInValue
        showSearch
        value={this.props.initialValue}
        placeholder='颜色'
        notFoundContent={null}
        filterOption={false}
        defaultActiveFirstOption={false}
        showArrow={false}
        onFocus={this.fetchData}
        onSearch={this.fetchData}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {data.map((d) => {
          return (<Option key={d.value} >
            <Row type='flex' align={'middle'}>
              <div style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: d.value, marginRight: '10px', border: '#555 1px solid' }} />{d.text}
            </Row>
          </Option>)
        })
        }
      </Select>
    )
  }
}

export default ColorPicker
