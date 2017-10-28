/*
Является ли число простым
*/

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

assert.equal(isPrime(9), false);
isPrime(7);
