import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/UI/Title'
import Student from './Student'
import StudentEditor from './StudentEditor'
import RandomStudentButton from '../components/RandomStudentButton'
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

  // selectedStudent(id) {
  //   if (students.map(student => student._id === id[0]))
  //   return [student.firstName , student.lastName]
  // }

  render() {

  const { students, _id, firstName, lastName, valuations } = this.props


  const studentEvaluation = (function(student) {
    if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
      redArray.push([student.firstName, student.lastName])
    }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "green") {
      greenArray.push([student.firstName, student.lastName])
    }
    else if (student.evaluations.map(color => color.evaluationColor)[0] === "yellow") {
      yellowArray.push([student.firstName, student.lastName])
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
    })



    console.log(students.map(studentEvaluation));
    console.log(randomStudentId);
    console.log(redArray);

    if (!students) { return null }

    return(
      <div className="StudentsContainer">
      <button className="primary" onClick={randomStudentId}>Save</button>
      <p>{randomStudentId[0]} {randomStudentId[1]}</p>
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
