import React from 'react'
import PropTypes from 'prop-types'

import theme from './theme'

const getStyles = ({ CESCL, CPESC, CISEC }) => {
  const button = {
    width: 60,
    height: 34,
    lineHeight: '34px',
    color: '#94A0B2',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#FBFCFD',
    userSelect: 'none',
  }
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    list: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 34,
    },
    label: {
      paddingLeft: 10,
      marginBottom: 5,
    },
    CESCL: {
      ...button,
      borderRadius: '2px 0 0 2px',
      border: '1px solid #C2CAD8',
    },
    CPESC: {
      ...button,
      borderTop: '1px solid #C2CAD8',
      borderBottom: '1px solid #C2CAD8',
    },
    CISEC: {
      ...button,
      borderRadius: '0 2px 2px 0',
      border: '1px solid #C2CAD8',
    },
  }

  if (CESCL) {
    styles.CESCL.backgroundColor = '#4C87B9'
    styles.CESCL.border = '1px solid #4C87B9'
    styles.CESCL.color = '#FFFFFF'
  }
  if (CPESC) {
    styles.CPESC.backgroundColor = '#4C87B9'
    styles.CPESC.borderTop = '1px solid #4C87B9'
    styles.CPESC.borderBottom = '1px solid #4C87B9'
    styles.CPESC.color = '#FFFFFF'
  }
  if (CISEC) {
    styles.CISEC.backgroundColor = '#4C87B9'
    styles.CISEC.border = '1px solid #4C87B9'
    styles.CISEC.color = '#FFFFFF'
  }

  return styles
}

const CertificationsField = (props) => {
  const { label, onClick } = props
  const styles = getStyles(props)

  return (
    <div style={styles.root}>
      <div style={styles.label}>Certifications</div>
      <div style={styles.list}>
        <div style={styles.CESCL} onClick={() => onClick('CESCL')}>CESCL</div>
        <div style={styles.CPESC} onClick={() => onClick('CPESC')}>CPESC</div>
        <div style={styles.CISEC} onClick={() => onClick('CISEC')}>CISEC</div>
      </div>
    </div>
  )
}

CertificationsField.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
}

CertificationsField.defaultProps = {
  color: theme.colors.primary,
  type: 'button',
}

export default CertificationsField
