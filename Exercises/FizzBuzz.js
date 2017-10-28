const FizzBuzz = (begin, end) => {
  for (; begin <= end; begin += 1) {
    if (begin % 3 === 0 && begin % 5 === 0) {
      console.log('FizzBuzz');
    } else if (begin % 3 === 0) {
      console.log('Fizz');
    } else if (begin % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(begin);
    }
  }
};


FizzBuzz(122, 185);
