// Write a function to check if a given number is prime.

function primeCheck(n) {
  if (n < 2) {
    console.log(n + " is not a prime number");
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(n + " is not a prime number");
      return false;
    }
  }
  console.log(n + " is a prime number");
  return true;
}

//Sample tests
primeCheck(3);
