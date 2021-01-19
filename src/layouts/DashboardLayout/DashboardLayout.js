import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'
import { useMediaQuery } from 'react-responsive'

import {
  LayoutWrapper,
  LayoutContent,
} from './DashboardLayoutStyled'

import MainSideBar from '../../components/MainSideBar'
import MainHeader from '../../components/MainHeader'

const { Footer, Content } = Layout

const DashboardLayout = props => {
  const { children, commonStore } = props
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' })


  return (
    <LayoutWrapper>
      <MainSideBar />
      <LayoutContent
        style={{ marginLeft: isSmallMobile ? 0 : isMobileOrTablet ? 50 : commonStore.isSidebarCollapsed ? 50 : 300 }}
      >
        <Layout>
          <MainHeader />
          <Content>
            {children}
          </Content>
          <Footer>
            Footer incoming
          </Footer>
        </Layout>
      </LayoutContent>
    </LayoutWrapper>
  )
}

DashboardLayout.propTypes = {}

export default inject('commonStore')(observer(DashboardLayout))