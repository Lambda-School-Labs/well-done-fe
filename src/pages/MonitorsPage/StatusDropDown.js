import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Dropdown, Form, ControlLabel, DropdownButton } from 'react-bootstrap'

import gridOptionss from '../../components/Grid/Pagination'
import './Sensors.style.scss'

class StatusDropDown extends Component {
  onQuickFilterByStatus(props) {
    gridOptionss.api.setQuickFilter(document.getElementById('statusDrop').value)
  }

  render() {
    return (
      <>
        <Form.Control
          as='select'
          id='statusDrop'
          name='statusDrop'
          onChange={this.onQuickFilterByStatus}
        >
          {/* <option>Status</option> */}
          <option>Functioning</option>
          <option>Non-Functioning</option>
          <option>N/A</option>
        </Form.Control>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    status: state.sensorReducer.gridInfo,
  }
}
export default connect(mapStateToProps, {})(StatusDropDown)
