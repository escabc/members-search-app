import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import theme from './theme'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 170,
  },
  label: {
    paddingLeft: 10,
    marginBottom: 5,
  },
  select: {
    paddingLeft: 10,
    height: 34,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    border: 'solid 1px #C2CAD8',
  },
}

const SelectField = ({ label, placeholder, clearable, value, options, onChange }) => (
  <div style={styles.root}>
    <div style={styles.label}>{label}</div>
    <Select
      placeholder={placeholder}
      clearable={clearable}
      value={value}
      options={options}
      onChange={onChange}
    />
  </div>
)

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  expired: PropTypes.bool,
}

SelectField.defaultProps = {
  expired: false,
}

export default SelectField
