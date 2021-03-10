import styled from 'styled-components'

export const WhiteBoxShadowWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0 -2px 14px rgba(0,0,0,.04), 0 3px 6px rgba(0,0,0,.02);
  border-radius: 4px;
  border: 1px solid #d9e1ed;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  min-height: ${props => props.minHeight};
  @media screen and (max-width: 375px) {
    padding: 5px;
  }
`
