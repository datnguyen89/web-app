import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const IntersectionWithPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.intersectionWith([arrays], [comparator])
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000aa">var</span> objects = [{ <span style="color: #aa5500">&#39;x&#39;</span>: <span style="color: #009999">1</span>, <span style="color: #aa5500">&#39;y&#39;</span>: <span style="color: #009999">2</span> }, { <span style="color: #aa5500">&#39;x&#39;</span>: <span style="color: #009999">2</span>, <span style="color: #aa5500">&#39;y&#39;</span>: <span style="color: #009999">1</span> }];
<span style="color: #0000aa">var</span> others = [{ <span style="color: #aa5500">&#39;x&#39;</span>: <span style="color: #009999">1</span>, <span style="color: #aa5500">&#39;y&#39;</span>: <span style="color: #009999">1</span> }, { <span style="color: #aa5500">&#39;x&#39;</span>: <span style="color: #009999">1</span>, <span style="color: #aa5500">&#39;y&#39;</span>: <span style="color: #009999">2</span> }];
 
_.intersectionWith(objects, others, _.isEqual);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }]</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tương tự intersection, thêm phần so sánh mỗi element tương ứng của 2 mảng truyền vào mỗi lần lặp qua
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

IntersectionWithPreview.propTypes = {}

export default IntersectionWithPreview