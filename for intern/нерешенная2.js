Нужно напистаь функцию, которое возвращает количество конечных нулей в факториале переданного числа.

N! = 1 * 2 * 3 * 4 ... N

const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter-1, counter * acc);
  }

  return iter(n, 1);
}

function zeros( number){
    const str = factorial(number);

  const string = String(str);
  const myArray = string.split('');
  const count = 0;
  
  const iter = (myArray, count) => {
    const last = myArray.pop();

    if ( last != 0) {
      return count;
    } else  {
      count +=1;
    }
    return iter(myArray, count)
  }
  
  return iter(myArray, 0)
//your code here
}


Test.assertSimilar(zeros(12), 2);
Test.assertSimilar(zeros(6), 1); // потом падает
Test.assertSimilar(zeros(30), 7);
Test.assertSimilar(zeros(100), 24);
Test.assertSimilar(zeros(1000), 249);
Test.assertSimilar(zeros(100000), 24999);
Test.assertSimilar(zeros(1000000000), 249999998);

