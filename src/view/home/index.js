import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Link, withRouter, Redirect, Switch } from 'react-router-dom'
import GlobalHeader from './GlobalHeader'
import './index.styl'
import Mock from '@src/view/mock'
import Mobx from '@src/view/mobx'

export default class Home extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { Header, Content, Footer, Sider } = Layout
    const imgUrl = require('@src/assets/logo.svg')
    // withRouter(App)以后 this.props就有location等路由信息了
    // 由于此Home组件本身是路由组件，所以不withRouter也会有location等路由信息
    // 每次刷新 切换导航 重新输入url等都会进入这里 重新算出current给到selectedKeys
    // this.props.history.push(a) 动态跳转
    const current = this.props.location.pathname.replace(/\//, '')
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="layout-logo">
            <img src={imgUrl} className="layout-logoSvg"></img>
            <h1 className="layout-h1">啊啊啊啊附带</h1>
          </div>
          <Menu theme="dark" mode="inline"
            selectedKeys={[current]}
            defaultOpenKeys={['1']}
          >
            <Menu.SubMenu key="1" title={<span><Icon type="mail" /><span>菜单1</span></span>}>
              <Menu.Item key="mock">
                <Link to="/mock" replace>
                  <span className="nav-text">mock</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="mobx">
                <Link to="/mobx" replace>
                  <span className="nav-text">mobx</span>
                </Link>
              </Menu.Item>
            </ Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 加了Switch从上往下匹配 只匹配一次 /路由写最后 如果输入/abc 都没匹配到就匹配到最后的/路由 */}
              <Switch>
                <Route path="/mock" component={Mock} />
                <Route path="/mobx" component={Mobx} />
                <Route path="/" render={() => <Redirect to="/mock"/>} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            xxxx ©2018 Created by xxxxx
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
