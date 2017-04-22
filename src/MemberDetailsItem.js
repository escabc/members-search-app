import React, { PropTypes } from 'react'

import theme from './theme'

const styles = {
  root: {
    display: 'flex',
    marginTop: 10,
  },
  leftColumn: {},
  icon: {
    width: 13,
    height: 13,
    fontSize: 13,
    color: '#526825',
  },
  rightColumn: {
    paddingLeft: 12,
    fontSize: 13,
    lineHeight: 1.38,
    color: '#5E738B',
  },
}

const MemberDetailsItem = ({ icon, children }) => (
  <div style={styles.root}>
    <div style={styles.leftColumn}>
      <i className={`fa fa-${icon}`} style={styles.icon} aria-hidden="true" />
    </div>
    <div style={styles.rightColumn}>
      {children}
    </div>
  </div>
  : null
)

MemberDetailsItem.propTypes = {
  value: PropTypes.string.isRequired,
  expired: PropTypes.bool,
}

MemberDetailsItem.defaultProps = {
  expired: false,
}

export default MemberDetailsItem
