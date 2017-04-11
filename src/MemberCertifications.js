import React from 'react'
import PropTypes from 'prop-types'

import theme from './theme'

const getStyles = ({ CESCL, CESCLExpired, CPESC, CISEC }) => {
  const banner = {
    margin: 14,
    padding: 10,
    borderRadius: 2,
    fontSize: 14,
    border: 'solid 1px #E7ECF1',
    backgroundColor: theme.colors.grey.background,
    color: theme.colors.grey.regular,
  }
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'baseline',
    },
    CESCL: {
      ...banner,
      border: `solid 1px ${theme.colors.success}`,
      backgroundColor: theme.colors.success,
      color: '#FFFFFF',
    },
    CPESC: {
      ...banner,
    },
    CISEC: {
      ...banner,
    },
  }

  if (CESCL) {
    styles.CESCL.visibility = CESCL ? 'visible' : 'hidden'
    if (CESCLExpired) {
      styles.CESCL.border = `solid 1px ${theme.colors.warning}`
      styles.CESCL.backgroundColor = theme.colors.warning
    }
  }

  styles.CPESC.visibility = CPESC ? 'visible' : 'hidden'
  styles.CISEC.visibility = CISEC ? 'visible' : 'hidden'

  return styles
}

const MemberCertifications = (props) => {
  const styles = getStyles(props)

  return (
    <div style={styles.root}>
      <span style={styles.CESCL}>CESCL</span>
      <span style={styles.CPESC}>CPESC</span>
      <span style={styles.CISEC}>CISEC</span>
    </div>
  )
}

MemberCertifications.propTypes = {
  // value: PropTypes.string.oneOf(['CESCL', 'CPESC', 'CISEC']),
}

MemberCertifications.defaultProps = {
  value: [],
}

export default MemberCertifications
