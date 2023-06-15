function madd(a, b) {

const rows = a.length;
  const columns = a[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    result.push(row);
  }

  return result;
}

const vecA = [[1, 2],[3, 4]];
const vecB = [[5, 6],[7, 8]];

const sum = madd(vecA, vecB);
console.log("the sum is:", sum);
