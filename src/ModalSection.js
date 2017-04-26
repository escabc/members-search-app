import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  root: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 15,
    fontSize: 16,
    color: '#2C3E50',
  },
}

const ModalSection = ({ title, children }) => (
  <div style={styles.root}>
    <div style={styles.title}>{title}</div>
    {children}
  </div>
)

ModalSection.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ModalSection
