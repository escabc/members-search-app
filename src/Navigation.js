import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import NavigationItem from './NavigationItem'
import Button from './Button'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'solid 1px #E7ECF1',
  },
}

const items = [
  { id: '/professional', title: 'Professional', icon: 'user' },
  { id: '/corporate', title: 'Corporate', icon: 'briefcase' },
  { id: '/government', title: 'Government', icon: 'flag' },
]

const Navigation = ({ location, onClick }) => (
  <div style={styles.root}>
    {items.map(x => <NavigationItem
      {...x}
      key={x.id}
      active={location.pathname === x.id}
      onClick={() => onClick(x.id)}
    />)}
    <div style={{ flex: 1, textAlign: 'right' }}>
      <Button styleType="primary" onClick={() => (window.location.href = 'http://escabc.com/?page=Membership1')}>Become a Member</Button>
    </div>
  </div>
)

Navigation.propTypes = {
  onClick: PropTypes.func,
}

Navigation.defaultProps = {
  onClick: () => {},
}

const NavigationWithRouter = withRouter(Navigation)

export default NavigationWithRouter
