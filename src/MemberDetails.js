import React from 'react'
import PropTypes from 'prop-types'

import MemberName from './MemberName'

import theme from './theme'

const styles = {
  root: {},
  description: {
    marginTop: 5,
    color: theme.colors.grey.dark,
    fontSize: 16,
  },
  location: {
    marginTop: 10,
  },
  locationIcon: {
    color: theme.colors.success,
    fontSize: 13,
  },
  locationText: {
    paddingLeft: 10,
    color: theme.colors.grey.dark,
    fontSize: 13,
  },
}

const MemberDetails = ({ name, expired, description, location }) => (
  <div style={styles.root}>
    <MemberName value={name} expired={expired} />
    <div style={styles.description}>{description}</div>
    {location ?
      <div style={styles.location}>
        <i className="fa fa-map-marker" style={styles.locationIcon} aria-hidden="true" />
        <span style={styles.locationText}>{location}</span>
      </div>
      : null
    }
  </div>
)

MemberDetails.propTypes = {
  name: PropTypes.string.isRequired,
  expired: PropTypes.bool.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
}

MemberDetails.defaultProps = {
  description: null,
  location: null,
  expired: false,
}

export default MemberDetails
