import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {inject, observer} from 'mobx-react'
import { AuthLayoutWrapper, CompanyInfo, Description, LogoImage, LogoText } from './AuthLayoutStyled'
import { Row, Col } from 'antd'
import IMAGES from '../../images'
import { useLocation } from 'react-router-dom'

const AuthLayout = props => {
  const { children, commonStore } = props
  const location = useLocation()
  useEffect(() => {
    commonStore.setCurrentPath(location.pathname)
  }, [location.pathname])
  return (
    <AuthLayoutWrapper theme={commonStore.appTheme}>
      <Row>
        <Col>
          <CompanyInfo>
            <LogoImage>
              <img src={IMAGES.MAIN_LOGO} alt={'logo'} />
            </LogoImage>
            <LogoText>
              Ant Design
            </LogoText>
          </CompanyInfo>
        </Col>
      </Row>
      <Row>
        <Col>
          <Description>
            Ant Design is the most influential web design specification in Xihu district
          </Description>
        </Col>
      </Row>
      {children}
    </AuthLayoutWrapper>
  )
}

AuthLayout.propTypes = {}

export default inject('commonStore')(observer(AuthLayout))