import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Layout } from 'antd'
import './App.css'
import EditComponent from './Component/EditComponent'
import PreviewComponent from './Component/PreviewComponent'
import SourceCodeComponent from './Component/SourceCodeComponent'
const { Header, Footer, Content, Sider } = Layout

const persistedState = {
  selectedView: '',
  supportedViews: ['UIView', 'UIButton', 'UIImageView', 'UITableView', 'UILabel'],
  basicOptions: {
    superName: 'view'
  },
  buttonOptions: {
    title: 'button'
  },
  imageViewOptions: {

  },
  constraintOptions: {
    selfWidth: 50,
    selfHeight: 30
  },
  tableViewOptions: {
    scrollEnabled: true
  },
  labelOptions: {
    text: 'Label',
    fontSize: 17
  },
  activeLoadCode: true
}

const reducer = (state = persistedState, action) => {
  console.log('action:' + JSON.stringify(action))
  switch (action.type) {
    case 'UpdateView':
      return { ...persistedState, selectedView: action.value, basicOptions: { ...persistedState.basicOptions, name: action.value.toLowerCase() }, activeLoadCode: state.activeLoadCode }
    case 'UpdateBasic':
      return { ...state, basicOptions: action.value }
    case 'UpdateButton':
      return { ...state, buttonOptions: action.value }
    case 'UpdateConstraint':
      return { ...state, constraintOptions: action.value }
    case 'UpdateImageView':
      return { ...state, imageViewOptions: action.value }
    case 'UpdateTableView':
      return { ...state, tableViewOptions: action.value }
    case 'UpdateLabel':
      return { ...state, labelOptions: action.value }
    case 'UpdateLoadMethod':
      return { ...state, activeLoadCode: action.value }
    default:
      return state
  }
}

const store = createStore(
  reducer
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppFrame />
      </Provider>

    )
  }
}

class AppFrame extends Component {
  render () {
    return (
      <Layout style={{ minHeight: '100%', width: '100%', position: 'absolute' }}>

        <Sider width={'5%'} />

        <Layout >
          <Header className='navigator' style={{ padding: '0' }}>

            <h2>UI2Objc</h2> <h4>generate iOS UI codes</h4>

          </Header>
          <Content className={'content'} >

            <div className={'area'}>
              <EditComponent />
            </div>
            <div className={'area'}>
              <PreviewComponent />
              <SourceCodeComponent />
            </div>
          </Content>
          <Footer>© Realank</Footer>
        </Layout>

        <Sider width={'5%'} />

      </Layout>
    )
  }
}

export default App
