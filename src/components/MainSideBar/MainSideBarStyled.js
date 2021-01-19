import styled from 'styled-components'
import { Layout, Menu } from 'antd'

const { Footer, Content, Sider, Header } = Layout
// Sider
export const MainSideBarWrapper = styled(Sider)`
  color: #ffffff;
  background: ${props => props.theme.solidDarkColor};
  .ant-menu {
    background: transparent !important;   
    border: none;
  }
  .ant-menu-item {
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
  padding: 5px;
  min-height: 60px;
  img {
    object-fit: cover;
    object-position: center;
    max-height: 50px;
  }
`
export const LogoText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-left: 5px;
  opacity: ${props => props.opactity};
  width: ${props => props.width};
  transition: width 0.3s, opacity 0.3s;
  white-space: nowrap;
`
export const MainMenu = styled(Menu)`

`