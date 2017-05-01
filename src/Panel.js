import React from 'react'

import theme from './theme'

const styles = {
  root: {
    borderRadius: 2,
    border: 'solid 1px #E7ECF1',
  },
  header: {
    padding: '20px 40px',
    borderBottom: 'solid 1px #E7ECF1',
  },
  title: {
    fontSize: 18,
    color: theme.colors.grey.darker,
  },
}

const Panel = ({ title, id, children }) => {
  return (
    <div style={styles.root} id={id}>
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
