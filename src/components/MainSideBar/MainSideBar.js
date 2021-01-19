import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { MainSideBarWrapper, LogoText, MainLogo, MainMenu } from './MainSideBarStyled'
import { ContainerOutlined, DesktopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
import { Col, Menu, Row, Drawer } from 'antd'
import IMAGES from '../../images'
import { useMediaQuery } from 'react-responsive'

const MainSideBar = props => {
  const { commonStore } = props
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  const onCollapse = collapsed => {
    commonStore.setIsSidebarCollapsed(collapsed)
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
        <Row>
          <MainMenu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>

          </MainMenu>
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