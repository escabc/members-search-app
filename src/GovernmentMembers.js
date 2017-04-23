import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Paginate from 'react-paginate'
import jump from 'jump.js'

import GovernmentMembersFilter from './GovernmentMembersFilter'
import GovernmentMemberList from './GovernmentMemberList'
import GovernmentMemberModal from './GovernmentMemberModal'

const PER_PAGE = 50

class GovernmentMembers extends Component {
  state = {
    members: [],
    selectedMember: {},
    filteredMembers: [],
    offset: 0,
    pageCount: 0,
    open: false,
    mounted: false,
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  componentWillReceiveProps(nextProps) {
    const { data: { governmentMembers: members = [] } } = nextProps
    this.setState({
      members,
      filteredMembers: members,
      pageCount: Math.ceil(members.length / PER_PAGE),
    })
  }

  handleFilterClick = (filter) => {
    const { members } = this.state
    let filteredMembers = members
    const nameFilter = filter.name.trim()
    if (nameFilter && nameFilter.length) {
      filteredMembers = filteredMembers.filter(x => x.name.match(new RegExp(nameFilter, 'i')))
    }
    if (filter.region) {
      filteredMembers = filteredMembers.filter(x => x.regions.includes(filter.region))
    }

    this.setState({
      filteredMembers,
      pageCount: Math.ceil(filteredMembers.length / PER_PAGE),
      offset: 0,
    })
  }

  handlePageChange = ({ selected }) => {
    if (this.state.mounted) {
      jump('#members-list')
    }
    const offset = Math.ceil(selected * PER_PAGE)
    this.setState({ offset })
  }

  handleMemberClick = (member) => {
    this.setState({ open: true, selectedMember: member })
  }

  handleModalClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { filteredMembers, offset, open, selectedMember } = this.state
    const members = [...filteredMembers.slice(offset, offset + PER_PAGE)]

    return (
      <div style={{ marginTop: 50 }}>
        <GovernmentMembersFilter onClick={this.handleFilterClick} />
        <GovernmentMemberList members={members} onMemberClick={this.handleMemberClick} />
        <div style={{ marginTop: 40, marginBottom: 100, float: 'right' }}>
          <Paginate
            previousLabel={<i className="fa fa-angle-left" aria-hidden="true" />}
            nextLabel={<i className="fa fa-angle-right" aria-hidden="true" />}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={10}
            pageRangeDisplayed={10}
            onPageChange={this.handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            initialPage={0}
          />
        </div>
        <GovernmentMemberModal
          open={open}
          member={selectedMember}
          onClose={this.handleModalClose}
        />
      </div>
    )
  }
}

const GovernmentMembersWithData = graphql(gql`
  query GovernmentMembersQuery {
    governmentMembers {
      id
      name
      description
      avatar
      regions
      location {
        address
        city
        province
        country
        postalCode
      }
      registeredAt
      expired
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(GovernmentMembers)

export default GovernmentMembersWithData
