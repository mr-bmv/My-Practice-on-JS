const toRna = (str) =>{
  let s ='';
  let k ='';
  for (let i = 0; i<5 ; i++){
    switch (str[i]){
    case 'G':
      s = "C";
      break;
    case 'C':
      s = "G";
      break;
    case 'T':
      s = "A";
      break;
    case 'A':
      s = "U";
      break;
    }
    k = k + s;
  }
  return k;
}

toRna('TTAUG')
