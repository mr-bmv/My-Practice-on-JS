const factorial = (n) => {
  let counter = 1;
  let result  = 1;

  while (counter <= n) {
    result = result * counter;
    counter = counter + 1;
  }

  return result;
}
