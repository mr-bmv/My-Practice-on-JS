/*
Создайте функцию isPerfect, которая принимает число и возвращает true,
если оно совершенное, и false — в ином случае.
*/
const isPerfect = (num) => {
  if (num <= 0) {
    return false;
  }

  let result = 0;

  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }

  return result === num;
};

console.log(isPerfect(8128));
console.log(isPerfect(33550336));
console.log(isPerfect(0));
