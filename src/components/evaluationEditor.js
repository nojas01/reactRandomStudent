// src/students/StudentEditor.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createEvaluation from '../actions/evaluations/create'
import DatePicker from 'material-ui/DatePicker';
import { match } from 'react-router-dom'

// import './StudentEditor.css'
const TYPES = [
  'red',
  'yellow',
  'green'
]


class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()
    const { evaluationDate, evaluationColor, evaluationComment, studentId } = props

    this.state = {
      evaluationDate: null,
      evaluationColor,
      evaluationComment,
      studentId,
    }
  }

  setType(event) {
    const clickedColor = event.target.value
    const tempId = this.props.studentID
    console.log(tempId);
    let tempEvaluationColor = ""
      if (clickedColor === 'red') {
        tempEvaluationColor = 'red'
        return tempEvaluationColor
      }
      else if (clickedColor === 'yellow') {
        tempEvaluationColor = 'yellow'
        return tempEvaluationColor
      }
      else {
        tempEvaluationColor = 'green'
        return tempEvaluationColor
      }
    this.setState({
      evaluationColor: tempEvaluationColor,
      studentId: tempId
    })
    console.log(this.state);
  }

  updateRemarks(text) {
    this.setState({
      evaluationComment: text
    })
  }

  updateDate = (event, date) => {
    this.setState({
      evaluationDate: date,
    })
  }


  saveEvaluation() {
    const evaluation = {
      ...this.state,
    }

    console.log(evaluation)
    this.props.save(evaluation)

  }

  render() {
    // const { studentId } = this.props.studentID
    console.log(this.props.studentID);
    return (
      <div className="editor">
        <DatePicker
            hintText="pick the date"
            value={this.state.evaluationDate}
            onChange={this.updateDate} />

        {TYPES.map((type) => {
              return <label key={type} htmlFor={type}>
                <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
                {type}
              </label>
        })}

        <Editor
          ref="remark"
          options={{
            placeholder: {text: 'Write remarks...'}
          }}
          onChange={this.updateRemarks.bind(this)}
          text={this.state.remarks} />

        <div className="actions">
          <button className="primary" onClick={this.saveEvaluation.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createEvaluation}

export default connect(null, mapDispatchToProps)(EvaluationEditor)
