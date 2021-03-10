import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const ChunkPreview = props => {
  const handleClickPlay1 = () => {
    console.log(`_.chunk(['a', 'b', 'c', 'd'], 2)`, _.chunk(['a', 'b', 'c', 'd'], 2))
  }
  const handleClickPlay2 = () => {
    console.log(`_.chunk(['a', 'b', 'c', 'd'], 3)`, _.chunk(['a', 'b', 'c', 'd'], 3))
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.chunk(array, [size=1])</Title>

        <Text code>
          _.chunk(['a', 'b', 'c', 'd'], 2);
          // => [['a', 'b'], ['c', 'd']]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Divider />
        <Text code>
          _.chunk(['a', 'b', 'c', 'd'], 3);
          // => [['a', 'b', 'c'], ['d']]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay2} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới chia đều các phần tử thành nhóm, nhóm cuối cùng sẽ bao gồm các phần tử còn lại
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

ChunkPreview.propTypes = {}

export default ChunkPreview