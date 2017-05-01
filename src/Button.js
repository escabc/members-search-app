import React from 'react'
import PropTypes from 'prop-types'

import theme from './theme'

const getStyles = ({ style, styleType }) => {
  const styles = {
    root: {
      ...style,
      padding: '0 20px',
      display: 'inline-block',
      height: 34,
      borderRadius: 2,
      backgroundColor: '#FFFFFF',
      border: 'solid 1px #94A0B2',
      color: '#94A0B2',
      cursor: 'pointer',
    },
  }

  if (styleType === 'primary') {
    styles.root.backgroundColor = theme.colors.primary
    styles.root.border = `solid 1px ${theme.colors.primary}`
    styles.root.cursor = 'pointer'
    styles.root.color = '#FFFFFF'
  }
  if (styleType === 'warning') {
    styles.root.backgroundColor = '#F3C200'
    styles.root.border = 'solid 1px #F3C200'
    styles.root.cursor = 'pointer'
    styles.root.color = '#FFFFFF'
  }
  if (styleType === 'success') {
    styles.root.backgroundColor = '#526825'
    styles.root.border = 'solid 1px #526825'
    styles.root.cursor = 'pointer'
    styles.root.color = '#F3F5F8'
  }

  return styles
}

const Button = ({ style, styleType, type, onClick, children }) => {
  const styles = getStyles({ style, styleType })

  return (
    <button style={styles.root} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  styleType: PropTypes.oneOf(['default', 'primary', 'success']),
  type: PropTypes.oneOf(['button', 'submit']),
}

Button.defaultProps = {
  styleType: 'default',
  type: 'button',
}

export default Button
