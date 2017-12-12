import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/UI/Title'
import Student from './Student'
// import StudentEditor from './StudentEditor'
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

  render() {
    const { students } = this.props

    if (!students) { return null }

    return(
      <div className="StudentsContainer">

        <header>
          <Title content="All Students" />
        </header>

        <main>
          {students.map(this.renderStudent)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(StudentsContainer)
