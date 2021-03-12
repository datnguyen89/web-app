import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const JoinPreview = props => {
  console.log(_.join([1, 2, 3], undefined))

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>
          _.join(array, [separator=','])
        </Title>
        <div dangerouslySetInnerHTML={{
          __html: `

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">_.join([<span style="color: #aa5500">&#39;a&#39;</span>, <span style="color: #aa5500">&#39;b&#39;</span>, <span style="color: #aa5500">&#39;c&#39;</span>], <span style="color: #aa5500">&#39;~&#39;</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; &#39;a~b~c&#39;</span>
</pre></div>


        `,
        }} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Converts all elements in array into a string separated by separator.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Chuyển đổi toàn bộ phần tử của mảng thành dạng string ngăn cách bởi ký tự truyền vào, mặc định là ' , '
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

JoinPreview.propTypes = {}

export default JoinPreview