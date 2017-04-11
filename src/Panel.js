import React from 'react'

import theme from './theme'

const styles = {
  root: {
    borderRadius: 2,
    border: 'solid 1px #E7ECF1',
  },
  header: {
    padding: '23px 21px',
    borderBottom: 'solid 1px #E7ECF1',
  },
  title: {
    fontSize: 18,
    color: theme.colors.grey.darker,
  },
}

const Panel = ({ title, children }) => {
  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <span style={styles.title}>{title}</span>
      </div>
      <div style={styles.body}>
        {children}
      </div>
    </div>
  )
}

export default Panel
