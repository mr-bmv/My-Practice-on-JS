const length = str => str.length;
const toUpperCase = str => str.toUpperCase();
const toLowerCase = str => str.toLowerCase();

const check = (str) => {
  const s = str;
  const v =  strings.toUpperCase(str);
  return s === v ? strings.toLowerCase(str) : strings.toUpperCase(str)
}

const invertCase = (string) => {
  let res ='';
  for ( let i = 0; i < string.length; i++){
    let simbol = string[i];
    res = res + check(simbol);
  } return res;
}
