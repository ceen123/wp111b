function mmul(a, b) {

const rowsA = a.length;
  const columnsA = a[0].length;
  const columnsB = b[0].length;

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < columnsB; j++) {
      let sum = 0;
      for (let k = 0; k < columnsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

const vecA = [[1, 2],[3, 4]];
const vecB = [[5, 6],[7, 8]];

const sum = mmul(vecA, vecB);
console.log("the sum is:", sum);
