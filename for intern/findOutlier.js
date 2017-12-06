function findOutlier( integers){

  const num1 = integers[0] % 2 === 0 ? 1 : 0;
  const num2 = integers[1] % 2 === 0 ? 1 : 0;
  const num3 = integers[2] % 2 === 0 ? 1 : 0;
  let number;
  if ( (num1 + num2 + num3) <= 1 ){
    for (let i = 0; i < integers.length ; i +=1 ){
       if (integers[i] % 2 === 0) {
         number = integers[i];
         return number;
       }
    }
  } else {
    for (let i = 0; i < integers.length ; i +=1) {
       if (integers[i] % 2 !== 0) {
         number = integers[i];
         return number;
       }
    }   //your code here
}

}

/*
Вам задан массив, который содержит целые числа. Массив полностью состоит из целых четных или нечетных чисел, за исключением одного числа N. Напишите метод, который принимаем массив, как аргумент и возвращает число N.
*/

/* test
Test.assertSimilar(findOutlier([1,2,3]), 2);
Test.assertSimilar(findOutlier([2, 4, 6, 8, 10, 3]), 3);
Test.assertSimilar(findOutlier([0, 0, 3, 0, 0]), 3);
Test.assertSimilar(findOutlier([1, 1, 0, 1, 1]), 0);
Test.assertSimilar(findOutlier([13, 17, 99, 8, 15]), 8);
Test.assertSimilar(findOutlier([-1021455, 125454543, 1211212, 1412312145, -1212453]), 1211212);
Test.assertSimilar(findOutlier([-66726189,77220312,98469659,-138322811]), 77220312);
Test.assertSimilar(findOutlier([-108783860,-195665792,197515574,159904873,97217952,48228402]), 159904873);
Test.assertSimilar(findOutlier([19905231,141699373,-166598042,58873781]), -166598042);

*/
