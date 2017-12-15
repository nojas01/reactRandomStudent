import API from '../../api/client'

export const CREATED_STUDENT = 'CREATED_STUDENT'


const api = new API()

export default (student)  => {
  return (dispatch) => {

    api.post('/students', {...student})
      .then((res) => {
        console.log(res);
        dispatch({ type: CREATED_STUDENT, payload: res.body})
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
