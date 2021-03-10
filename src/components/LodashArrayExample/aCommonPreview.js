import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const CommonPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          
        </Title>
        <div dangerouslySetInnerHTML={{__html: `



        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            
          </TabPane>
          <TabPane tab="Vn" key="2">
            
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

CommonPreview.propTypes = {}

export default CommonPreview