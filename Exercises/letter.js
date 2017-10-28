1c1
< const toUpperCase = (str) => str.toUpperCase;
---
> const firstLetterInUpperCase = (str) => {
3c3,5
< const upFirstLetter = (str) => {
---
>     let i = 0;
>     let result = str[0].toUpperCase();
>     let char = 0;
5c7
<     let result = str[0].toUpperCase()
---
>     for (i; i < str.length - 1; i++) {
7,17c9,11
<     for (let i = 0; i < str.length - 1; i++) {
< 
<         if (str[i] === ' ') {
< 
<             result += str[i + 1].toUpperCase();
< 
<         } else {
< 
<             result += str[i + 1];
< 
<         }
---
>         str[i] === ' ' ? char = str[i + 1].toUpperCase() : char = str[i + 1];
>         result += char;
>     // Console.log (result)
23,24c17
< };
< 
---
> }
26c19
< console.log(upFirstLetter('re g ina'));
---
> console.log(firstLetterInUpperCase('регина софья, миша. привет!'));
