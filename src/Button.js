import React from 'react'
import PropTypes from 'prop-types'

import theme from './theme'

const styles = {
  root: {
    display: 'inline-block',
    width: 112,
    height: 34,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
    border: `solid 1px ${theme.colors.primary}`,
    cursor: 'pointer',
    color: '#FFFFFF',
  },
}

const Button = ({ color, type, onClick, children }) => (
  <button style={styles.root} type={type} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
}

Button.defaultProps = {
  color: theme.colors.primary,
  type: 'button',
}

export default Button
