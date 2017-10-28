const firstLetterInUpperCase = (str) => {

    let i = 0;
    let result = str[0].toUpperCase();
    let char = 0;

    for (i; i < str.length - 1; i++) {

        str[i] === ' ' ? char = str[i + 1].toUpperCase() : char = str[i + 1];
        result += char;
    // Console.log (result)

    }

    return result;

}

console.log(firstLetterInUpperCase('регина софья, миша. привет!'));
