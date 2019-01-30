import React from 'react'
import PropTypes from 'prop-types'

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

const MemberDetailsItem = ({ icon, customStyles, children }) => (
  <div style={styles.root}>
    <div style={styles.leftColumn}>
      <i className={`fa fa-${icon}`} style={{...styles.icon, ...customStyles}} aria-hidden="true" />
    </div>
    <div style={styles.rightColumn}>
      {children}
    </div>
  </div>
  : null
)

export default MemberDetailsItem
