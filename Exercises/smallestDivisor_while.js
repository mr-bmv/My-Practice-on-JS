/*
Она должна находить наименьший целый делитель числа
*/

const smallestDivisor = (number) =>{
  let counter = 2;

  if ( number <= 0){
    return NaN;
  } else if ( number === 1){
    return 1;
  }
  
  while ( number%counter !== 0 ) {
    counter+=1;
  }
  return counter;
}
