import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { MainSideBarWrapper, LogoText, MainLogo } from './MainSideBarStyled'
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons'
import { Col, Menu, Row, Drawer } from 'antd'
import IMAGES from '../../images'
import { useMediaQuery } from 'react-responsive'

const { SubMenu } = Menu

const MainSideBar = props => {
  const { commonStore } = props
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  const onCollapse = collapsed => {
    commonStore.setIsSidebarCollapsed(collapsed)
  }
  const handleClickMenu = (value) => {
    console.log(value)
  }

  return (
    isSmallMobile
      ?
      <Drawer
        title={
          <Row>
            <Col span={24}>
              <MainLogo>
                <img src={IMAGES.MAIN_LOGO} alt={'site-logo'} />
                <LogoText
                  opactity={commonStore.isSidebarCollapsed ? '0' : '1'}
                  width={commonStore.isSidebarCollapsed ? '0px' : 'auto'}
                >
                  Ant Design
                </LogoText>
              </MainLogo>
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
        collapsedWidth={50}
        collapsible={!isMobileOrTablet}
        trigger={commonStore.isSidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        triggerpadding={commonStore.isSidebarCollapsed ? '0' : '24px'}
        triggeralign={commonStore.isSidebarCollapsed ? 'center' : 'left'}
        collapsed={isMobileOrTablet ? true : commonStore.isSidebarCollapsed}
        width={300}
        onBreakpoint={broken => {
          onCollapse(broken)
        }}
        onCollapse={onCollapse}
        theme={commonStore.appTheme}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Row>
          <Col span={24}>
            <MainLogo theme={commonStore.appTheme}>
              <img src={IMAGES.MAIN_LOGO} alt={'site-logo'} />
              <LogoText
                opactity={commonStore.isSidebarCollapsed ? '0' : '1'}
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
            selectedKeys={'3'}
            // inlineCollapsed={commonStore.isSidebarCollapsed}
          >
            <SubMenu key="sub1" icon={<ContainerOutlined />} title="Navigation One" />
            <Menu.Item icon={<DesktopOutlined />} key="1">Option 9</Menu.Item>
            <Menu.Item icon={<SettingOutlined />} key="2">Option 10</Menu.Item>
            <Menu.Item icon={<MailOutlined />} key="3">Option 11</Menu.Item>
            <Menu.Item icon={<PieChartOutlined />} key="4">Option 12</Menu.Item>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two" />
            <Menu.Item icon={<DesktopOutlined />} key="9">Option 9</Menu.Item>
            <Menu.Item icon={<SettingOutlined />} key="10">Option 10</Menu.Item>
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