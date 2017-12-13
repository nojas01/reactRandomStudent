import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import { fetch as fetchStudents } from '../actions/students'


class CreateStudentButton extends PureComponent {

  render() {

    return (
      <div className="CreateStudentButton">
        <RaisedButton
          label="Create Student"
          primary={true}
          onClick={this.props.createStudent}
          icon={<StarIcon />} />
      </div>
    )
  }
}

export default connect(mapStateToProps, { createStudent })(CreateStudentButton)


function randomIndexNumber(0, 100) {
  min = Math.ceil(0)
  max = Math.floor(99)
  return Math.floor(Math.random() * (max - min)) + min
}
