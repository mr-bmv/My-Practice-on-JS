import * as strings from './strings';
const solution = (num) =>{

var a = String(num);  // 345678
var a3 = strings.substr('345678', 0, 3); // 345
var a6 = strings.substr('345678', 3, 5);  //678

a3 = Number(a3);
a6 = Number(a6);
 
var sum1 = a3.charAt(0)+a3.charAt(1)+a3.charAt(2); //3+4+5=12
var sum2 = a6.charAt(0)+a6.charAt(1)+a6.charAt(2); //6+7+8=21

if (sum1 === sum2){
return true
} else {
return false}

}

solution(345678);

const sumDigits = (numberString) => {
  let sum = 0;
  for (let i = 0; i < strings.length(numberString); i++) {
    sum += Number(numberString[i]);
  }
  return sum;
};

const isHappyNumber = (number) => {
    const numberString = String(number);

    const leftPart = strings.substr(numberString, 0, 3);
    const rightPart = strings.substr(numberString, 3);

    return sumDigits(leftPart) === sumDigits(rightPart);
};

export default isHappyNumber;
