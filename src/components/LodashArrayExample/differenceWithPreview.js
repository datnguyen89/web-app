import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const DifferenceWith = props => {
  const handleClickPlay1 = () => {
    console.log(
      `_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual)`,
      _.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual),
    )
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.differenceWith(array, [values], [comparator])</Title>

        <Text code>
          {
            `
            _.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual);
            // => [{ 'x': 2, 'y': 1 }]
            `
          }
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values
            are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tương tự difference, thêm so sánh compare(phần tử mảng cũ, phần tử mảng so sánh)
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

DifferenceWith.propTypes = {}

export default DifferenceWith