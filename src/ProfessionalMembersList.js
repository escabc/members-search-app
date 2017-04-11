import React from 'react'

import Panel from './Panel'
import ProfessionalMembersItem from './ProfessionalMembersItem'

const styles = {
  root: {
    marginTop: 100,
  },
}

const ProfessionalMembersList = ({ members = [] }) => {
  return (
    <div style={styles.root}>
      <Panel title="Professional Members">
        {members.map(x => <ProfessionalMembersItem {...x} key={x.id} />)}
      </Panel>
    </div>
  )
}

export default ProfessionalMembersList
