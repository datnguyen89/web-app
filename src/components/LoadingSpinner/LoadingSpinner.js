import React from 'react'
import {
  SpinnerWrapper,
} from './LoadingSpinnerStyled'
import { inject, observer } from 'mobx-react'
import { Spin } from 'antd'

const LoadingSpinner = ({ loadingAnimationStore, commonStore }) => {
  return (
    <SpinnerWrapper visible={loadingAnimationStore.isVisible}>
      <Spin size="large" />
    </SpinnerWrapper>
  )
}

export default inject('loadingAnimationStore', 'commonStore')(observer(LoadingSpinner))
