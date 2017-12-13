// src/students/StudentItem.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import StudentCategory from './StudentCategory'
import Title from '../components/UI/Title'
// import './StudentItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class Student extends PureComponent {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   summary: PropTypes.string.isRequired,
  //   vegan: PropTypes.bool,
  //   vegetarian: PropTypes.bool,
  //   pescatarian: PropTypes.bool,
  // }


  render() {
    const { _id, firstName, lastName, photo, evaluations } = this.props

    const lastEvaluationColor = evaluations.map(color => color.evaluationColor)

    return(
      <article className="student">
        <Link to={`/students/${_id}`}>
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />

          <ul className="personalia">
            <li>{firstName}</li>
            <li>{lastName}</li>
          </ul>

          <p>Last Evaluation Color: { lastEvaluationColor }</p>
        </header>
        </Link>
      </article>
    )
  }
}



export default Student
