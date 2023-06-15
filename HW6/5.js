function repeat(f, n) {
  let r = [];
  for (let i = 0; i < n; i++) {
    r[i]=Math.random();
    f=r[i];
  }
  return r;
}

var f , n=10;
console.log(repeat(f,n));
