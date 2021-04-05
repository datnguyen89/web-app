import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button, Row, Col, Menu } from 'antd'
import ButtonPreview from '../../components/Elements/ButtonPreview'
import DashboardLayout from '../../layouts/DashboardLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { ElementsPageWrapper, SquareCustom } from './ElementsPageStyled'
import commonStore from '../../stores/commonStore'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { toJS } from 'mobx'
import MenuPreview from '../../components/Elements/MenuPreview'
import DropdownPreview from '../../components/Elements/DropdownPreview'
import PaginationPreview from '../../components/Elements/PaginationPreview'
import StepsPreview from '../../components/Elements/StepsPreview'
import AutoCompletePreview from '../../components/Elements/AutoCompletePreview'

const ElementsPage = props => {
  const { loadingAnimationStore, commonStore } = props


  useEffect(() => {
    console.log(toJS(commonStore.currentPath))
  }, [commonStore.currentPath])

  return (
    <DashboardLayout>
      <Helmet>
        <title>Elements</title>
      </Helmet>
      <ElementsPageWrapper>

        <ButtonPreview />
        <MenuPreview />
        <DropdownPreview />
        <PaginationPreview />
        <StepsPreview />
        <AutoCompletePreview />

      </ElementsPageWrapper>
    </DashboardLayout>
  )
}

ElementsPage.propTypes = {}

export default inject('loadingAnimationStore', 'commonStore')(observer(ElementsPage))