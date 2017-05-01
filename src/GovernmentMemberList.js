import React from 'react'
import PropTypes from 'prop-types'

import Panel from './Panel'
import GovernmentMemberItem from './GovernmentMemberItem'

const styles = {
  root: {
    marginTop: 50,
  },
}

const GovernmentMemberList = ({ members = [], onMemberClick }) => (
  <div style={styles.root}>
    <Panel title="Government Members" id="members-list">
      {members.map(x => <GovernmentMemberItem
        {...x}
        key={x.id}
        onClick={() => onMemberClick(x)}
      />)}
    </Panel>
  </div>
)

GovernmentMemberList.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberClick: PropTypes.func.isRequired,
}

export default GovernmentMemberList
