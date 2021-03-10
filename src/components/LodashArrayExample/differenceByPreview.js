import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const DifferenceByPreview = props => {
  const handleClickPlay1 = () => {
    console.log(`_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)`, _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.differenceBy(array, [values], [iteratee=_.identity])</Title>
        <Text code>
          _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
          // => [1.2]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're
            compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument: (value).
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tương tự diference, thêm điều kiện so sánh chạy qua từng phần tử
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

DifferenceByPreview.propTypes = {}

export default DifferenceByPreview