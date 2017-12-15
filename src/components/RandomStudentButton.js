import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'

const redArray = []
const yellowArray = []
const greenArray = []

class RandomStudentButton extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchStudents())
  }

  constructor() {
    super()

    this.state = {
      randomStudent: ""
    }
  }

  randomStudentId() {
    const selectColor = Math.floor(Math.random()*100)
    console.log(selectColor)
    if  (selectColor <= 50) {
      console.log(redArray[Math.floor(Math.random()*redArray.length)]);
      this.setState({randomStudent: redArray[Math.floor(Math.random()*redArray.length)]})

    }
    else if (selectColor > 50 && selectColor <= 83) {
      console.log(yellowArray[Math.floor(Math.random()*redArray.length)]);
      this.setState({randomStudent: yellowArray[Math.floor(Math.random()*yellowArray.length)]})
    }
    else {
      console.log(greenArray[Math.floor(Math.random()*redArray.length)]);
      this.setState({randomStudent: greenArray[Math.floor(Math.random()*greenArray.length)]})
    }
  }

  render() {
    const { students } = this.props


    const studentEvaluation = (function(student) {
      if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
        redArray.push(`${student.firstName} ${student.lastName}`)
      }
      else if (student.evaluations.map(color => color.evaluationColor)[0] === "green" || student.evaluations.length === 0) {
        greenArray.push(`${student.firstName} ${student.lastName}`)
      }
      else {
        yellowArray.push(`${student.firstName} ${student.lastName}`)
      }
    })
    console.log(students.map(studentEvaluation))
    return (
      <div>
        <button className="primary" onClick={this.randomStudentId.bind(this)}>Select Random Student</button>
        <p className="random"> The next question is for: {this.state.randomStudent} </p>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(RandomStudentButton)
