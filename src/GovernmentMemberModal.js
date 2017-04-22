import React from 'react'
import Modal from 'react-modal'

import CorporateAvatar from './CorporateAvatar'
import Button from './Button'
import MemberName from './MemberName'
import MemberDetailsItem from './MemberDetailsItem'
import MemberCertificationTotals from './MemberCertificationTotals'

import theme from './theme'

const styles = {
  root: {
    display: 'flex',
    color: theme.colors.grey.darker,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  modal: {
    overlay: {
      backgroundColor: 'rgba(44, 62, 80, 0.6)',
    },
    content: {
      width: 540,
      bottom: 'initial',
      padding: 0,
      margin: '50px auto 0 auto',
      borderRadius: 6,
      borderColor: '#FFFFFF',
    },
  },
  body: {
    padding: 40,
    display: 'flex',
    borderBottom: 'solid 1px #E7ECF1',
  },
  leftColumn: {},
  rightColumn: {
    paddingLeft: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  region: {
    marginTop: 10,
    fontSize: 16,
    color: '#5E738B',
  },
  link: {
    color: '#526825',
    textDecoration: 'none',
  },
  footer: {
    padding: '20px 40px',
    textAlign: 'right',
  },
}

const GovernmentMemberModal = ({ open, member, onClose }) => {
  const { name, avatar, expired, region, email, phone, fax, website, location } = member

  return (
    <Modal
      style={styles.modal}
      shouldCloseOnOverlayClick
      contentLabel="Profession Member Modal"
      isOpen={open}
      onRequestClose={onClose}
    >
      <div style={styles.body}>
        <div style={styles.leftColumn}>
          <CorporateAvatar image={avatar} />
        </div>
        <div style={styles.rightColumn}>
          <MemberName value={name} expired={expired} />
          <div style={styles.region}>{region}</div>
          <div style={{ marginBottom: 20 }} />
          {location ?
            <MemberDetailsItem icon="map-marker">
              <div>{location.address}</div>
              <div>{location.city}, {location.province}, {location.country}</div>
              <div>{location.postalCode}</div>
            </MemberDetailsItem>
            : null
          }
          {phone ? <MemberDetailsItem icon="phone">{phone}</MemberDetailsItem> : null}
          {fax ? <MemberDetailsItem icon="fax">{fax}</MemberDetailsItem> : null}
          {website ? <MemberDetailsItem icon="link"><a style={styles.link} href={website} target="_blank" rel="noopener noreferrer">Visit Website</a></MemberDetailsItem> : null}
          {email ? <MemberDetailsItem icon="envelope">{email}</MemberDetailsItem> : null}
        </div>
      </div>
      <div style={styles.footer}>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  )
}

GovernmentMemberModal.propTypes = {}

GovernmentMemberModal.defaultProps = {
  member: {},
}

export default GovernmentMemberModal
