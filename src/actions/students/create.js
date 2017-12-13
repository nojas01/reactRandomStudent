// src/actions/games/create.js

import API from '../../api/client'

const api = new API()

export default (student)  => {
  return (dispatch) => {

    api.post('/students', {...student})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
