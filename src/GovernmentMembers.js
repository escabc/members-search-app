import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class GovernmentMembers extends Component {
  render() {
    const { data: { governmentMembers: members } } = this.props
    console.log(members)

    return (
      <div>government</div>
    )
  }
}

const GovernmentMembersWithData = graphql(gql`
  query GovernmentMembersQuery {
    governmentMembers {
      name
      company { name city }
      certifications
      expiredAt
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(GovernmentMembers)

export default GovernmentMembersWithData
