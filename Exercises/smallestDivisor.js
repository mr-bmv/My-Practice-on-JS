/*
Эта функция должна находить наименьший делитель заданного числа.
*/

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (number, acc) => {
    if ( number === 1){
      return 1;
    } else if ( number%acc === 0) {
      return acc;
    } 
      return iter(number, acc + 1);
    
  }
  return iter(num, 2);
  // END
}
