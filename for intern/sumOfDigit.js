  const sumOfDigit = (digit) => { // получаем сумму цифр числа
    const ff =[]
    const ddd = digit.slice().split('').map(digit => Number(digit));
    const sum = ddd.reduce((value, acc) => acc+value, 0);
    return sum;
  }
  
  
  const sorting = (str) => { // сортируем цифры числа по аозрастанию
    const ar = [];
    const ddd = str.slice().split('').map(digit => Number(digit));
    const myNewAr = ddd.sort().join('');
    return myNewAr;
  }
  
  const checkZeros = (numberStr) => { // проверяем чтобы число не начиналось с 0
    strSize = numberStr.length;
    numberNum = Number(numberStr);
    newNumberStr = String(numberNum);
    str = newNumberStr.length;
    return strSize === str ? true : false;
  }
  
  
const  findAll = ( summ, QTY) => {
  let a = [];
  let size = 0;
  let i = Math.pow(10, (QTY -1)); // убираем заведомо несоответствующий результат

  for ( ; size <= QTY; i++){
    if ( i % 10 !== 0 ){
      let str = String(i);
      let newNum = sorting(str);
      size = str.length;
      let checking = checkZeros(newNum);
      
      if (checking){
        let sum = sumOfDigit(str); 
        if (size === QTY && sum === summ){
          a.includes(newNum) ? a : a.push(newNum);
        }
      }
    }
  }
  
   if( a.length === 0){
     return [];
   }

  const result = [];
  const sizeA = a.length;
  const min = Number(a[0]);
  const max = Number(a[sizeA -1]);
  result.push(sizeA);
  result.push(min);
  result.push(max);
  return result;
  
}

/*
Нужно сгенерировать все числа из трех цифр, которые состоят из:

Цифр от 1 до 9.
Цифры идут в порядке возрастания.
Числа, которые подходят под указанные выше условия: 118, 127, 136, 145, 226, 235, 244, 334

Вам нужно написать функцию, которая получает 2 аргумента:

Сумма цифр числа.
Количество цифр в числе.
Функция должна выводить массив с тремя значениями

Сумма всех возможных комбинаций.
Минимальное число
Максимальное число
*/

/*test
Test.assertSimilar(findAll(10, 3), [8, 118, 334]);
Test.assertSimilar(findAll(27, 3), [1, 999, 999]);
Test.assertSimilar(findAll(84, 4), []);
Test.assertSimilar(findAll(35, 6), [123, 116999, 566666]);
*/



/* Решение Итеративным способом
  const sumOfDigit = (digit) => { // получаем сумму цифр числа
    const ff =[]
    const ddd = digit.slice().split('').map(digit => Number(digit));
    const sum = ddd.reduce((value, acc) => acc+value, 0);
    return sum;
  }
  
  
  const sorting = (str) => { // сортируем цифры числа по аозрастанию
    const ar = [];
    const ddd = str.slice().split('').map(digit => Number(digit));
    const myNewAr = ddd.sort().join('');
    return myNewAr;
  }
  
  const checkZeros = (numberStr) => { // проверяем чтобы число не начиналось с 0
    strSize = numberStr.length;
    numberNum = Number(numberStr);
    newNumberStr = String(numberNum);
    str = newNumberStr.length;
    return strSize === str ? true : false;
  }
  
  
const  findAll = ( summ, QTY) => {

  let size = 0;
  let i = Math.pow(10, (QTY -1)); // убираем заведомо несоответствующий результат

  const iter = (i, acc, size) => {
    if( size > QTY){
      return acc;
    }
    
    let str = String(i)
    let newNum = sorting(str);
    size = str.length;
    let checking = checkZeros(newNum);
    
    if (checking){
      let sum = sumOfDigit(str); 
      if (size === QTY && sum === summ){
        acc.includes(newNum) ? acc : acc.push(newNum)
      }
    }
    
    return iter(i + 1, acc, size)
    }
  
  let a = iter( i, [], 0)


  const result = [];
  const sizeA = a.length;
  const min = a[0];
  const max = a[sizeA -1];
  result.push(sizeA)
  result.push(min)
  result.push(max)
  console.log(result)
  
}


*/
