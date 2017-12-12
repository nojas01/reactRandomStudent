import API from '../../api/client'
// import game from '../../containers/Game'

export const UPDATE_BOARD = 'UPDATE_BOARD'

const api = new API()

export default (ticTacToeIndex, game) => (dispatch) => () => {
  dispatch ({
    type: 'UPDATE_BOARD',
    payload: ticTacToeIndex
  })

  api.patch(`/games/${game._id}`, {ticTacToeIndex, game})
      .then((res) => {
          console.log(res);
          console.log(ticTacToeIndex);
      })

}

//
// takeTile = index => () => {
//   this.props.dispatch({
//     type: 'UPDATE_BOARD',
//     payload: index
//   })
// }
