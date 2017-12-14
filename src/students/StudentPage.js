import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
// import Title from '../components/UI/Title'
import { Link } from 'react-router-dom'
import EvaluationEditor from '../components/evaluationEditor'

export class StudentPage extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string,
  // }

  componentWillMount() {
    this.props.fetchStudents()
  }

  render() {
    const { _id, firstName, lastName, photo } = this.props

    // if (!title) return null

    return(
      <article>
          <div className="student page">
            <h1>{ firstName } { lastName }</h1>
            <img src={ photo } alt={ firstName } />
          </div>
          <div>
            <EvaluationEditor studentID={_id} />
          </div>
          <footer>
            <Link to={'/'}>
              <p> Back to batch Students </p>
            </Link>
          </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ students }, { match }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === match.params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
