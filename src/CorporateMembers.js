import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Paginate from 'react-paginate'
import jump from 'jump.js'

import CorporateMembersFilter from './CorporateMembersFilter'
import CorporateMemberList from './CorporateMemberList'
import CorporateMemberModal from './CorporateMemberModal'

const PER_PAGE = 50

class CorporateMembers extends Component {
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
    const { data: { corporateMembers: members = [] } } = nextProps
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
    if (filter.speciality) {
      filteredMembers = filteredMembers.filter(x => x.specialities.includes(filter.speciality))
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
        <CorporateMembersFilter onClick={this.handleFilterClick} />
        <CorporateMemberList members={members} onMemberClick={this.handleMemberClick} />
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
        <CorporateMemberModal
          open={open}
          member={selectedMember}
          onClose={this.handleModalClose}
        />
      </div>
    )
  }
}

const CorporateMembersWithData = graphql(gql`
  query CorporateMembersQuery {
    corporateMembers {
      id
      name
      description
      specialities
      email
      phone
      fax
      website
      regions
      avatar
      location { address city province country postalCode }
      contact
      totals { CESCL CPESC CISEC }
      registeredAt
      expired
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(CorporateMembers)

export default CorporateMembersWithData
