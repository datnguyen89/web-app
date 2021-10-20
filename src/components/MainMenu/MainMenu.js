import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { DesktopOutlined, MailOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons'
import { inject, observer } from 'mobx-react'

const { SubMenu } = Menu

const MainMenu = props => {
  const { commonStore } = props
  const history = useHistory()
  const handleClickMenu = (value) => {
    history.push(value.key)
    console.log(value)
  }
  return (
      <Menu
        onClick={handleClickMenu}
        mode="inline"
        selectedKeys={[commonStore.currentPath]}
      >
        <Menu.Item icon={<DesktopOutlined />} key={'/'}>Home Page</Menu.Item>
        <Menu.Item icon={<SettingOutlined />} key={'/elements'}>Elements</Menu.Item>
        <Menu.Item icon={<SettingOutlined />} key={'/lodashs'}>Lodash</Menu.Item>
        <Menu.Item icon={<MailOutlined />} key="11">Option 11</Menu.Item>
        <Menu.Item icon={<PieChartOutlined />} key="12">Option 13</Menu.Item>
      </Menu>
  )
}

MainMenu.propTypes = {

}
export default inject('commonStore')(observer(MainMenu))
