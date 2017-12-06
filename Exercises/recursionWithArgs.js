function myRec(){
  let i = 0;
  const rec = () => {
    if( i < arguments.length){
      let word = arguments[i];
      console.log(word);
     return rec(i++);
    }
  
  }
  
  return rec();
}



myRec('я', 'умею', 'писать', 'рекурсивные', 'функции', 'c','arguments')
