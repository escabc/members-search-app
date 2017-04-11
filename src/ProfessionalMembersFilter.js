import React, { Component } from 'react'

import TextField from './TextField'
import SelectField from './SelectField'
import Button from './Button'
import CertificationsField from './CertificationsField'

const regions = [
  { value: 'Vancouver Island', label: 'Vancouver Island' },
  { value: 'Lower Mainland', label: 'Lower Mainland' },
  { value: 'Thompson', label: 'Thompson' },
  { value: 'Kootenay', label: 'Kootenay' },
  { value: 'Cariboo', label: 'Cariboo' },
  { value: 'Skeena', label: 'Skeena' },
  { value: 'Omineca', label: 'Omineca' },
  { value: 'Okanagan', label: 'Okanagan' },
  { value: 'Peace', label: 'Peace' },
]

const styles = {
  root: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'flex-end',
    // justifyContent: 'space-between',
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
    const { onClick } = this.props

    return (
      <form style={styles.root} onSubmit={this.handleSubmit}>
        <TextField
          label="Search by Name"
          placeholder="Full Name"
          value={name}
          onChange={event => this.setState({ name: event.target.value.trim() })}
        />
        <TextField
          label="Search by Company"
          placeholder="Company Name"
          value={company}
          onChange={event => this.setState({ company: event.target.value.trim() })}
        />
        <SelectField
          label="Search by Region"
          clearable={false}
          placeholder="Select a Region"
          value={region}
          options={regions}
          onChange={x => this.setState({ region: x })}
        />
        <SelectField
          label="Search by City"
          clearable={false}
          placeholder="Select a City"
          value={city}
          options={[{ value: 'vancouver', label: 'Vancouver' }]}
          onChange={x => this.setState({ city: x })}
        />
        <CertificationsField {...certifications} onClick={this.handleCertificationsClick} />
        <Button type="submit">
          Search <i className="fa fa-search" aria-hidden="true" />
        </Button>
      </form>
    )
  }
}

export default ProfessionalMembersFilter
