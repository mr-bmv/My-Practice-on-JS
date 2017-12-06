const number = [1, 4, 9];

const roots = number.map(Math.sqrt) // number.map(value => Math.sqrt(value));
console.log(roots);

const filtered = number.filter(n => n>3);

const sum =  number.reduce(
	(acc, value, index, arr) => acc + value,
0
);
