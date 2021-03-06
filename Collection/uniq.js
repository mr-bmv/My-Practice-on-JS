/*
uniq.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.

uniq([2, 1, 2, 3]); // [2, 1, 3]
Подсказки
Для формирования новой коллекции (другой конфигурации) из старой подходит reduce.
Метод arr.includes(value) проверяет, входит ли элемент в коллекцию.
Метод arr.concat(value) объединяет исходный массив (на котором вызван метод) с другими массивами и/или значениями (переданными в качестве аргументов). Метод иммутабелен, возвращает новый массив. Примеры и подробности использования см. в документации: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
*/

export default array => array.reduce((acc, value) => 
acc.includes(value) ? acc : acc.concat(value), []); 

/* uniq.test

test('uniq', () => {
  expect(uniq([])).toEqual([]);
  expect(uniq([2, 1])).toEqual([2, 1]);
  expect(uniq([2, 1, 2, 3])).toEqual([2, 1, 3]);
  expect(uniq([-2, 20, 0, 4, 20, 0])).toEqual([-2, 20, 0, 4]);
});

*/
