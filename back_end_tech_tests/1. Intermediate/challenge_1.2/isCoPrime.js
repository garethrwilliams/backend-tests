const isCoPrime = (num1, num2) => {
  // If they are the same then they can't be true
  if (num1 === num2) return false;

  //   Divisors of the lower number
  const lowerNumDivisors = [];

  //   Separate into low and high
  const lowerNumber = num1 > num2 ? num2 : num1;
  const higherNumber = lowerNumber === num1 ? num2 : num1;

  // Extract the divisors from the lower number
  for (let count = 2; count < lowerNumber; count++) {
    if (!(lowerNumber % count)) {
      lowerNumDivisors.push(count);
    }
  }

  //   Compare with the higher number
  return !lowerNumDivisors.some((num) => {
    return !(higherNumber % num);
  });
};

module.exports = isCoPrime;
