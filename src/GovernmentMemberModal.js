import React from 'react'
import Modal from 'react-modal'

import ModalSection from './ModalSection'
import CorporateAvatar from './CorporateAvatar'
import Button from './Button'
import MemberName from './MemberName'
import MemberDetailsItem from './MemberDetailsItem'

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
      overflowY: 'scroll',
      backgroundColor: 'rgba(44, 62, 80, 0.6)',
    },
    content: {
      width: 600,
      bottom: 'initial',
      padding: 0,
      margin: '0 auto 0 auto',
      borderRadius: 6,
      borderColor: '#FFFFFF',
    },
  },
  header: {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    leftColumn: {
      padding: 24,
      width: 185,
      backgroundColor: '#FAFAFA',
    },
    rightColumn: {
      paddingLeft: 20,
    },
  },
  body: {
    root: {
      display: 'flex',
      borderBottom: 'solid 1px #E7ECF1',
    },
    leftColumn: {
      paddingLeft: 24,
      flex: '0 0 185px',
      backgroundColor: '#FAFAFA',
    },
    rightColumn: {
      paddingLeft: 20,
    },
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  description: {
    marginTop: 20,
    color: '#5E738B',
    fontSize: 13,
    lineHeight: '18px',
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
    display: 'flex',
    justifyContent: 'flex-end',
  },
}

const GovernmentMemberModal = ({ open, member, onClose }) => {
  const {
    name,
    description,
    avatar,
    expired,
    regions = [],
    email,
    phone,
    fax,
    website,
    location = {},
    contact = {},
    program = {},
  } = member

  return (
    <Modal
      style={styles.modal}
      shouldCloseOnOverlayClick
      contentLabel="Government Member Modal"
      isOpen={open}
      onRequestClose={onClose}
    >
      <div style={styles.header.root}>
        <div style={styles.header.leftColumn}>
          <CorporateAvatar image={avatar} />
        </div>
        <div style={styles.header.rightColumn}>
          <MemberName value={name} expired={expired} />
          <div style={styles.region}>{regions[0]}</div>
        </div>
      </div>
      <div style={styles.body.root}>
        <div style={styles.body.leftColumn} />
        <div style={styles.body.rightColumn}>
          <ModalSection title="Contact Info">
            {location ?
              <MemberDetailsItem icon="map-marker">
                <div>{location.address} {location.city}</div>
                <div>{location.province}, {location.country} {location.postalCode}</div>
              </MemberDetailsItem>
              : null
            }
            {phone ? <MemberDetailsItem icon="phone">{phone}</MemberDetailsItem> : null}
            {fax ? <MemberDetailsItem icon="fax">{fax}</MemberDetailsItem> : null}
            {website ? <MemberDetailsItem icon="link"><a style={styles.link} href={website} target="_blank" rel="noopener noreferrer">Visit Website</a></MemberDetailsItem> : null}
            {email ? <MemberDetailsItem icon="envelope">{email}</MemberDetailsItem> : null}
          </ModalSection>
          <ModalSection title="ESC Contact">
            {contact.name ? <MemberDetailsItem icon="user">{contact.name}</MemberDetailsItem> : null}
            {contact.department ? <MemberDetailsItem icon="briefcase">{contact.department}</MemberDetailsItem> : null}
            {contact.phone ? <MemberDetailsItem icon="phone">{contact.phone}</MemberDetailsItem> : null}
            {contact.email ? <MemberDetailsItem icon="envelope">{contact.email}</MemberDetailsItem> : null}
          </ModalSection>
          <ModalSection title="ESC Program Information">
            {program.website ? <MemberDetailsItem icon="link"><a style={styles.link} href={program.website} target="_blank" rel="noopener noreferrer">Visit Website</a></MemberDetailsItem> : null}
            {program.rainfallLink ? <MemberDetailsItem icon="tint"><a style={styles.link} href={program.rainfallLink} target="_blank" rel="noopener noreferrer">Check Rainfall Information</a></MemberDetailsItem> : null}
          </ModalSection>
          {description ? <div style={styles.description}>{description}</div> : null}
        </div>
      </div>
      <div style={styles.footer}>
        <Button onClick={onClose}>Close</Button>
        {expired ? <Button styleType="warning" style={{ marginLeft: 20 }} onClick={() => (window.location.href = 'https://escabc.site-ym.com/login.aspx?returl=/default.asp?')}>Renew Membership</Button> : null}
      </div>
    </Modal>
  )
}

GovernmentMemberModal.propTypes = {}

GovernmentMemberModal.defaultProps = {
  member: {},
}

export default GovernmentMemberModal
