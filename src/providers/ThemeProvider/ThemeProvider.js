import React, { memo } from 'react'
import { inject, observer } from 'mobx-react'
import { GlobalStyle } from './ThemeProviderStyled'
import axios from 'axios'
import loadingAnimationStore from '../../stores/loadingAnimationStore'
import { message } from 'antd'

const ThemeProvider = (props) => {
  const { commonStore, children, loadingAnimationStore } = props
  axios.defaults.timeout = 60000
  axios.interceptors.request.use(
    config => {
      loadingAnimationStore.showSpinner(true)
      return config
    },
    error => {
      loadingAnimationStore.showSpinner(false)
      Promise.reject(error)
    },
  )
  axios.interceptors.response.use(
    response => {
      loadingAnimationStore.showSpinner(false)
      return response
    },
    error => {
      loadingAnimationStore.showSpinner(false)
      if (error?.response?.status === 401) {
        history.push('/login')
        message.config({
          maxCount: 1,
        })
        message.error('Phiên đăng nhập hết hạn')
      } else if (error?.response?.status === 500 || error?.response?.status === 502) {
        message.error('Có lỗi xảy ra (500)')
        return Promise.reject('Có lỗi xảy ra (500)')
      } else {
        message.error((typeof error === 'string') ? error : 'Có lỗi xảy ra')
        return Promise.reject(error)
      }
    },
  )
  return (
    <>
      <GlobalStyle
        theme={commonStore.appTheme}
      />
      {children}
    </>
  )
}

export default memo(inject('commonStore', 'loadingAnimationStore')(observer(ThemeProvider)))