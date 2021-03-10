import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const DifferencePreview = props => {
  const handleClickPlay1 = () => {
    console.log(
      `_.difference([6, 2, 3, 4, 5, 1], [1, 2, 3])`,
      _.difference([6, 2, 3, 4, 5, 1], [1, 2, 3]),
    )
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.difference(array, [values])</Title>

        <Text code>
          _.difference([6, 2, 3, 4, 5, 1], [1, 2, 3]);
          // => [6, 4, 5]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are
            determined by the first array.
          </TabPane>
          <TabPane tab="Vn" key="2">
            _.difference(array, [values]) tạo 1 mảng mới không chứa các giá trị trong [values]
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

DifferencePreview.propTypes = {}

export default DifferencePreview