import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../layouts/DashboardLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const HomePage = props => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {
        process.env.NODE_ENV
      }
      <br />
      {
        process.env.REACT_APP_API_URL
      }
    </DashboardLayout>
  )
}

HomePage.propTypes = {}

export default HomePage