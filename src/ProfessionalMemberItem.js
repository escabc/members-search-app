import React from 'react'
import PropTypes from 'prop-types'

import MemberDetails from './MemberDetails'
import MemberCertifications from './MemberCertifications'
import Avatar from './Avatar'

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

const ProfessionalMemberItem = ({ name, company, location, certifications, expired, onClick }) => {
  const address = location.city && location.province ? `${location.city}, ${location.province}` : null

  return (
    <div style={styles.root}>
      <Avatar />
      <div style={styles.details} onClick={onClick}>
        <MemberDetails
          name={name}
          description={company}
          location={address}
          expired={expired}
        />
      </div>
      <MemberCertifications {...certifications} />
    </div>
  )
}

ProfessionalMemberItem.propTypes = {
  name: PropTypes.string.isRequired,
  expired: PropTypes.bool.isRequired,
}

export default ProfessionalMemberItem
