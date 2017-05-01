import React from 'react'
import PropTypes from 'prop-types'

import Panel from './Panel'
import ProfessionalMemberItem from './ProfessionalMemberItem'

const styles = {
  root: {
    marginTop: 50,
  },
}

const ProfessionalMembersList = ({ members = [], onMemberClick }) => (
  <div style={styles.root}>
    <Panel title="Professional Members" id="members-list">
      {members.map(x => <ProfessionalMemberItem
        {...x}
        key={x.id}
        onClick={() => onMemberClick(x)}
      />)}
    </Panel>
  </div>
)

ProfessionalMembersList.propTypes = {
  members: PropTypes.array.isRequired,
  onMemberClick: PropTypes.func.isRequired,
}

export default ProfessionalMembersList
