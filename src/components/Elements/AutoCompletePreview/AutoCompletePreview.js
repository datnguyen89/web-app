import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete, Typography } from 'antd';
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
]
const AutoCompletePreview = props => {
  return (
    <>
      <Typography.Title level={3}>AutoComplete</Typography.Title>
      <AutoComplete
        style={{
          width: 200,
        }}
        options={options}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </>
  )
}

AutoCompletePreview.propTypes = {
  
}

export default AutoCompletePreview