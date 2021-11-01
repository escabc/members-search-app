import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Paginate from 'react-paginate'
import jump from 'jump.js'

import GovernmentMembersFilter from './GovernmentMembersFilter'
import GovernmentMemberList from './GovernmentMemberList'
import GovernmentMemberModal from './GovernmentMemberModal'

const PER_PAGE = 25

function GovernmentMembers() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const GET_MEMBERS = gql`
    query GovernmentMembersQuery {
      governmentMembers {
        id
        name
        description
        email
        phone
        fax
        website
        avatar
        regions
        location {
          address
          city
          province
          country
          postalCode
        }
        contact {
          name
          department
          phone
          email
        }
        program {
          website
          rainfallLink
        }
        registeredAt
        expired
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MEMBERS);

  useEffect(() => {
    setMounted(true);
    if (data && members.length === 0) {
      setMembers(data.governmentMembers);
      setFilteredMembers(data.governmentMembers);
      setPageCount(Math.ceil(data.governmentMembers.length / PER_PAGE));
    }
  });

  const handleFilterClick = (filter) => {
    let filtered = members;
    const nameFilter = filter.name.trim()
    if (nameFilter && nameFilter.length) {
      filtered = filtered.filter(x => x.name.match(new RegExp(nameFilter, 'i')))
    }
    if (filter.region) {
      filtered = filtered.filter(x => {
        return x.regions.includes(filter.region);
      });
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

  const shownMembers = [...filteredMembers.slice(offset, offset + PER_PAGE)];

  return (
    <div style={{ marginTop: 50 }}>
      <GovernmentMembersFilter onClick={handleFilterClick} />
      <GovernmentMemberList members={shownMembers} onMemberClick={handleMemberClick} />
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
      <GovernmentMemberModal
        open={open}
        member={selectedMember}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default GovernmentMembers;
