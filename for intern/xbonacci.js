function xbonacci( signature, n){
  if( n === 0){
    const empty = []
    return empty;
  }
  
  let size = signature.length;
  let sum = 0;
  
  if(size > n){
    return signature.slice(0, n)
  }
  
  for ( let i = size ; i < n ; i ++) {
    let number = 0;
    for( let j = 1; j <= size ; j++ ){
      let index = i-j
      number += signature[index];     
    }  
    signature.push(number);
	
  }
  return signature;//your code here
}


/*
Описание
Нужно вычислить функцию xbonacci. Для получения следующего числа последовательности нужно сложить предыдущие числа в количестве, равным первоночальному размеру массива. Количество значений в итоговой последовательности должно быть равно n. Метод должен вернуть массив.

*/

/* test 
Test.assertSimilar(xbonacci([0,1], 10), [0,1,1,2,3,5,8,13,21,34]);
Test.assertSimilar(xbonacci([1,1], 10), [1,1,2,3,5,8,13,21,34,55]);
Test.assertSimilar(xbonacci([0, 0, 0, 0, 1], 10), [0,0,0,0,1,1,2,4,8,16]);
Test.assertSimilar(xbonacci([1,0,0,0,0,0,1], 10), [1,0,0,0,0,0,1,2,3,6]);
Test.assertSimilar(xbonacci([1,0,0,0,0,0,0,0,0,0], 20), [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);
Test.assertSimilar(xbonacci([1,2,3,4,5,6,7,8,9,0], 9), [1,2,3,4,5,6,7,8,9]);
Test.assertSimilar(xbonacci([1,2,3,4,5,6,7,8,9,0], 0), []);
Test.assertSimilar(xbonacci([2,13,0,12,20,4,5,4,15,9,15,3,17,9,15,10,6,12], 49), [2,13,0,12,20,4,5,4,15,9,15,3,17,9,15,10,6,12,171,340,667,1334,2656,5292,10580,21155,42306,84597,169185,338355,676707,1353397,2706785,5413555,10827100,21654194,43308376,86616581,173232822,346464977,692928620,1385854584,2771703876,5543397172,11086773189,22173504072,44346923547,88693677909,177387017463]);

*/


