import React from 'react'
import PropTypes from 'prop-types'

import CorporateAvatar from './CorporateAvatar'
import MemberDetails from './MemberDetails'
import MemberCertificationTotals from './MemberCertificationTotals'

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

const CorporateMemberItem = ({ name, avatar, location, specialities, expired, totals, onClick }) => {
  const address = location.city && location.province ? `${location.city}, ${location.province}` : null

  return (
    <div style={styles.root}>
      <CorporateAvatar image={avatar} />
      <div style={styles.details} onClick={onClick}>
        <MemberDetails
          name={name}
          description={specialities[0]}
          location={address}
          expired={expired}
        />
      </div>
      <MemberCertificationTotals {...totals} />
    </div>
  )
}

CorporateMemberItem.propTypes = {
  name: PropTypes.string.isRequired,
  expired: PropTypes.bool.isRequired,
}

export default CorporateMemberItem
