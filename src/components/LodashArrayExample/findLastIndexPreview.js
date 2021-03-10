import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'
import Highlight from 'react-highlight'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const FindLastIndexPreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.findLastIndex(array, [predicate=_.identity], [fromIndex=0])</Title>
        <div dangerouslySetInnerHTML={{__html: `
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000aa">var</span> users = [
  { <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;barney&#39;</span>,  <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">true</span> },
  { <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;fred&#39;</span>,    <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">false</span> },
  { <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;pebbles&#39;</span>, <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">false</span> }
];
 
_.findLastIndex(users, <span style="color: #0000aa">function</span>(o) { <span style="color: #0000aa">return</span> o.user == <span style="color: #aa5500">&#39;pebbles&#39;</span>; });
<span style="color: #aaaaaa; font-style: italic">// =&gt; 2</span>
 
<span style="color: #aaaaaa; font-style: italic">// The \`_.matches\` iteratee shorthand.</span>
_.findLastIndex(users, { <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;barney&#39;</span>, <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">true</span> });
<span style="color: #aaaaaa; font-style: italic">// =&gt; 0</span>
 
<span style="color: #aaaaaa; font-style: italic">// The \`_.matchesProperty\` iteratee shorthand.</span>
_.findLastIndex(users, [<span style="color: #aa5500">&#39;active&#39;</span>, <span style="color: #0000aa">false</span>]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; 2</span>
 
<span style="color: #aaaaaa; font-style: italic">// The \`_.property\` iteratee shorthand.</span>
_.findLastIndex(users, <span style="color: #aa5500">&#39;active&#39;</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; 0</span>
</pre></div>


        `}} />


        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            This method is like _.findIndex except that it iterates over elements of collection from right to left. no found : -1
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tương tự _.find nhưng trả về vị trí của phần tử cuối cùng tìm được, nếu không có trả về -1
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

FindLastIndexPreview.propTypes = {}

export default FindLastIndexPreview