import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Paginate from 'react-paginate'
import jump from 'jump.js'

import CorporateMembersFilter from './CorporateMembersFilter'
import CorporateMemberList from './CorporateMemberList'
import CorporateMemberModal from './CorporateMemberModal'

const PER_PAGE = 50

function CorporateMembers() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const GET_MEMBERS = gql`
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
  `;

  const { loading, error, data } = useQuery(GET_MEMBERS);

  useEffect(() => {
    setMounted(true);
    if (data && members.length === 0) {
      console.log(data);
      setMembers(data.corporateMembers);
      setFilteredMembers(data.corporateMembers);
      setPageCount(Math.ceil(data.corporateMembers.length / PER_PAGE));
    }
  });

  const handleFilterClick = (filter) => {
    let filtered = members
    const nameFilter = filter.name.trim()
    if (nameFilter && nameFilter.length) {
      filtered = filtered.filter(x => x.name.match(new RegExp(nameFilter, 'i')))
    }
    if (filter.region) {
      filtered = filtered.filter(x => x.regions.includes(filter.region))
    }
    if (filter.speciality) {
      filtered = filtered.filter(x => x.specialities.includes(filter.speciality))
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

  const shownMembers = [...filteredMembers.slice(offset, offset + PER_PAGE)]

  return (
    <div style={{ marginTop: 50 }}>
        <CorporateMembersFilter onClick={handleFilterClick} />
        <CorporateMemberList members={shownMembers} onMemberClick={handleMemberClick} />
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
        <CorporateMemberModal
          open={open}
          member={selectedMember}
          onClose={handleModalClose}
        />
      </div>
  );

}


export default CorporateMembers;
