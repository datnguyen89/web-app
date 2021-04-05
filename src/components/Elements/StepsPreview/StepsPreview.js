import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Steps, Typography } from 'antd'

const { Step } = Steps

const StepsPreview = props => {
  return (
    <>
      <Typography.Title level={3}>Steps</Typography.Title>
      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
      <Divider />
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  )
}

StepsPreview.propTypes = {}

export default StepsPreview