const reverse = (str) => {
	let arr = [];
	for ( let i = str.length - 1, j = 0; i >= 0; i--, j++)
	arr[j] = str[i];
	return arr.join('');
}
reverse ('hello world!')
