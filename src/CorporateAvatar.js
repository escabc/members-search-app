import React, { PropTypes } from 'react'

import NoAvatarImage from './assets/default-corporate-avatar.svg'

const styles = {
  root: {
  },
  image: {
    width: 140,
  },
}

const CorporateAvatar = ({ image }) => {
  const src = image || NoAvatarImage

  return (
    <div style={styles.root}>
      <img style={styles.image} src={src} alt="no avatar" />
    </div>
  )
}

CorporateAvatar.propTypes = {
  image: PropTypes.string,
}

CorporateAvatar.defaultProps = {
  image: NoAvatarImage,
}

export default CorporateAvatar
