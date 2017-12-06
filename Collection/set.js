//выбор слов из массива, не содержащихся во множестве Set

const stopWords = new Set (['one','two', 'four']);
const words = [
'one', 'five', 'six', 'seven'
'two', 'four'
];

const result = words.filter(word => !stopWords.has(word)); // ['five', 'six', 'seven'];
