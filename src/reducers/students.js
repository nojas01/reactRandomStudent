// src/reducers/students.js
import {
  FETCHED_STUDENTS,
  CREATED_STUDENT
} from '../actions/students'

const newId = (state) => {
  const ids = state
    .map((student) => student._id)
    .sort()
  return ['abcd', parseInt(ids[ids.length - 1].split('abcd')[1], 10) + 1].join('')
}

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]

    case CREATED_STUDENT :
      return [{ ...payload, _id: newId(state) }].concat(state)


    default :
      return state
  }
}
