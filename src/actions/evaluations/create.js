import API from '../../api/client'

const api = new API()

export default (evaluation)  => {
  return (dispatch) => {

    api.post('/evaluations', {...evaluation })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
