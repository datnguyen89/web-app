import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const FlattenDepthPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.flattenDepth(array, [depth=1])
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000aa">var</span> array = [<span style="color: #009999">1</span>, [<span style="color: #009999">2</span>, [<span style="color: #009999">3</span>, [<span style="color: #009999">4</span>]], <span style="color: #009999">5</span>]];
 
_.flattenDepth(array, <span style="color: #009999">1</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [1, 2, [3, [4]], 5]</span>
 
_.flattenDepth(array, <span style="color: #009999">2</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [1, 2, 3, [4], 5]</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Recursively flatten array up to depth times.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Hợp nhất 1 mảng với số cấp truyền vào
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

FlattenDepthPreview.propTypes = {}

export default FlattenDepthPreview