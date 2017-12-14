import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import { fetch as fetchStudents } from '../actions/students'

const redArray = []
const yellowArray = []
const greenArray = []

class RandomStudentButton extends PureComponent {
  componentWillMount() {
    this.props.fetchStudents()
    this.props.students.map(this.studentEvaluation)
  }
  constructor(props) {
    super()
  const { students, _id, evaluations } = this.props
  }


  studentEvaluation(student) {
    if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
      redArray.push(student._id)
    }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "green") {
      greenArray.push(student._id)
    }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "yellow") {
      yellowArray.push(student._id)
    }
    else {
      console.log(student._id);
    }
  }

  randomStudentId() {
    const selectColor = Math.floor(Math.random()*100)
    console.log(selectColor)
      if  (selectColor <= 50) {
        console.log(redArray);
        return redArray[Math.floor(Math.random()*redArray.length)]
      }
      else if (selectColor > 50 && selectColor <= 83) {
      console.log(yellowArray);
        return yellowArray[Math.floor(Math.random()*yellowArray.length)]
      }
      else {
        console.log(greenArray);
        return greenArray[Math.floor(Math.random()*greenArray.length)]
      }
  }

  render() {

    return (
      <div>
        <button className="SelectStudent" onClick={this.randomStudentId.bind(this)}>select student</button>
      </div>
    )
  }
}

export default RandomStudentButton
