// You are keeping the scores for a baseball game with strange rules.
// At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation
// you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

function solution(str) {
  let record = []
  let output = 0
  for (let i = 0; i <= operations.length - 1; i++) {
    if (operations[i] == "C") {
      record.pop()
    } else if (operations[i] == "D") {
      let doubled = record[record.length - 1] * 2
      record.push(doubled)
    } else if (operations[i] == "+") {
      let added = record[record.length - 1] + record[record.length - 2]
      record.push(added)
    } else {
      let num = +operations[i]
      record.push(num)
    }
  }
  console.log(record)
  while (record.length != 0) {
    let popped = record.pop()
    output += popped
  }
  return output
}
