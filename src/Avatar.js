import React, { PropTypes } from 'react'

import NoAvatarImage from './assets/default-professional-avatar.svg'

const styles = {
  root: {},
}

const Avatar = ({ image }) => (
  <div style={styles.root}>
    <img src={image} alt="no avatar" />
  </div>
)

Avatar.propTypes = {
  image: PropTypes.string,
}

Avatar.defaultProps = {
  image: NoAvatarImage,
}

export default Avatar
