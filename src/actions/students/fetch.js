// src/actions/students/fetch.js

import API from '../../api/client'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_STUDENT = 'FETCHED_ONE_STUDENT'

const api = new API()

export default () => {
  return (dispatch) => {


    api.get('/students')
      .then((result) => {

        dispatch({
          type: FETCHED_STUDENTS,
          payload: result.body
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }
}


export const fetchOneStudent = (id) => {
  return dispatch => {


    api.get(`/students/${id}`)
      .then((result) => {

        dispatch({
          type: FETCHED_ONE_STUDENT,
          payload: result.body
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
