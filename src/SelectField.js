import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const createStyles = ({ width }) => {
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width,
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

  return styles
}

const SelectField = ({ label, placeholder, clearable, width, value, options, onChange }) => {
  const styles = createStyles({ width })

  return (
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
}

SelectField.propTypes = {
  value: PropTypes.string,
}

SelectField.defaultProps = {
  width: 170,
  value: null,
}

export default SelectField
