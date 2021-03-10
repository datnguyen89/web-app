import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, message, Tabs, Typography } from 'antd'
import WhiteBoxShadow from '../WhiteBoxShadow'
import { PlayCircleOutlined } from '@ant-design/icons'

const _ = require('lodash')
const { Text, Title, Paragraph } = Typography
const { TabPane } = Tabs

const DropRightWhilePreview = props => {

  return (
    <>
      <WhiteBoxShadow margin={'15px'}>
        <Title level={4}>_.dropRightWhile(array, [predicate=_.identity])</Title>

        <div dangerouslySetInnerHTML={{__html: `
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #0000aa">var</span> users = [
{ <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;barney&#39;</span>,  <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">true</span> },
{ <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;fred&#39;</span>,    <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">false</span> },
{ <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;pebbles&#39;</span>, <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">false</span> }
];

_.dropRightWhile(users, <span style="color: #0000aa">function</span>(o) { <span style="color: #0000aa">return</span> !o.active; });
<span style="color: #aaaaaa; font-style: italic">// =&gt; objects for [&#39;barney&#39;]</span>

<span style="color: #aaaaaa; font-style: italic">// The \`_.matches\` iteratee shorthand.</span>
_.dropRightWhile(users, { <span style="color: #aa5500">&#39;user&#39;</span>: <span style="color: #aa5500">&#39;pebbles&#39;</span>, <span style="color: #aa5500">&#39;active&#39;</span>: <span style="color: #0000aa">false</span> });
<span style="color: #aaaaaa; font-style: italic">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;]</span>

<span style="color: #aaaaaa; font-style: italic">// The \`_.matchesProperty\` iteratee shorthand.</span>
_.dropRightWhile(users, [<span style="color: #aa5500">&#39;active&#39;</span>, <span style="color: #0000aa">false</span>]);
<span style="color: #aaaaaa; font-style: italic">// =&gt; objects for [&#39;barney&#39;]</span>

<span style="color: #aaaaaa; font-style: italic">// The \`_.property\` iteratee shorthand.</span>
_.dropRightWhile(users, <span style="color: #aa5500">&#39;active&#39;</span>);
<span style="color: #aaaaaa; font-style: italic">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;, &#39;pebbles&#39;]</span>
</pre></div>


        `}} />



        <Tabs defaultActiveKey="2">
          <TabPane tab="En" key="1">
            Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
          </TabPane>
          <TabPane tab="Vn" key="2">
            Tạo 1 mảng mới xóa đi n phần tử từ cuối, hàm truyền vào sẽ chạy mỗi lần lặp
          </TabPane>
        </Tabs>
      </WhiteBoxShadow>
    </>
  )
}

DropRightWhilePreview.propTypes = {}

export default DropRightWhilePreview