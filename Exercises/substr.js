const substr = (str, begin = 0, number = str.length) => {

    if (number < 0) {

        number = 1;

    }

    if (begin < 0) {

        begin = 0;

    }


    if (number + begin > str.length) {

        number = str.length - begin;

    }


    let result = '';


    for (; number > 0; number-=1) {


        result += str[begin];
        begin+=1;

    }

    return result;

}

console.log(substr('abba', 3, 400))
