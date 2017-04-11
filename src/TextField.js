import React from 'react'
import PropTypes from 'prop-types'

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
  input: {
    paddingLeft: 10,
    height: 34,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    border: 'solid 1px #C2CAD8',
  },
}

const TextField = ({ label, placeholder, value, onChange }) => (
  <div style={styles.root}>
    <div style={styles.label}>{label}</div>
    <input style={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
  </div>
)

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  expired: PropTypes.bool,
}

TextField.defaultProps = {
  expired: false,
}

export default TextField
