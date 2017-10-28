/*
Переводит первый символ слова в верхний регистр
*/

const upFirstLetter = (str) => {

    let result = str[0].toUpperCase()

    for (let i = 0; i < str.length - 1; i++) {

        if (str[i] === ' ') {

            result += str[i + 1].toUpperCase();

        } else {

            result += str[i + 1];

        }

    }

    return result;

};


console.log(upFirstLetter('re g ina'));
