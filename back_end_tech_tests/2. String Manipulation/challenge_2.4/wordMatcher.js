const wordMatcher = (matcher, str) => {
  // If the matcher is more than one word reject the request
  if (matcher.split(' ').length > 1) return [];

  const returnArr = [];
  //   Strip punctuation from the string and break into an array
  const strArr = str.replace(/[\p{P}$+<=>^`|~]/gu, '').split(' ');

  //   Look at each word and compare for match
  strArr.forEach((word) => {
    // If the word is too short or is not the same length as the matcher
    if (word.length === 0 || word.length !== matcher.length) return;

    let wordMatch = true;

    for (let i = 0; i < matcher.length; i++) {
      // If the letter doesn't match the letter with the exception of a ?
      // If the word contains non-letters
      if (
        (matcher[i] !== word[i] && matcher[i] !== '?') ||
        !/[A-Za-z]/.test(word[i])
      )
        return (wordMatch = false);
    }
    if (wordMatch) returnArr.push(word);
  });

  return returnArr;
};

console.log(
  wordMatcher(
    '??e?',
    'leet, beat, seet, sethring, 99e9, Seep, blep, flem, M4er'
  )
);

module.exports = wordMatcher;
