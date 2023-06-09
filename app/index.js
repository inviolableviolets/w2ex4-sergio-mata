const checkIfContainsEveryVowel = (text) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => text.includes(vowel));
};

const checkIfNumberIsEven = (number) => number % 2 === 0;

const checkIfNumberIsPrime = (number) => {
  if (number < 2) {
    return false;
  }

  if (number !== Math.round(number)) {
    return false;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }

  return isPrime;
};

const getHighestNumber = (numberList) => numberList.sort((b, a) => a - b)[0];

const getLongestWord = (wordList) =>
  wordList.sort((b, a) => a.length - b.length)[0];

const checkIfListIncludesNumber = (numberList, number) =>
  numberList.includes(number);

export default {
  checkIfContainsEveryVowel,
  checkIfNumberIsEven,
  checkIfNumberIsPrime,
  getHighestNumber,
  getLongestWord,
  checkIfListIncludesNumber,
};
