import React from 'react'
import ReactTooltip from 'react-tooltip'

import theme from './theme'

const getStyles = ({ CESCL, CESCLExpired, CPESC, CISEC }) => {
  const banner = {
    padding: '6px 10px',
    borderRadius: 2,
    fontSize: 14,
    border: 'solid 1px #E7ECF1',
    backgroundColor: theme.colors.grey.background,
    color: theme.colors.grey.regular,
    textDecoration: 'none',
  }
  const styles = {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: 225,
    },
    CESCL: {
      ...banner,
      marginRight: 10,
      border: `solid 1px ${theme.colors.success}`,
      backgroundColor: theme.colors.success,
      color: '#FFFFFF',
    },
    CPESC: {
      ...banner,
      marginRight: 10,
    },
    CISEC: {
      ...banner,
      marginRight: 10,
    },
    icon: {
      width: 12,
      height: 12,
      color: '#F3C200',
    },
  }

  styles.CESCL.display = CESCL ? 'initial' : 'none'
  if (CESCLExpired) {
    styles.CESCL.border = `solid 1px ${theme.colors.warning}`
    styles.CESCL.backgroundColor = theme.colors.warning
  }

  styles.CPESC.display = CPESC ? 'initial' : 'none'
  styles.CISEC.display = CISEC ? 'initial' : 'none'

  return styles
}

const MemberCertifications = (props) => {
  const styles = getStyles(props)
  const showIcon = props.CESCL || props.CPESC || props.CISEC

  return (
    <div style={styles.root}>
      <a href="http://escabc.com/?page=Course_CESCL" style={styles.CESCL}>CESCL</a>
      <a href="http://escabc.com/?page=CPESC" style={styles.CPESC}>CPESC</a>
      <a href="http://escabc.com/?page=CISEC" style={styles.CISEC}>CISEC</a>
      {showIcon ? <a><i className="fa fa-info-circle" style={styles.icon} aria-hidden="true" data-tip data-for="list-tooltip" /></a> : null}
      <ReactTooltip id="list-tooltip" class="msa-tooltip" effect="solid" place="right">
        <div>
          <strong>Green</strong> - certification is valid
        </div>
        <div>
          <strong>Yellow</strong> - certification is expired
        </div>
        <div>
          <strong>Grey</strong> - administered by other governing bodies
        </div>
        <div>Click on certification for more information.</div>
      </ReactTooltip>
    </div>
  )
}

MemberCertifications.propTypes = {}

MemberCertifications.defaultProps = {
  value: [],
}

export default MemberCertifications
