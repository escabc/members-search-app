import React, { PropTypes } from 'react'

import NoAvatarImage from './assets/default-corporate-avatar.svg'

const styles = {
  root: {},
}

const CorporateAvatar = ({ image }) => (
  <div style={styles.root}>
    <img src={image} alt="no avatar" />
  </div>
)

CorporateAvatar.propTypes = {
  image: PropTypes.string,
}

CorporateAvatar.defaultProps = {
  image: NoAvatarImage,
}

export default CorporateAvatar
