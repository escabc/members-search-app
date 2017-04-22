import React, { PropTypes } from 'react'
import { withRouter } from 'react-router-dom'

import NavigationItem from './NavigationItem'

const styles = {
  root: {
    display: 'flex',
    borderBottom: 'solid 1px #E7ECF1',
  },
}

const items = [
  { id: '/professional', title: 'Professional', icon: 'user' },
  { id: '/corporate', title: 'Corporate', icon: 'briefcase' },
  { id: '/government', title: 'Government', icon: 'flag' },
]

const Navigation = ({ active, location, onClick }) => {
  return (
    <div style={styles.root}>
      {items.map(x => <NavigationItem
        {...x}
        key={x.id}
        active={location.pathname === x.id}
        onClick={() => onClick(x.id)}
      />)}
    </div>
  )
}

Navigation.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const NavigationWithRouter = withRouter(Navigation)

export default NavigationWithRouter
