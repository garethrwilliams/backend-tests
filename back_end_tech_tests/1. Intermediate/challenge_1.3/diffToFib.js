function diffToFib(num) {
  // Start the sequence
  const fibArr = [0, 1];

  //   If the first two nums appear return 0
  if (fibArr.includes(num)) return 0;

  //   Construct the sequence
  while (fibArr[fibArr.length - 1] < num) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }

  //   Return the difference
  return fibArr[fibArr.length - 1] - num;
}

module.exports = diffToFib;
