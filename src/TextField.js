import React from 'react'
import PropTypes from 'prop-types'

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
    input: {
      paddingLeft: 10,
      height: 34,
      borderRadius: 2,
      backgroundColor: '#FFFFFF',
      border: 'solid 1px #C2CAD8',
    },
  }

  return styles
}


const TextField = ({ label, placeholder, width, value, onChange }) => {
  const styles = createStyles({ width })

  return (
    <div style={styles.root}>
      <div style={styles.label}>{label}</div>
      <input style={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
}

TextField.defaultProps = {
  expired: false,
  width: 170,
}

export default TextField
