import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../layouts/DashboardLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { Typography, Tabs } from 'antd'

import { LodashPageWrapper } from './LodashPageStyled'
import WhiteBoxShadow from '../../components/WhiteBoxShadow'
import ChunkPreview from '../../components/LodashArrayExample/chunkPreview'
import CompactPreview from '../../components/LodashArrayExample/compactPreview'
import ConcatPreview from '../../components/LodashArrayExample/concatPreview'
import DifferencePreview from '../../components/LodashArrayExample/differencePreview'
import DifferenceByPreview from '../../components/LodashArrayExample/differenceByPreview'
import DifferenceWith from '../../components/LodashArrayExample/differenceWithPreview'
import DropPreview from '../../components/LodashArrayExample/dropPreview'
import DropRightPreview from '../../components/LodashArrayExample/dropRightPreview'
import DropRightWhilePreview from '../../components/LodashArrayExample/dropRightWhilePreview'
import DropWhilePreview from '../../components/LodashArrayExample/dropWhilePreview'
import FillPreview from '../../components/LodashArrayExample/fillPreview'
import FindIndexPreview from '../../components/LodashArrayExample/findIndexPreview'
import FindLastIndexPreview from '../../components/LodashArrayExample/findLastIndexPreview'
import FlattenPreview from '../../components/LodashArrayExample/flattenPreview'
import FlattenDeepPreview from '../../components/LodashArrayExample/flattenDeepPreview'
import FlattenDepthPreview from '../../components/LodashArrayExample/flattenDepthPreview'
import FromPairsPreview from '../../components/LodashArrayExample/fromPairsPreview'
import HeadPreview from '../../components/LodashArrayExample/headPreview'
import IndexOfPreview from '../../components/LodashArrayExample/indexOfPreview'
import InitialPreview from '../../components/LodashArrayExample/initialPreview'
import IntersectionPreview from '../../components/LodashArrayExample/intersectionPreview'

const { Text, Title } = Typography

const LodashPage = props => {

  return (
    <DashboardLayout>
      <Helmet>
        <title>Lodash Page Example</title>
      </Helmet>
      <LodashPageWrapper>
        <WhiteBoxShadow margin={'15px'}>
          <Title level={2}>
            install
          </Title>
          <Text code>
            $ npm i --save lodash
          </Text>
          <br />
          <Text code>
            const _ = require('lodash')
          </Text>
        </WhiteBoxShadow>
        <ChunkPreview />
        <CompactPreview />
        <ConcatPreview />
        <DifferencePreview />
        <DifferenceByPreview />
        <DifferenceWith />
        <DropPreview />
        <DropWhilePreview />
        <DropRightPreview />
        <DropRightWhilePreview />
        <FillPreview />
        <FindIndexPreview />
        <FindLastIndexPreview />
        <FlattenPreview />
        <FlattenDeepPreview />
        <FlattenDepthPreview />
        <FromPairsPreview />
        <HeadPreview />
        <IndexOfPreview />
        <InitialPreview />
        <IntersectionPreview />

      </LodashPageWrapper>
    </DashboardLayout>
  )
}

LodashPage.propTypes = {}

export default LodashPage