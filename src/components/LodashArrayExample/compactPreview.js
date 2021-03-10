import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title } = Typography
const { TabPane } = Tabs

const CompactPreview = props => {
  const handleClickPlay1 = () => {
    console.log(`_.compact([0, 1, false, 2, '', 3])`, _.compact([0, 1, false, 2, '', 3]))
  }

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.compact(array)</Title>

        <Text code>
          _.compact([0, 1, false, 2, '', 3]);
          // => [1, 2, 3]
        </Text>
        <Divider type={'vertical'} />
        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={handleClickPlay1} />

        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới xóa hết các giá trị falsey : false, null, 0, "", undefined, NaN
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

CompactPreview.propTypes = {}

export default CompactPreview