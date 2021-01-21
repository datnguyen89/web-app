import styled from 'styled-components'
import { BackTop } from 'antd'

export const BackTopButtonWrapper = styled(BackTop)`
  right: 50px;
`
export const BackTopWrapper = styled.div`
  background: ${props => props.theme.solidColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;
  border-radius: 4px;
`