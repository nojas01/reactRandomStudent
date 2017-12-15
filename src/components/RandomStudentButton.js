import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'

class RandomStudentButton extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchStudents())
  }

  constructor(props) {
    super()

    this.state = { randomStudent: [] }
  }

  randomStudentId() {
    const {redArray, yellowArray, greenArray } = this.props
    const selectColor = Math.floor(Math.random()*100)
    const x = []
    console.log(selectColor)
    if  (selectColor <= 50) {
      x.push(redArray[Math.floor(Math.random()*redArray.length)])

    }
    else if (selectColor > 50 && selectColor <= 83) {
      x.push(yellowArray[Math.floor(Math.random()*yellowArray.length)])

    }
    else {
      x.push(greenArray[Math.floor(Math.random()*greenArray.length)])
    }
    this.setState({randomStudent: x })
  }

  render() {


    return (
      <div>
        <button className="primary" onClick={this.randomStudentId.bind(this)}>Select Random Student</button>
        <p className="random"> The next question is for: {this.state.randomStudent.map(student => student.firstName)} </p>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => {
    const redArray = students.filter((student) => (student.evaluations[0].evaluationColor === 'red' ))
    const yellowArray = students.filter((student) => (student.evaluations[0].evaluationColor === 'yellow' ))
    const greenArray = students.filter((student) => (student.evaluations[0].evaluationColor === 'green' ))

    return {
      redArray,
      greenArray,
      yellowArray
    }

  }


export default connect(mapStateToProps)(RandomStudentButton)
