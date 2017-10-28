/*
Сумма квадратов первых десяти натуральных чисел это
12 + 22 + 32 + ... + 10 2 = 385.
Квадрат суммы первых десяти натуральных чисел это
(1 + 2 + 3 + ... + 10)2 = 552 = 3025
Разница между квадратом суммы и суммой квадратов
первых десяти натуральных чисел: 3025 − 385 = 2640.
Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

const sqrOfSum = (yourNumber) => {

    let sum = 0;

    for (let i = 0; i <= yourNumber; i++) {

        sum += Math.pow(i, 2);

    }

    return sum;

};

const sumSqr = (yourNumber) => {

    let sum = 0;

    for (let i = 0; i <= yourNumber; i++) {

        sum += i;

    }

    return Math.pow(sum, 2);

}

const sumSquareDifference = (yourNumber) => {

    console.log(sumSqr(yourNumber) - sqrOfSum(yourNumber));

};

sumSquareDifference(10);
