/*
const Sum4Num = () =>{
  let sum = 0;
  for( let i = 1000; i<=9999; i+=3) {
    sum+=i;
  } return sum;
};
*/

const Sum4Num = () => {
  let num = 1000;
  let acc = 0;
  const iter = (num, acc) => {
  if (num > 9999) {
    return acc;
  } return iter(num + 3, acc + num);
  }  
  return iter(num, acc);
}
console.log(Sum4Num())
