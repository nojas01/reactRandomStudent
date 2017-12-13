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

  // function randomIndexNumber(min, max) {
  //   min = Math.ceil(min)
  //   max = Math.floor(max)
  //   return Math.floor(Math.random() * (max - min)) + min
  // }

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
    const { students, _id, evaluations } = this.props
    console.log(students.map(this.studentEvaluation));
    console.log(this.randomStudentId());
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
