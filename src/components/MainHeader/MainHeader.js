import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { EyeInvisibleOutlined, EyeOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { MainHeaderWrapper, Balance, UserDropdown, UserInfo, UserName, ChangeTheme, ColorButton } from './MainHeaderStyled'
import { useMediaQuery } from 'react-responsive'
import themeList from '../../themeList'

const MainHeader = props => {
  const { commonStore } = props
  const isSmallMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const [isShowBalance, setIsShowBalance] = useState(false)

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> User Information
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined /> Setting
      </Menu.Item>
      <Menu.Item>
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
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item danger><LogoutOutlined /> Logout</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <MainHeaderWrapper>
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
    </div>
  )
}

MainHeader.propTypes = {}

export default inject('commonStore')(observer(MainHeader))