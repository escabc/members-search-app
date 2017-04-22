import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from './TextField'
import SelectField from './SelectField'
import Button from './Button'

import { regions } from './utils'

const styles = {
  root: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  wrapper: {
    marginRight: 10,
  },
}

class GovernmentMembersFilter extends Component {
  state = {
    name: '',
    region: null,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onClick({ ...this.state })
  }

  render() {
    const { name, region } = this.state

    return (
      <form style={styles.root} onSubmit={this.handleSubmit}>
        <div style={styles.wrapper}>
          <TextField
            label="Search by Name"
            placeholder="Name"
            width={240}
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div style={styles.wrapper}>
          <SelectField
            label="Search by Region"
            placeholder="Select a Region"
            width={200}
            value={region}
            options={regions}
            onChange={x => this.setState({ region: x ? x.value : null })}
          />
        </div>
        <Button type="submit" styleType="primary">
          Search <i className="fa fa-search" aria-hidden="true" />
        </Button>
      </form>
    )
  }
}

GovernmentMembersFilter.propTypes = {
  onClick: PropTypes.func,
}

GovernmentMembersFilter.defaultProps = {
  onClick: () => {},
}

export default GovernmentMembersFilter
