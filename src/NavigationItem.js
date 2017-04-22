import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import theme from './theme'

const getStyles = ({ active }) => {
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 210,
      padding: 14,
      cursor: 'pointer',
      borderTop: 'solid 1px #E7ECF1',
      borderRight: 'solid 1px #E7ECF1',
      borderBottom: 'solid 1px #E7ECF1',
      borderLeft: 'solid 1px #E7ECF1',
      textDecoration: 'none',
    },
    icon: {
      fontSize: 30,
    },
    title: {
      paddingTop: 14,
      textTransform: 'uppercase',
    },
  }

  styles.root.backgroundColor = active ? '#FFFFFF' : theme.colors.grey.background
  styles.root.borderColor = active ? theme.colors.success : '#E7ECF1'
  styles.root.borderBottom = 'none'
  styles.root.boxShadow = active ? `inset 0 4px ${theme.colors.success}` : null
  styles.icon.color = active ? theme.colors.success : theme.colors.grey.darker
  styles.title.color = active ? theme.colors.success : theme.colors.grey.darker

  return styles
}

const NavigationTab = ({ id, title, icon, active, onClick }) => {
  const styles = getStyles({ active })

  return (
    <Link to={id} style={styles.root}>
      <i style={styles.icon} className={`fa fa-${icon}`} aria-hidden="true" />
      <div style={styles.title}>{title}</div>
    </Link>
  )
}

NavigationTab.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NavigationTab
