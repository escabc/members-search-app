import React from 'react'

import MemberName from './MemberName'
import MemberCertifications from './MemberCertifications'

import theme from './theme'
import NoAvatarImage from './assets/no-user-img.svg'

const styles = {
  root: {
    display: 'flex',
    padding: 20,
  },
  info: {
    flex: 1,
    paddingLeft: 40,
  },
  name: {
    color: theme.colors.grey.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
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

const ProfessionalMembersItem = ({ name, company, certifications, expired }) => {
  return (
    <div style={styles.root}>
      <div style={styles.avatar}>
        <img src={NoAvatarImage} alt="no avatar" />
      </div>
      <div style={styles.info}>
        <MemberName value={name} expired={expired} />
        <div style={styles.company}>{company.name}</div>
        {company.location ?
          <div style={styles.location}>
            <i className="fa fa-map-marker" style={styles.locationIcon} aria-hidden="true" />
            <span style={styles.locationText}>{`${company.location.city}, ${company.location.province}`}</span>
          </div>
          : null
        }
      </div>
      <MemberCertifications {...certifications} />
    </div>
  )
}

export default ProfessionalMembersItem
