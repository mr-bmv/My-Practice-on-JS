function sqInRect( lng, wdth){
  if (lng === wdth) {
    return null;
  }

  const array = [];
  let min = 0;
  let max = 0;

  const iter = (a, b) => {
    if( a === b){
    array.push(min);
    return array;
    }
    min = Math.min(a, b);
    max = Math.max(a, b);
    array.push(min);
    a = max - min;
    b = min;
    return iter(a, b)
  }
  

/*
Рисунок ниже показывает, как можно разрезать прямоугольник на квадраты.

rectangle
Нужно придумтаь из этого рисунка алгоритм.

Вам даны две величины:

Длина прямоугольника (параметр lng)
Ширина прямоугольника (параметр width)
Вы должны вернуть массив чисел с размером стороны каждого квадрата.

Если передаваемые аргументы равны, то вернуть null.
*/

/* test
Test.assertSimilar(sqInRect(5, 5), null);
Test.assertSimilar(sqInRect(5, 3), [3, 2, 1, 1]);
Test.assertSimilar(sqInRect(3, 5), [3, 2, 1, 1]);
Test.assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
Test.assertSimilar(sqInRect(240, 32), [32, 32, 32, 32, 32, 32, 32, 16, 16]);
Test.assertSimilar(sqInRect(135, 85), [85, 50, 35, 15, 15, 5, 5, 5]);
Test.assertSimilar(sqInRect(6, 6), null);
*/
