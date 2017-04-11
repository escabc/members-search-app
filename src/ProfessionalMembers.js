import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Paginate from 'react-paginate'

import ProfessionalMembersFilter from './ProfessionalMembersFilter'
import ProfessionalMembersList from './ProfessionalMembersList'

const PER_PAGE = 5

class ProfessionalMembers extends Component {
  state = {
    members: [],
    filteredMembers: [],
    offset: 0,
    pageCount: 0,
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
    const filteredMembers = members.filter((x) => {
      // TODO: refactor big time
      const n = x.name.toLowerCase().match(filter.name)
      let c = true
      if (x.company && x.company.name) {
        c = x.company.name.toLowerCase().match(filter.company)
      }
      let cert = true
      const certifications = Object.keys(x.certifications).filter(k => x.certifications[k])
      if (filter.certifications.length) {
        cert = filter.certifications.every(y => certifications.includes(y))
      }

      return n && c && cert
    })

    this.setState({
      filteredMembers,
      pageCount: Math.ceil(filteredMembers.length / PER_PAGE),
      offset: 0,
    })
  }

  handlePageChange = ({ selected }) => {
    const offset = Math.ceil(selected * PER_PAGE)
    this.setState({ offset })
  };

  render() {
    const { filteredMembers, offset } = this.state
    const members = [...filteredMembers.slice(offset, offset + PER_PAGE)]

    return (
      <div style={{ marginTop: 100 }}>
        <ProfessionalMembersFilter onClick={this.handleFilterClick} />
        <ProfessionalMembersList members={members} />
        <div style={{ marginTop: 40, marginBottom: 100, float: 'right' }}>
          <Paginate
            previousLabel={<i className="fa fa-angle-left" aria-hidden="true" />}
            nextLabel={<i className="fa fa-angle-right" aria-hidden="true" />}
            breakLabel={<a href="">...</a>}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            initialPage={0}
          />
        </div>
      </div>
    )
  }
}

const ProfessionalMembersWithData = graphql(gql`
  query ProfessionalMembersQuery {
    professionalMembers {
      id
      name
      company { name location { city province } }
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
