const factor = (base, value) => {  
  if (value % base !== 0) {   
    return 0;
  }
  return 1 + factor(base, value / base); 
};

const cons = (a, b) => Math.pow(2, a) * Math.pow(3, b);
const car = pair => factor(2, pair);
const cdr = pair => factor(3, pair);
