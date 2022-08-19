const decryptMessage = (message, shift) => {
  return message
    .split('')
    .map((e) => {
      // Get the lowercase character number
      let charCode = e.toLowerCase().charCodeAt(0);

      // If the number is between a-z then shift the character
      if (charCode >= 97 && charCode <= 122) {
        // Get the remainder of the shift is it is above the length of the alphabet
        charCode = charCode - (shift % 26);
        if (charCode < 97) charCode = 123 - (97 - charCode);
        if (charCode > 122) charCode = 97 + (charCode - 123);

        return String.fromCharCode(charCode);
      }

      return e;
    })
    .join('');
};

module.exports = decryptMessage;
