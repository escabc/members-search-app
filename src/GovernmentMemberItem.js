import React from 'react'
import PropTypes from 'prop-types'

import CorporateAvatar from './CorporateAvatar'
import MemberDetails from './MemberDetails'

const styles = {
  root: {
    display: 'flex',
    padding: '20px 40px',
    borderBottom: 'solid 1px #E7ECF1',
  },
  details: {
    flex: 1,
    paddingLeft: 40,
    cursor: 'pointer',
  },
}

const GovernmentMemberItem = ({ name, location, regions, expired, onClick }) => {
  const address = location.city && location.province ? `${location.city}, ${location.province}` : null

  return (
    <div style={styles.root}>
      <CorporateAvatar />
      <div style={styles.details} onClick={onClick}>
        <MemberDetails
          name={name}
          description={regions[0]}
          location={address}
          expired={expired}
        />
      </div>
    </div>
  )
}

GovernmentMemberItem.propTypes = {
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  expired: PropTypes.bool.isRequired,
}

export default GovernmentMemberItem
