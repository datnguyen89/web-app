import styled from 'styled-components'
import { Layout } from 'antd'
const { Footer, Content, Sider, Header } = Layout
// Header
export const MainHeaderWrapper = styled(Header)`
  background: #ffffff;
  padding: 0 15px;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const UserDropdown = styled.div`
  display: flex;
`
export const UserInfo = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
`
export const UserName = styled.div`
  font-weight: 800;
`
export const Balance = styled.div`

`
export const ChangeTheme = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ColorButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  margin-right: 5px;
`
