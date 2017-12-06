function flapDisplay( lines, rotors){
const listOfSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';
  const sizeOfRules = listOfSymbols.length; // столько раз крутить барабан
  const ourWord = lines[0]; // переданое слово
  let symbol = 0;
  const sumAr = [];
  
  for (let i = 0; i < sizeOfRules; i ++){
    symbol += rotors[0][i];
    let index = ourWord[i];
    let b = listOfSymbols.indexOf(index)
    let newSymbol = b + symbol;
    let aa = newSymbol % sizeOfRules
    sumAr.push(listOfSymbols[aa])
  }

  const resultAr =[];
  const finalString = sumAr.join('')
  resultAr.push(finalString)
  return resultAr;//your code here
}

/*
Представьте, что вы находитесь в аэропорту и залипаете на доску прилета/вылета.

display
Вы замечаете, что каждый символ управляется с помощью ротора, а порядок символов на каждом роторе следующий:

ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789

Немного подумав, вы понимаете, что дисплей работает по следующим правилам:

Начиная с левого края (от текущего символа до конца линии) все значения меняются, пока символ левого ротора не будет правильным.
Затем механизм переходит на один ротор вправо.
Повторяет шаг первый. И так до тех пор, пока вся строка не будет обновлена.
Вся процедура повторяется сверху вниз, пока все табло не будет обновлено.
функция flapDisplay принимает два аргумента: массив слов и массив смещений.

Ваша задача написать метод, который вернет массив со строкой, полученной после смещений символов на указанные значения.

Например:

Рассмотрим дисплей, на котором отображается всего одна линия, состоящая из трех роторов. Изначально на нем отображается слово CAT

Шаг 1 (Текущее положение - 1)

Смещение на 1
Линия стала равна DBU
Шаг 2 (Текущее положение - 2)

Смещение на 13
Линия стала равна DO)
Шаг 3 (Текущее положение - 3)

Смещение на 27
Линия стала равна DOG
*/

/* test
Test.assertSimilar(flapDisplay(["CAT"], [[1, 13, 27]]), ["DOG"]);
Test.assertSimilar(flapDisplay(["HELLO "], [[15,49,50,48,43,13]]), ["WORLD!"]);
Test.assertSimilar(flapDisplay(["CODE"], [[20,20,28,0]]), ["WARS"]);
Test.assertSimilar(flapDisplay(["NOTHING MOVED"], [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]), ["NOTHING MOVED"]);
Test.assertSimilar(flapDisplay(["EFGH"], [[53, 53, 53, 53]]), ["DDDD"]);
Test.assertSimilar(flapDisplay(["IN SPACE NOBODY...  "], [[48, 47, 0, 21, 38, 120, 48, 15, 41, 11, 43, 19, 47, 3, 17, 2, 41, 50, 23, 16]]), ["CAN HEAR YOU SCREAM!"]);

*/
