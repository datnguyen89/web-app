import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BackTopButtonWrapper, BackTopWrapper } from './BackTopButtonStyled'
import { UpOutlined } from '@ant-design/icons'

const BackTopButton = props => {
  const { commonStore } = props
  return (
    <BackTopButtonWrapper>
      <BackTopWrapper theme={commonStore.appTheme}>
        <UpOutlined />
      </BackTopWrapper>
    </BackTopButtonWrapper>
  )
}

BackTopButton.propTypes = {}

export default inject('commonStore')(observer(BackTopButton))