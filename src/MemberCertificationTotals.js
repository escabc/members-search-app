import React from 'react'

const styles = {
  root: {
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  itemName: {
    paddingTop: 8,
    paddingBottom: 8,
    width: 70,
    borderRadius: 2,
    backgroundColor: '#FBFCFD',
    border: 'solid 1px #E7ECF1',
    color: '#94A0B2',
    textAlign: 'center',
  },
  itemTotal: {
    marginLeft: 30,
    fontSize: 20,
    color: '#5E738B',
  },
  itemIcon: {
    marginLeft: 10,
    color: '#526825',
  },
}

const MemberCertificationTotals = ({ CESCL, CPESC, CISEC }) => (
  <div style={styles.root}>
    <div style={styles.item}>
      <div style={styles.itemName}>CESCL</div>
      <div style={styles.itemTotal}>{CESCL}</div>
      <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
    </div>
    <div style={{ ...styles.item, marginTop: 12, marginBottom: 12 }}>
      <div style={styles.itemName}>CPESC</div>
      <div style={styles.itemTotal}>{CPESC}</div>
      <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
    </div>
    <div style={styles.item}>
      <div style={styles.itemName}>CISEC</div>
      <div style={styles.itemTotal}>{CISEC}</div>
      <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
    </div>
  </div>
)

MemberCertificationTotals.propTypes = {}

MemberCertificationTotals.defaultProps = {
  value: [],
}

export default MemberCertificationTotals
