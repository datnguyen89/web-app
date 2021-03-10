import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const FromPairsPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.fromPairs(pairs)
        </Title>
        <div dangerouslySetInnerHTML={{__html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">_.fromPairs([[<span style="color: #aa5500">&#39;a&#39;</span>, <span style="color: #009999">1</span>], [<span style="color: #aa5500">&#39;b&#39;</span>, <span style="color: #009999">2</span>]]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; { &#39;a&#39;: 1, &#39;b&#39;: 2 }</span>
</pre></div>

        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            The inverse of _.toPairs; this method returns an object composed from key-value pairs.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Chuyển mảng thành object
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

FromPairsPreview.propTypes = {}

export default FromPairsPreview