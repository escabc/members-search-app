import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

import Navigation from './Navigation'

class MembersSearch extends Component {
  state = {
    active: 'professional',
  }

  handleNavigationClick = (id) => {
    this.setState({ active: id })
  }

  render() {
    const { active } = this.state

    return (
      <Navigation active={active} onClick={this.handleNavigationClick} />
    )
  }
}

const MembersSearchWithData = graphql(gql`
  query MembersQuery {
    members {
      name
      company { name city }
      certifications
      type
      expiredAt
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(MembersSearch)

export default MembersSearchWithData
