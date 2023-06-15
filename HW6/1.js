function vadd(a, b) {

  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }

  return result;
}

const vecA = [1, 2];
const vecB = [5, 6];

const sum = vadd(vecA, vecB);
console.log("the sum is:", sum);
