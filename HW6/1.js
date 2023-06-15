function vadd(a, b) {

  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}

const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];

const sum = vadd(vectorA, vectorB);
console.log("the sum is:", sum);
