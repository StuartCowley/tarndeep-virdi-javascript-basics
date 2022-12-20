const getNthElement = (index, array) => {
  // your code here
  return array[index % 4];
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return [...array, element];
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  const even = [];

  numbers.map(number => {
    if (number % 2 === 0) {
      return even.push(number);
    }
  });

  return even;
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const stringNew = [];

  strings.map(string => {
    const testString = string.toLowerCase();
    if (
      testString[0] === 'a' ||
      testString[0] === 'e' ||
      testString[0] === 'i' ||
      testString[0] === 'o' ||
      testString[0] === 'u'
    ) {
      return stringNew.push(string);
    }
  });
  return stringNew;
};

const removeSpaces = string => {
  return string.replace(/\s/gi, '');
};

const sumNumbers = numbers => {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });
  // const backArray = strings.map(string => {
  //   return string
  //     .split('')
  //     .reverse()
  //     .join('');
  // });

  // return backArray.sort();
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
