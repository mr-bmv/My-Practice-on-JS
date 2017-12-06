export default (words, stopWords) =>
  words.map(word => word.toLowerCase())  // перевод всех слов в нижний регистр
    .filter(word => !stopWords.includes(word)) // выкидываем слова попавшие в СТОП
    .reduce((acc, word) => { // считаем слова
      if (!acc.has(word)) {
        return acc.set(word, 1);
      }
      return acc.set(word, acc.get(word) + 1);
    }, new Map());

/* мой вариант
export default (listOfWords, stopWords) => {
	const mapped = listOfWords.map(value => value.toLowerCase());
	const filtered = mapped.filter(value => !stopWords.includes(value));   
	const myMap = new Map();
	const reduced = filtered.reduce( (acc , value) => myMap.has(value) ? myMap.set(value, acc.get(value) + 1) : myMap.set(value,1) , myMap);
return reduced;
}
*/

/*
wordsCount.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра: список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра. Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе
stopWords это список стоп-слов, то есть эти слова не должны попадать в результирующую структуру
const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
Подсказки
Воспользуйтесь тройкой map/filter/reduce.
Функция has типа Map проверяет наличие ключа в мапе
*/

//test
/* 
import wordsCount from '../wordsCount';

const stopWords = ['and', 'or', 'a', 'the', ''];
const data = [
  [
    [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]],
    ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'],
  ], [
    [['maybe', 2], ['what', 2], ['where', 1], ['wha', 1], ['hat', 1]],
    ['aNd', 'maybe', 'MAYBE', 'whAt', 'WHerE', 'wHat', 'wha', 'hat', 'Or'],
  ],
];
*/

test('wordsCount', () => {
  data.forEach(([expected, words]) => {
    const actual = wordsCount(words, stopWords);
    expect([...actual]).toEqual(expected);
  });

});

