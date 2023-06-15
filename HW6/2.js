function vdot(a, b) {

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

const vecA = [1, 2];
const vecB = [5, 6];

const sum = vdot(vecA, vecB);
console.log("the sum is:", sum);
