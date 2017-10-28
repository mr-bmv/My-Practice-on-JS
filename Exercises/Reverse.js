const reverse = str => str.split('').reverse().join('');

reverse('321')
/*
const rev = (str, acc) =>{
return str === '' ? str : ( str, rev(str.substring(1)) + str[0])
}

rev('hexlet')

*/
