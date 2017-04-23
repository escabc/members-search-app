import React, { PropTypes } from 'react'

const createStyles = ({ image }) => {
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 140,
      height: 80,
      backgroundColor: image ? '#FFFFFF' : '#FBFCFD',
      border: 'solid 1px #e7ecf1',
    },
    icon: {
      fontSize: 30,
      color: '#C2CAD8',
    },
    image: {
      width: 120,
    },
  }

  return styles
}

const CorporateAvatar = ({ image }) => {
  const styles = createStyles({ image })

  return (
    <div style={styles.root}>
      {
        image
          ? <img style={styles.image} src={image} alt="no avatar" />
          : <i className="fa fa-briefcase" style={styles.icon} aria-hidden="true" />
      }
    </div>
  )
}

CorporateAvatar.propTypes = {
  image: PropTypes.string,
}

CorporateAvatar.defaultProps = {
}

export default CorporateAvatar
