export default (set1, set2) =>
new Set(Array.from(set1).filter(value => !set2.has(value)));

/* моё решение
export default (firstSet, secondSet) => {
  const ar1 = Array.from(firstSet);
  const ar2 = Array.from(secondSet);
  const mySet = new Set();
  const element = ar1.reduce( (acc, value) =>
   !ar2.includes(value) ? mySet.add(value) : mySet , mySet);
  return element;
}
*/

/*
difference.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два множества и возвращает множество, составленное из таких элементов, которые есть в первом множестве, но нет во втором.

difference(new Set([2, 1]), new Set([2, 3]));
// → [1]


test

test('solution', () => {
  const result1 = difference(new Set([2, 1]), new Set([2, 3]));
  expect(result1).toEqual(new Set([1]));

  const result2 = difference(new Set([]), new Set([2, 3]));
  expect(result2).toEqual(new Set([]));

  const result3 = difference(new Set([2, 1]), new Set([]));
  expect(result3).toEqual(new Set([2, 1]));
});

*/
