const miminu = x=> y=> x<y? x : y;
const miminum = x=> y=> z=> miminu(x)(miminu(y)(z));

const min = miminum(333254)(23)(55);
console.log( min)


const maximu = x=> y=> x>y? x : y;
const maximum = x=> y=> z=> maximu(x)(maximu(y)(z));

const max = maximum(-98876)(23)(55);
console.log( max)
