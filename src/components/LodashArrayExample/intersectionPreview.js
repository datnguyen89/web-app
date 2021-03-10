import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const IntersectionPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.intersection([arrays])
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">_.intersection([<span style="color: #009999">2</span>, <span style="color: #009999">1</span>, <span style="color: #009999">3</span>, <span style="color: #009999">1</span>], [<span style="color: #009999">2</span>, <span style="color: #009999">3</span>, <span style="color: #009999">1</span>, <span style="color: #009999">1</span>],[<span style="color: #009999">1</span>, <span style="color: #009999">1</span>, <span style="color: #009999">2</span>, <span style="color: #009999">3</span>]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [2, 1, 3]</span>
</pre></div>



        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới bảo gồm các phần tử có trong tất cả các mảng, mỗi phần tử là duy nhất
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

IntersectionPreview.propTypes = {}

export default IntersectionPreview