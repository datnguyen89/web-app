import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const FillPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.fill(array, value, [start=0], [end=array.length])</Title>
        <div dangerouslySetInnerHTML={{__html: `
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000aa">var</span> array = [<span style="color: #009999">1</span>, <span style="color: #009999">2</span>, <span style="color: #009999">3</span>];
 
_.fill(array, <span style="color: #aa5500">&#39;a&#39;</span>);
console.log(array);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [&#39;a&#39;, &#39;a&#39;, &#39;a&#39;]</span>
 
_.fill(<span style="color: #00aaaa">Array</span>(<span style="color: #009999">3</span>), <span style="color: #009999">2</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [2, 2, 2]</span>
 
_.fill([<span style="color: #009999">4</span>, <span style="color: #009999">6</span>, <span style="color: #009999">8</span>, <span style="color: #009999">10</span>], <span style="color: #aa5500">&#39;*&#39;</span>, <span style="color: #009999">1</span>, <span style="color: #009999">3</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; [4, &#39;*&#39;, &#39;*&#39;, 10]</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Fills elements of array with value from start up to, but not including, end.
          </TabPane>
          <TabPane tab="Vn" key="2">
            Điền các phần tử của mảng có giá trị từ đầu đến cuối, nhưng không bao gồm phần tử cuối cùng.
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

FillPreview.propTypes = {}

export default FillPreview