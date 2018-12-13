import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Layout } from 'antd'
import './App.css'
import EditComponent from './Component/EditComponent'
import PreviewComponent from './Component/PreviewComponent'
const { Header, Footer, Content, Sider } = Layout

const persistedState = {
  selectedView: '',
  basicOptions: {
    backgroundColor: '',
    borderWidth: 0,
    borderColor: '',
    borderRadius: 0
  }
}

const reducer = (state = persistedState, action) => {
  console.log('action:' + JSON.stringify(action))
  switch (action.type) {
    case 'UpdateView':
      return { ...state, selectedView: action.value }
    case 'UpdateBasic':
      return { ...state, basicOptions: action.value }
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
      <Layout style={{ height: '100%', width: '100%', position: 'absolute' }}>

        <Sider width={'8%'} />

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
            </div>
          </Content>
          <Footer>@Realank</Footer>
        </Layout>

        <Sider width={'8%'} />

      </Layout>
    )
  }
}

export default App
