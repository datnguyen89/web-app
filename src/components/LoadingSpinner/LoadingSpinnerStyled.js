import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255,255,255,.8);
  justify-content: center;
  align-items: center;
`
