// src/students/StudentEditor.js
import React, { PureComponent } from 'react'
// import Editor from 'react-medium-editor'
// import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
// import 'medium-editor/dist/css/medium-editor.css'
// import 'medium-editor/dist/css/themes/default.css'
import createStudent from '../actions/students/create'
import DatePicker from './UI/DatePicker'
// import './StudentEditor.css'
const TYPES = [
  'red',
  'yellow',
  'green'
]


class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { firstName, lastName, photo } = props
    // "evaluationDate": "2017-12-20",
    // "evaluationColor": "red",
    // "evaluationComment": "StringStringStringString"
    this.state = {
      evaluationDate,
      evaluationColor,
      evaluationComment,
    }
  }

  setType(event) {
    this.setState({
      if (event.target.value === 'red') {
        evaluationColor = 'red'
      }
      else if (event.target.value === 'yellow') {
        evaluationColor = 'yellow'
      }
      else {
        evaluationColor= 'green'
      }
    })
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

  updateRemarks(event) {
    this.setState({
      remark: text
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

        {TYPES.map((type) => {
              return <label key={type} htmlFor={type}>
                <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
                {type}
              </label>
        })}

        <Editor
          ref="remark"
          options={{
            placeholder: {text: 'Write an Introduction...'}
          }}
          onChange={this.updateRemarks.bind(this)}
          text={this.state.remarks} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
