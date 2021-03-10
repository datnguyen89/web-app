import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const ConcatPreview = props => {
  const handleClickPlay1 = () => {
    console.log(
      `_.concat([1], 2, [3], [[4]])`,
      _.concat([1], 2, [3], [[4]]),
    )
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.concat(array, [values])</Title>

        <Text code>
          _.concat([1], 2, [3], [[4]]);
          // => [1, 2, 3, [4]]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates a new array concatenating array with any additional arrays and/or values.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới nối mảng với mảng khác hoặc giá trị khác
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

ConcatPreview.propTypes = {}

export default ConcatPreview