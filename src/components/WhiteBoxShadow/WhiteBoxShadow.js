import React from 'react'
import PropTypes from 'prop-types'
import { WhiteBoxShadowWrapper } from './WhiteBoxShadowStyled'

const WhiteBoxShadow = props => {
  const { margin, padding, children, minHeight } = props
  return (
    <WhiteBoxShadowWrapper
      margin={margin ? margin : '0'}
      padding={padding ? padding : '15px'}
      minHeight={minHeight ? minHeight : '0px'}
    >
      {children}
    </WhiteBoxShadowWrapper>
  )
}

WhiteBoxShadow.propTypes = {
  minHeight: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}

export default WhiteBoxShadow
