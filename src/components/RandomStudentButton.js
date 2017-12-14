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
    this.props.dispatch(fetchStudents())
    }

  render() {
    redArray.length = 0
    yellowArray.length = 0
    greenArray.length = 0

      const { students, _id, firstName, lastName, evaluations } = this.props
      const studentEvaluation = (function(student) {

        if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
          redArray.push(`${student.firstName} ${student.lastName}`)
        }
        else if (student.evaluations.map(color => color.evaluationColor)[0] === "green" || student.evaluations.length === 0) {
          greenArray.push(`${student.firstName} ${student.lastName}`)
        }
        else if (student.evaluations.map(color => color.evaluationColor)[0] === "yellow") {
          yellowArray.push(`${student.firstName} ${student.lastName}`)
        }
        else {
          console.log([student.firstName, student.lastName]);
        }
      })

      const randomStudentId = (function() {
        studentEvaluation
        const selectColor = Math.floor(Math.random()*100)
        console.log(selectColor)
          if  (selectColor <= 50) {
            console.log(redArray[Math.floor(Math.random()*redArray.length)]);
            return redArray[Math.floor(Math.random()*redArray.length)]
          }
          else if (selectColor > 50 && selectColor <= 83) {
          console.log(yellowArray[Math.floor(Math.random()*redArray.length)]);
            return yellowArray[Math.floor(Math.random()*yellowArray.length)]
          }
          else {
            console.log(greenArray[Math.floor(Math.random()*redArray.length)]);
            return greenArray[Math.floor(Math.random()*greenArray.length)]
          }
        })

        console.log(students.map(studentEvaluation));
        console.log(randomStudentId);
        console.log(redArray);

    return (
      <div>
        <button className="primary" onClick={randomStudentId}>Select Random Student</button>
        <p>{randomStudentId[0]} {randomStudentId[1]}</p>
      </div>
    )
  }
}
const mapStateToProps = ({ students }) => ({ students })


export default connect(mapStateToProps)(RandomStudentButton)
