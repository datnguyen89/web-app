import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const DropRightPreview = props => {
  const handleClickPlay1 = () => {
    console.log(`_.dropRight([1, 2, 3])`, _.dropRight([1, 2, 3]))
  }
  const handleClickPlay2 = () => {
    console.log(`_.dropRight([1, 2, 3], 2)`, _.dropRight([1, 2, 3], 2))
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.dropRight(array, [n=1])</Title>

        <Text code>
          _.dropRight([1, 2, 3]);
          // => [1, 2]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Divider />
        <Text code>
          _.dropRight([1, 2, 3], 2);
          // => [1]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay2} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates a slice of array with n elements dropped from the end.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới xóa đi n phần tử từ cuối
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

DropRightPreview.propTypes = {}

export default DropRightPreview