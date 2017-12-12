// src/actions/games/create.js

import API from '../../api/client'

const api = new API()

export default () => {
  return (dispatch) => {


    api.post('/students', {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
