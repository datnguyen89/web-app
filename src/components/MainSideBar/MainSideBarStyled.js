import styled from 'styled-components'
import { Layout, Menu } from 'antd'

const { Footer, Content, Sider, Header } = Layout
// Sider
export const MainSideBarWrapper = styled(Sider)`
  color: #ffffff;
  overflow: hidden !important;
  background: ${props => props.theme.solidDarkColor};
  .ant-menu {
    background: transparent !important;   
    border: none;
  }
  .ant-menu-item {
    color: #c5c5c5;
    margin: 0 !important;
  }
  .ant-menu-item-group-title , .ant-menu-submenu-title, .ant-menu-submenu-expand-icon, .ant-menu-submenu-arrow {
    color: #ffffff;
  }
  .ant-layout-sider-trigger {
    background: transparent !important;
    text-align: ${props => props.triggeralign};
    padding-left: ${props => props.triggerpadding};
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`
export const MainLogo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  padding: 5px;
  min-height: 64px;
  border-bottom: solid 1px ${props => props.theme.solidLightColor};
  img {
    object-fit: cover;
    object-position: center;
    max-height: 50px;
  }
`
export const DrawerLogo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 5px;
  img {
    object-fit: cover;
    object-position: center;
    max-height: 40px;
  }
`
export const LogoText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-left: 5px;
  opacity: ${props => props.opacity};
  width: ${props => props.width};
  transition: width 0.3s, opacity 0.3s;
  white-space: nowrap;
`
export const DrawerLogoText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-left: 5px;
  transition: width 0.3s, opacity 0.3s;
  white-space: nowrap;
  color: ${props => props.theme.solidColor};
`