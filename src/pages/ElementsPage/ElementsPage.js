import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button, Row, Col } from 'antd'
import ButtonPreview from '../../components/Elements/ButtonPreview'
import DashboardLayout from '../../layouts/DashboardLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { ElementsPageWrapper } from './ElementsPageStyled'
import commonStore from '../../stores/commonStore'

const ElementsPage = props => {
  const { loadingAnimationStore, commonStore } = props

  return (
    <DashboardLayout>
      <Helmet>
        <title>Elements</title>
      </Helmet>
      <ElementsPageWrapper>
        <ButtonPreview />
      </ElementsPageWrapper>
    </DashboardLayout>
  )
}

ElementsPage.propTypes = {}

export default inject('loadingAnimationStore', 'commonStore')(observer(ElementsPage))