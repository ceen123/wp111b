function isPrime(n) {
  if (n <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // If n is divisible by any number from 2 to sqrt(n), it's not prime
    }
  }

  return true; // If no factors are found, n is prime
}
