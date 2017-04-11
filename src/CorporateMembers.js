import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class CorporateMembers extends Component {
  render() {
    const { data: { corporateMembers: members } } = this.props
    console.log(members)

    return (
      <div>corporate</div>
    )
  }
}

const CorporateMembersWithData = graphql(gql`
  query CorporateMembersQuery {
    corporateMembers {
      name
      expiredAt
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(CorporateMembers)

export default CorporateMembersWithData
