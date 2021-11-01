import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Paginate from 'react-paginate'
import jump from 'jump.js'
import _ from 'lodash'

import ProfessionalMembersFilter from './ProfessionalMembersFilter'
import ProfessionalMembersList from './ProfessionalMembersList'
import ProfessionalMemberModal from './ProfessionalMemberModal'

const PER_PAGE = 25

function ProfessionalMembers() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const GET_MEMBERS = gql`
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
  `;

  const { loading, error, data } = useQuery(GET_MEMBERS);

  useEffect(() => {
    setMounted(true);
    if (data && members.length === 0) {
      setMembers(data.professionalMembers);
      setFilteredMembers(data.professionalMembers);
      setPageCount(Math.ceil(data.professionalMembers.length / PER_PAGE));
    }
  });

  const handleFilterClick = (filter) => {
    // const { members } = this.state
    // const allMembers = members;
    let filtered = members
    const nameFilter = filter.name.trim()
    if (nameFilter && nameFilter.length) {
      filtered = filtered.filter(x => x.name.match(new RegExp(nameFilter, 'i')))
    }
    const companyFilter = filter.company.trim()
    if (companyFilter && companyFilter.length) {
      filtered = filtered.filter(x => x.company).filter(x => x.company.match(new RegExp(companyFilter, 'i')))
    }
    if (filter.region) {
      filtered = filtered.filter(x => x.regions.includes(filter.region))
    }
    if (filter.city) {
      filtered = filtered.filter(x => x.location.city).filter(x => x.location.city.match(new RegExp(filter.city, 'i')))
    }
    if (filter.certifications.length) {
      filtered = filtered.filter((member) => {
        const certifications = Object
          .keys(member.certifications)
          .filter(x => member.certifications[x])

        return filter.certifications.every(x => certifications.includes(x))
      })
    }

    setFilteredMembers(filtered);
    setPageCount(Math.ceil(filtered.length / PER_PAGE));
    setOffset(0);
  }

  const handlePageChange = ({ selected }) => {
    if (mounted) {
      jump('#members-list')
    }
    
    setOffset(Math.ceil(selected * PER_PAGE));
  }

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpen(true);
  }

  const handleModalClose = () => {
    setOpen(false);
  }

  const rawCities = _.compact(members.map((member) => {
    if (member.location && member.location.city) {
      const city = member.location.city

      return { value: city, label: city }
    }

    return null
  }))
  const uniqueCities = _.uniqBy(rawCities, 'value')
  const sortedCities = _.sortBy(uniqueCities, 'value')
  const shownMembers = [...filteredMembers.slice(offset, offset + PER_PAGE)]
  const sortedCitiesWithDefault = [
    {
      value: null,
      label: 'All'
    },
    ...sortedCities
  ]
  
  return (
    <div style={{ marginTop: 50 }}>
      <ProfessionalMembersFilter cities={sortedCitiesWithDefault} onClick={handleFilterClick} />
      <ProfessionalMembersList members={shownMembers} onMemberClick={handleMemberClick} />
      <div style={{ marginTop: 40, marginBottom: 100, float: 'right' }}>
        <Paginate
          previousLabel={<i className="fa fa-angle-left" aria-hidden="true" />}
          nextLabel={<i className="fa fa-angle-right" aria-hidden="true" />}
          pageCount={pageCount}
          marginPagesDisplayed={10}
          pageRangeDisplayed={10}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          initialPage={0}
        />
      </div>
      <ProfessionalMemberModal
        open={open}
        member={selectedMember}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default ProfessionalMembers
