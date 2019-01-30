import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Paginate from 'react-paginate'
import jump from 'jump.js'
import _ from 'lodash'

import ProfessionalMembersFilter from './ProfessionalMembersFilter'
import ProfessionalMembersList from './ProfessionalMembersList'
import ProfessionalMemberModal from './ProfessionalMemberModal'

const PER_PAGE = 50

class ProfessionalMembers extends Component {
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
    const { data: { professionalMembers: members = [] } } = nextProps
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
    const companyFilter = filter.company.trim()
    if (companyFilter && companyFilter.length) {
      filteredMembers = filteredMembers.filter(x => x.company).filter(x => x.company.match(new RegExp(companyFilter, 'i')))
    }
    if (filter.region) {
      filteredMembers = filteredMembers.filter(x => x.regions.includes(filter.region))
    }
    if (filter.city) {
      filteredMembers = filteredMembers.filter(x => x.location.city).filter(x => x.location.city.match(new RegExp(filter.city, 'i')))
    }
    if (filter.certifications.length) {
      filteredMembers = filteredMembers.filter((member) => {
        const certifications = Object
          .keys(member.certifications)
          .filter(x => member.certifications[x])

        return filter.certifications.every(x => certifications.includes(x))
      })
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
    const rawCities = _.compact(this.state.members.map((member) => {
      if (member.location && member.location.city) {
        const city = member.location.city

        return { value: city, label: city }
      }

      return null
    }))
    const uniqueCities = _.uniqBy(rawCities, 'value')
    const sortedCities = _.sortBy(uniqueCities, 'value')
    const { filteredMembers, offset, open, selectedMember } = this.state
    const members = [...filteredMembers.slice(offset, offset + PER_PAGE)]

    return (
      <div style={{ marginTop: 50 }}>
        <ProfessionalMembersFilter cities={sortedCities} onClick={this.handleFilterClick} />
        <ProfessionalMembersList members={members} onMemberClick={this.handleMemberClick} />
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
        <ProfessionalMemberModal
          open={open}
          member={selectedMember}
          onClose={this.handleModalClose}
        />
      </div>
    )
  }
}

const ProfessionalMembersWithData = graphql(gql`
  query ProfessionalMembersQuery {
    professionalMembers {
      id
      name
      title
      email
      website
      phone
      mobile
      fax
      company
      regions
      location { address city province country postalCode }
      certifications {
        CESCL
        CESCLExpired
        CPESC
        CISEC
      }
      expired
    }
  }
`, { options: { notifyOnNetworkStatusChange: true } })(ProfessionalMembers)

export default ProfessionalMembersWithData
