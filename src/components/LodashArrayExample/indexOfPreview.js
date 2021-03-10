import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const IndexOfPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.indexOf(array, value, [fromIndex=0])
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">_.indexOf([<span style="color: #009999">1</span>, <span style="color: #009999">2</span>, <span style="color: #009999">1</span>, <span style="color: #009999">2</span>], <span style="color: #009999">2</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; 1</span>
 
<span style="color: #aaaaaa; font-style: italic">// Search from the \`fromIndex\`.</span>
_.indexOf([<span style="color: #009999">0</span>, <span style="color: #009999">1</span>, <span style="color: #009999">2</span>, <span style="color: #009999">3</span>, <span style="color: #009999">4</span>], <span style="color: #009999">1</span>, -<span style="color: #009999">4</span> );
<span style="color: #aaaaaa; font-style: italic">// =&gt; 1</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Lấy thứ tự phần tử đầu tiên tìm được trong mảng, nếu fromIndex âm, lấy phần âm bù bắt đầu từ phần tử cuối
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

IndexOfPreview.propTypes = {}

export default IndexOfPreview