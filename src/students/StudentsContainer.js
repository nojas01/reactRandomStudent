import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/UI/Title'
import Student from './Student'
import StudentEditor from './StudentEditor'
// import './StudentsContainer.css'

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
    return (student.evaluations)
  }

  render() {
    const { students, _id, evaluations } = this.props
    console.log(students.map(this.studentEvaluation));
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
