import React from 'react'
import PropTypes from 'prop-types'
import { Button, Space, Radio, Row, Col } from 'antd'
import { DownloadOutlined, PoweroffOutlined } from '@ant-design/icons'

const ButtonPreview = props => {
  return (
    <Row gutter={[15, 15]}>
      <Col span={24}>
        <h1>Normal</h1>
        <Button type="primary">Primary Button</Button>
        <Button disabled={true}>Disabled Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Col>
      <Col span={24}>
        <h1>Group</h1>
        <Radio.Group>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <h1>Ghost</h1>
        <Button type="primary" ghost> primary ghost</Button>
        <Button ghost>Default ghost</Button>
        <Button type="dashed" ghost> Dashed ghost</Button>
      </Col>
      <Col span={24}>
        <h1>Icon</h1>
        <Button type="primary" icon={<DownloadOutlined/>}/>
        <Button type="primary" shape="circle" icon={<DownloadOutlined/>}/>
        <Button type="primary" shape="round" icon={<PoweroffOutlined />}>Power switch</Button>
        <Button type="primary" shape="round" icon={<DownloadOutlined/>}/>
      </Col>
      <Col span={24}>
        <h1>Block</h1>
        <Button type="primary" block> Primary block </Button>
        <Button block>Default block</Button>
        <Button type="dashed" block> Dashed block</Button>
        <Button type="link" block> Link block </Button>
      </Col>


    </Row>
  )
}

ButtonPreview.propTypes = {}

export default ButtonPreview