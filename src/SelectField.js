import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectField extends Component {
  state = {
    selectedOption: null,
  }

  createStyles = ({ width }) => {
    const styles = {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width,
      },
      label: {
        paddingLeft: 10,
        marginBottom: 5,
      },
    }
  
    return styles
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });

    this.props.onValueUpdated(selectedOption);
  }

  render() {
    const styles = this.createStyles({ width: this.props.width })

    return (
      <div style={styles.root}>
        <div style={styles.label}>{this.props.label}</div>
        <Select
          placeholder={this.props.placeholder}
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.props.options}
        />
      </div>
        
    )
  }
}

SelectField.propTypes = {
  selectedOption: PropTypes.string,
}

SelectField.defaultProps = {
  width: 170,
  selectedOption: null,
}

export default SelectField
