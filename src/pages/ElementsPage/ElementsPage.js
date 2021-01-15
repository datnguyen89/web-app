import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

const ElementsPage = props => {
  const { loadingAnimationStore } = props
  useEffect(() => {
    // loadingAnimationStore.showSpinner(true)
  }, [])
  return (
    <div>
      Elements
      <Button type={'primary'}>1232313123</Button>
    </div>
  )
}

ElementsPage.propTypes = {}

export default inject('loadingAnimationStore')(observer(ElementsPage))