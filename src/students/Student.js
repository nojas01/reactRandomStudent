// src/students/StudentItem.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import StudentCategory from './StudentCategory'
// import Title from '../components/UI/Title'
// import './StudentItem.css'


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
        <header>
          <Link to={`/students/${_id}`}>
            <img src={ photo } alt={ firstName } />
            <ul className="personalia">
              <li>{firstName}</li>
              <li>{lastName}</li>
            </ul>
          </Link>

          <p>Last Evaluation Color: { lastEvaluationColor }</p>
        </header>
      </article>
    )
  }
}



export default Student
