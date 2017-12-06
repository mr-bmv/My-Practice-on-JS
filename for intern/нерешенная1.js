Описание
Найдите наибольший общий делитель двух положительных целых чисел. Числа могу быть очень большими, поэтому подходите к решению с умом.

Входящие аргументы x и y всегда больше или равны 1, поэтому наибольший общий делитель всегда будет целым числом, которое больше или равно 1.

function mygcd( x, y){
  const smaller = x > y ? y : x;
  const bigger = x > y ? x : y;

  const iter = (num, counter) => {
    let newGcd = num;
    if (counter > smaller) {
      return num;
    }

    if (smaller % counter === 0 && bigger % counter === 0) {
      newGcd = counter;
    }

    return iter(newGcd, counter + 1);
  };
  return iter(1, 1);//your code here
}


Test.assertSimilar(mygcd(30, 12), 6);
Test.assertSimilar(mygcd(8, 9), 1);
Test.assertSimilar(mygcd(1, 1), 1);
Test.assertSimilar(mygcd(1, 3), 1);
Test.assertSimilar(mygcd(60, 12), 12);
Test.assertSimilar(mygcd(2672, 5678), 334); // потом падает
Test.assertSimilar(mygcd(10927782, 6902514), 846);
Test.assertSimilar(mygcd(1590771464, 1590771620), 4);
Test.assertSimilar(mygcd(9109871, 11712241), 197);
Test.assertSimilar(mygcd(8500532, 9377930), 514);
Test.assertSimilar(mygcd(14845952,22223520), 352);
Test.assertSimilar(mygcd(26689852,19664768), 268);
Test.assertSimilar(mygcd(84206,920), 2);
Test.assertSimilar(mygcd(49771202,22754440), 1838);
