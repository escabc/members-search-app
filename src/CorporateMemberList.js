import React from 'react'
import PropTypes from 'prop-types'

import Panel from './Panel'
import CorporateMemberItem from './CorporateMemberItem'

const styles = {
  root: {
    marginTop: 50,
  },
}

const CorporateMemberList = ({ members = [], onMemberClick }) => (
  <div style={styles.root}>
    <Panel title="Corporate Members" id="members-list">
      {members.map(x => <CorporateMemberItem
        {...x}
        key={x.id}
        onClick={() => onMemberClick(x)}
      />)}
    </Panel>
  </div>
)

CorporateMemberList.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberClick: PropTypes.func.isRequired,
}

export default CorporateMemberList
