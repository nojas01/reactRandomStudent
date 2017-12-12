// src/containers/Lobby.js
import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
// import { connect as subscribeToWebsocket } from '../actions/websocket'
// import CreateStudentButton from '../components/games/CreateStudentButton'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import './Lobby.css'

class Lobby extends PureComponent {
  // componentWillMount() {
  //   this.props.subscribeToWebsocket()
  // }



  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>

        <Paper className="paper">
          <Menu>
            <p> students here </p>
          </Menu>
        </Paper>
      </div>
    )
  }
}
//
// const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })

// export default connect(mapStateToProps)(Lobby)
export default (Lobby)
// <CreateStudentButton />
