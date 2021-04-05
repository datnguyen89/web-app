import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Layout, BackTop, Divider } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

import {
  LayoutWrapper,
  LayoutContent,
} from './DashboardLayoutStyled'

import MainSideBar from '../../components/MainSideBar'
import MainHeader from '../../components/MainHeader'
import { UpOutlined } from '@ant-design/icons'
import BackTopButton from '../../components/BackTopButton/BackTopButton'

const { Footer, Content } = Layout

const DashboardLayout = props => {
  const { children, commonStore } = props
  const location = useLocation()

  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    commonStore.setCurrentPath(location.pathname)
  }, [location.pathname])

  return (
    <LayoutWrapper>
      <MainSideBar />
      <LayoutContent
        style={{ marginLeft: isSmallMobile ? 0 : isMobileOrTablet ? 70 : commonStore.isSidebarCollapsed ? 70 : 300 }}
      >
        <Layout style={{ minHeight: '100vh' }}>
          <MainHeader />
          <Content style={{ marginTop: commonStore.isHeaderFixed ? '64px' : '0px', flexGrow: 1 }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Divider />
            WEB APP ©{moment().year()} DATNT
          </Footer>
        </Layout>
      </LayoutContent>
      <BackTopButton />
    </LayoutWrapper>
  )
}

DashboardLayout.propTypes = {}

export default inject('commonStore')(observer(DashboardLayout))