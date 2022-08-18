const reverseCapitalisation = (str) => {
  if (str.length === 0) return '';

  return str
    .split('')
    .map((e) => {
      console.log(e.charCodeAt(0));
      if (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90)
        return e.toLowerCase();
      if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122)
        return e.toUpperCase();
      return e;
    })
    .join('');

  // return str.replace(/\w/g, (letter) =>  /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase());
};

module.exports = reverseCapitalisation;
