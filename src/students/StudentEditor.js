// src/students/StudentEditor.js
import React, { PureComponent } from 'react'
// import Editor from 'react-medium-editor'
// import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
// import 'medium-editor/dist/css/medium-editor.css'
// import 'medium-editor/dist/css/themes/default.css'
import createStudent from '../actions/students/create'
// import './StudentEditor.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, photo } = props

    this.state = {
      firstName,
      lastName,
      photo,
    }
  }

  updateFirstName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      firstName: this.refs.firstname.value
    })
  }

  updateLastName(event) {
    this.setState({
      lastName: this.refs.lastname.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }


  saveStudent() {
    console.table(this.state)

    const student = {
      ...this.state
    }

    console.table(student)

    this.props.save(student)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="firstname"
          className="firstname"
          placeholder="FirstName"
          defaultValue={this.state.firstName}
          onChange={this.updateFirstName.bind(this)}
          onKeyUp={this.updateFirstName.bind(this)} />

        <input
          type="text"
          ref="lastname"
          className="lastname"
          placeholder="LastName"
          defaultValue={this.state.lastName}
          onChange={this.updateLastName.bind(this)}
          onKeyUp={this.updateLastName.bind(this)} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyUp={this.updatePhoto.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
