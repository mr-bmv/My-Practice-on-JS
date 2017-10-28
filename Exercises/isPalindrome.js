const Palindrome = (string) => {
  const iter = (str, acc) => {
    if (str.length === 1) {
      return acc + str;
    }

    return iter(str.substr(0, str.length - 1), acc + str[str.length - 1]);
  };

  return iter(string, '');
};

const isPalindrome = string => string === Palindrome(string);


console.log(Palindrome('укнанзиан ызарф теавичаровереп яицкнуф атэ'));
console.log(isPalindrome('шалаш'));
