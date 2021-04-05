import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, Typography } from 'antd'

const PaginationPreview = props => {
  return (
    <>
      <Typography.Title level={3}>Pagination</Typography.Title>
      <Pagination defaultCurrent={6} total={500} />
    </>
  )
}

PaginationPreview.propTypes = {

}

export default PaginationPreview