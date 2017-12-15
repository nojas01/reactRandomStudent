// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StudentPage from './students/StudentPage'

import {
  Lobby,
  SignIn,

} from './containers'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/students" component={Lobby} />
        <Route path="/students/:studentId" component={StudentPage} />
        <Route path="/sign-in" component={SignIn} />

      </div>
    )
  }
}
