import React, { Component } from 'react'

import TextField from './TextField'
import SelectField from './SelectField'
import Button from './Button'
import CertificationsField from './CertificationsField'

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

class ProfessionalMembersFilter extends Component {
  state = {
    name: '',
    company: '',
    region: null,
    city: null,
    certifications: {
      CESCL: false,
      CPESC: false,
      CISEC: false,
    },
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onClick({
      ...this.state,
      certifications: Object.keys(this.state.certifications).filter(x => this.state.certifications[x]),
    })
  }

  handleCertificationsClick = (certification) => {
    const { certifications } = this.state
    certifications[certification] = !certifications[certification]
    this.setState({ certifications })
  }

  render() {
    const { name, company, region, city, certifications } = this.state
    const { cities } = this.props

    return (
      <form style={styles.root} onSubmit={this.handleSubmit}>
        <div style={styles.wrapper}>
          <TextField
            label="Search by Name"
            placeholder="Full Name"
            width={150}
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div style={styles.wrapper}>
          <TextField
            label="Search by Company"
            placeholder="Company Name"
            width={150}
            value={company}
            onChange={event => this.setState({ company: event.target.value })}
          />
        </div>
        <div style={styles.wrapper}>
          <SelectField
            label="Search by Region"
            placeholder="Select a Region"
            width={150}
            options={regions}
            onValueUpdated={x => this.setState({ region: x ? x.value : null })}
          />
        </div>
        <div style={styles.wrapper}>
          <SelectField
            label="Search by City"
            placeholder="Select a City"
            width={150}
            options={cities}
            onValueUpdated={x => this.setState({ city: x ? x.value : null })}
          />
        </div>
        <div style={styles.wrapper}>
          <CertificationsField {...certifications} onClick={this.handleCertificationsClick} />
        </div>
        <Button type="submit" styleType="primary">
          Search <i className="fa fa-search" aria-hidden="true" />
        </Button>
      </form>
    )
  }
}

export default ProfessionalMembersFilter
