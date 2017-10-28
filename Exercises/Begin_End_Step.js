const sequenceSum = (begin, end, step) => {
  // BEGIN (write your solution here)

if (begin > end){
  return 0 ;
} else {

   return begin + sequenceSum(begin + step, end, step);
} 
  // END
}




sequenceSum(2, 6, 2)
