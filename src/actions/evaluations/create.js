import API from '../../api/client'

const api = new API()

export default (student)  => {
  return (dispatch) => {

    api.post(`/students/${student._id}/evaluations'`, {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
