import reverseString from './solution';
const naoborod = (str) => {
  var s = '';
  for (let i = 0; i<5; i++ ){
  var k = ((str[i] === str[i].toUpperCase())? str[i].toLowerCase() : str[i].toUpperCase()); 
  s = s + k;
  }
  console.log(s);
};

naoborod("Oo_oO");
