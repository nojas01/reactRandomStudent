import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/UI/Title'
import Student from './Student'
import StudentEditor from './StudentEditor'
// import './StudentsContainer.css'
const redArray = []
const yellowArray = []
const greenArray = []


class StudentsContainer extends PureComponent {
  componentWillMount() {
    this.props.dispatch(fetchStudents())
  }

  renderStudent(student, index) {
    return (
      <Student key={index} {...student} />
    )
  }

  studentEvaluation(student) {
    if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
        redArray.push(student._id)
        return redArray
      }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "green") {
      greenArray.push(student._id)
      }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "yellow") {
      yellowArray.push(student._id)
      return yellowArray
    }
    else {
      console.log(student._id);
    }
  }
  render() {
    const { students, _id, evaluations } = this.props
    console.log(students.map(this.studentEvaluation));
    console.log(yellowArray);
    if (!students) { return null }

    return(
      <div className="StudentsContainer">

        <header>
          <Title content="All Students" />
        </header>

        <main>
          {students.map(this.renderStudent)}
        </main>

        <footer>
          <h1> Add Another Student</h1>
          <StudentEditor />
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(StudentsContainer)
