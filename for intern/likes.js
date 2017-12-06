function likes( names){
let result = ''
 const size = names.length;
 const rest = size - 2;
 switch (size) {
  case 0:
  result = 'no one likes this';
  break;
  case 1:
  result = `${names[0]} likes this`;
  break; 
  case 2:
  result = `${names[0]} and ${names[1]} like this`;
  break;
  case 3:
  result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  break;
  case 4:
  result = `${names[0]}, ${names[1]} and ${rest} others like this`;
  break;
 }
 return result;
//your code here
}


/*
Описание
Вы, вероятно, знаете, как в вконтакте устроена система лайков картинок, постов и других вещей. Вам нужно организовать текст, который будет отображаться с таким элементом.

Функция принимает массив, который содержит имена людей, лайкнувших что-либо. Она должна возвращать сгенерированную строку, как в примерах ниже:
*/

/*
Test.assertSimilar(likes([]), "no one likes this");
Test.assertSimilar(likes(["Peter"]), "Peter likes this");
Test.assertSimilar(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
Test.assertSimilar(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
Test.assertSimilar(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this");

*/

