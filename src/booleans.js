function negate(a) {
  return !a;
}

function both(a, b) {
  // your code here
  if (a === true && b === true) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a === true || b === true) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (a === false && b === false) {
    return true;
  }
  return false;
}

function one(a, b) {
  if (a === false && b === false) {
    return false;
  }
  if (a === false || b === false) {
    return true;
  }
  return false;
}

function truthiness(a) {
  if (!!a === true) {
    return true;
  }
  return false;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  const b = Math.sqrt(a);
  if (b % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  const regexCheck = /[aeiouAEIOU]+/g;
  return regexCheck.test(string);
}

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
