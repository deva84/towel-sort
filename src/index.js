
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (!matrix) {
    return newArr;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArr.push(matrix[i][j]);
      }
    } else {
      let reversedArr = matrix[i].reverse();
      for (let k = 0; k < reversedArr.length; k++) {
        newArr.push(reversedArr[k]);
      }
    }
  }
  return newArr;
}
