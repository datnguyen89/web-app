import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { MainSideBarWrapper, LogoText, MainLogo, DrawerLogo, DrawerLogoText } from './MainSideBarStyled'
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons'
import { Col, Menu, Row, Drawer } from 'antd'
import IMAGES from '../../images'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu

const MainSideBar = props => {
  const { commonStore } = props
  const history = useHistory()
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  const onCollapse = collapsed => {
    console.log(collapsed)
    commonStore.setIsSidebarCollapsed(collapsed)
  }
  const handleClickMenu = (value) => {
    history.push(value.key)
  }

  return (
    isSmallMobile
      ?
      <Drawer
        title={
          <Row>
            <Col span={24}>
              <DrawerLogo>
                <img src={IMAGES.MAIN_LOGO} alt={'site-logo'} />
                <DrawerLogoText theme={commonStore.appTheme}>
                  Ant Design
                </DrawerLogoText>
              </DrawerLogo>
            </Col>
          </Row>
        }
        placement={'left'}
        closable={false}
        onClose={() => commonStore.setIsShowDrawer(false)}
        visible={commonStore.isShowDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      :
      <MainSideBarWrapper
        breakpoint="lg"
        collapsedWidth={70}
        collapsible={false}
        trigger={commonStore.isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        triggerpadding={commonStore.isSidebarCollapsed ? '0' : '24px'}
        triggeralign={commonStore.isSidebarCollapsed ? 'center' : 'left'}
        collapsed={commonStore.isSidebarCollapsed}
        width={300}
        // onBreakpoint={broken => {
        //   onCollapse(broken)
        // }}
        onCollapse={() => onCollapse(!commonStore.isSidebarCollapsed)}
        theme={commonStore.appTheme}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: '0',
        }}
      >
        <Row>
          <Col span={24}>
            <MainLogo
              theme={commonStore.appTheme}
              justifyContent={commonStore.isSidebarCollapsed ? 'center' : 'flex-start'}
            >
              <img src={IMAGES.MAIN_LOGO} alt={'site-logo'} />
              <LogoText
                opacity={commonStore.isSidebarCollapsed ? '0' : '1'}
                width={commonStore.isSidebarCollapsed ? '0px' : 'auto'}
              >
                Ant Design
              </LogoText>
            </MainLogo>
          </Col>
        </Row>
        <Row>
          <Menu
            onClick={handleClickMenu}
            mode="inline"
            selectedKeys={[commonStore.currentPath]}
          >
            <Menu.Item icon={<DesktopOutlined />} key={'/'}>Home Page</Menu.Item>
            <Menu.Item icon={<SettingOutlined />} key={'/elements'}>Elements</Menu.Item>
            <Menu.Item icon={<SettingOutlined />} key={'/lodashs'}>Lodash</Menu.Item>
            <Menu.Item icon={<MailOutlined />} key="11">Option 11</Menu.Item>
            <Menu.Item icon={<PieChartOutlined />} key="12">Option 12</Menu.Item>
          </Menu>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
      </MainSideBarWrapper>


  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))