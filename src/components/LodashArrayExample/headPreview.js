import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const HeadPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.head(array)
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">_.head([<span style="color: #009999">1</span>, <span style="color: #009999">2</span>, <span style="color: #009999">3</span>]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; 1</span>
 
_.head([]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; undefined</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Gets the first element of array.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Lấy phần tử đầu tiên của mảng
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

HeadPreview.propTypes = {}

export default HeadPreview