import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { BgColorsOutlined, EyeInvisibleOutlined, EyeOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Space, Switch } from 'antd'
import { MainHeaderWrapper, Balance, UserDropdown, UserInfo, UserName, ChangeTheme, ColorButton } from './MainHeaderStyled'
import { useMediaQuery } from 'react-responsive'
import themeList from '../../themeList'

const MainHeader = props => {
  const { commonStore, fixed } = props
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const [isShowBalance, setIsShowBalance] = useState(false)

  const fixedStyle = {
    position: 'fixed',
    zIndex: '1',
    width: `calc(100% - ${isSmallMobile ? '0px' : commonStore.isSidebarCollapsed ? '50px' : '300px'})`,
    transition: 'width 0.2s ease 0s',
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> User Information
      </Menu.Item>
      <Menu.Item>
        <Space align={'center'}>
          <div>
            <BgColorsOutlined /> Theme
          </div>
          <ChangeTheme>
            {
              themeList.map(item =>
                <ColorButton
                  key={item.name}
                  backgroundColor={item.solidColor}
                  onClick={() => commonStore.setTheme(item.name)}
                />,
              )
            }
          </ChangeTheme>
        </Space>
      </Menu.Item>
      <Menu.Item>
        <Space align={'center'}>
          <div>
            <SettingOutlined /> Fixed Header
          </div>
          <Switch
            checked={commonStore.isHeaderFixed}
            onChange={(e) => {
              console.log(e)
              commonStore.setIsHeaderFixed(e)
            }}
          >
            Fixed Header
          </Switch>
        </Space>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item danger><LogoutOutlined /> Logout</Menu.Item>
    </Menu>
  )

  return (
    <MainHeaderWrapper style={commonStore.isHeaderFixed ? fixedStyle : {}}>
      {
        isSmallMobile ?
          <MenuOutlined
            style={{ fontSize: '20px' }}
            onClick={() => commonStore.setIsShowDrawer(true)}
          />
          : <div></div>
      }
      <UserDropdown>
        <Dropdown overlay={menu} placement="bottomRight" arrow={true}>
          <Avatar size={40}>A</Avatar>
        </Dropdown>
        <UserInfo>
          <UserName>
            Admin
          </UserName>
          <Balance>
            {
              isShowBalance
                ?
                <div style={{ display: isShowBalance ? 'block' : 'flex' }}>
                  1.000.000.000.000 đ <EyeInvisibleOutlined style={{ marginLeft: '5px' }} onClick={() => setIsShowBalance(!isShowBalance)} />
                </div>
                :
                <div style={{ display: isShowBalance ? 'block' : 'flex' }}>
                  ****** <EyeOutlined style={{ marginLeft: '5px' }} onClick={() => setIsShowBalance(!isShowBalance)} />
                </div>
            }
          </Balance>
        </UserInfo>
      </UserDropdown>
    </MainHeaderWrapper>
  )
}

MainHeader.propTypes = {
  fixed: PropTypes.bool,
}

export default inject('commonStore')(observer(MainHeader))