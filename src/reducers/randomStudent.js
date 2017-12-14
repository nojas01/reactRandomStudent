const initialState = ""

const redArray = []
const yellowArray = []
const greenArray = []

const studentEvaluation = (function(student) {
  if (student.evaluations.map(color => color.evaluationColor)[0] === "red") {
    redArray.push(`${student.firstName} ${student.lastName}`)
  }
  else if (student.evaluations.map(color => color.evaluationColor)[0] === "green") {
    greenArray.push(`${student.firstName} ${student.lastName}`)
  }
  else if (student.evaluations.map(color => color.evaluationColor)[0] === "yellow") {
    yellowArray.push(`${student.firstName} ${student.lastName}`)
  }
  else {
    console.log([student.firstName, student.lastName]);
  }
})

const SelectArray = (selectColor) =>
if  (selectColor < 50) {
  console.log(redArray);
  return redArray[Math.floor(Math.random()*redArray.length)]
}
else if (selectColor >= 50 && selectColor < 83) {
  console.log(yellowArray);
  return yellowArray[Math.floor(Math.random()*yellowArray.length)]
}
else {
  console.log(greenArray);
  return greenArray[Math.floor(Math.random()*greenArray.length)]
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case GENERATE_STUDENT :
      console.log({payload});
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
