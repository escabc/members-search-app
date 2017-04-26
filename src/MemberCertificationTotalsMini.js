import React from 'react'

const styles = {
  root: {},
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 14,
  },
  itemName: {
    paddingTop: 8,
    paddingBottom: 8,
    width: 60,
    borderRadius: 2,
    backgroundColor: '#FBFCFD',
    border: 'solid 1px #E7ECF1',
    color: '#94A0B2',
    textAlign: 'center',
    fontSize: 12,
  },
  itemTotal: {
    marginLeft: 12,
    fontSize: 14,
    color: '#5E738B',
  },
  itemIcon: {
    marginLeft: 5,
    color: '#526825',
    fontSize: 10,
  },
}

const MemberCertificationTotalsMini = ({ CESCL, CPESC, CISEC }) => (
  <div style={styles.root}>
    {
      CESCL ?
        <div style={styles.item}>
          <div style={styles.itemName}>CESCL</div>
          <div style={styles.itemTotal}>{CESCL}</div>
          <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
        </div>
        : null
    }
    {
      CPESC ?
        <div style={styles.item}>
          <div style={styles.itemName}>CPESC</div>
          <div style={styles.itemTotal}>{CPESC}</div>
          <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
        </div>
        : null
    }
    {
      CISEC ?
        <div style={styles.item}>
          <div style={styles.itemName}>CISEC</div>
          <div style={styles.itemTotal}>{CISEC}</div>
          <i className="fa fa-users" style={styles.itemIcon} aria-hidden="true" />
        </div>
        : null
    }
  </div>
)

MemberCertificationTotalsMini.propTypes = {}

MemberCertificationTotalsMini.defaultProps = {
  value: [],
}

export default MemberCertificationTotalsMini
