import React from 'react'
import PropTypes from 'prop-types'
import { Button, Space, Radio, Row, Col, Typography } from 'antd'
import { DownloadOutlined, PoweroffOutlined } from '@ant-design/icons'

const { Title } = Typography

const ButtonPreview = props => {
  return (
    <Row gutter={[0, 15]}>
      <Title level={3}>Button</Title>
      <Col span={24}>
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button disabled={true}>Disabled Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </Col>
      <Col span={24}>
        <Radio.Group>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Space>
          <Button type="primary" ghost> primary ghost</Button>
          <Button ghost>Default ghost</Button>
          <Button type="dashed" ghost> Dashed ghost</Button>
        </Space>
      </Col>
      <Col span={24}>
        <Space>
          <Button type="primary" icon={<DownloadOutlined />} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
          <Button type="primary" shape="round" icon={<PoweroffOutlined />}>Power switch</Button>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} />
        </Space>
      </Col>
      <Col span={24}>
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