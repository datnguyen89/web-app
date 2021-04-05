import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Menu, Typography } from 'antd'

const {Title} = Typography

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item</Menu.Item>
  </Menu>
)

const DropdownPreview = props => {
  return (
    <>
      <Title level={3}>Dropdown</Title>
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <div
          style={{
            textAlign: 'center',
            height: 200,
            lineHeight: '200px',
            color: '#777',
            background: '#fff',
            border: '1px solid #ccc',
          }}
        >
          Right Click on here
        </div>
      </Dropdown>
    </>
  )
}

DropdownPreview.propTypes = {}

export default DropdownPreview