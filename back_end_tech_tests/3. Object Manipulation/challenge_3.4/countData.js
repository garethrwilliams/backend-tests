function countData(obj, returnCount) {
  // Return count is intitilised or loaded
  returnCount = returnCount ? returnCount : {};

  // Helper function
  function updateReturnCount(data) {
    returnCount[data] = returnCount[data] ? ++returnCount[data] : 1;
  }

  // Iterate through and log data types
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      updateReturnCount('array');

      countData(obj[key], returnCount);
    } else if (typeof obj[key] === 'object') {
      updateReturnCount(typeof obj[key]);

      countData(obj[key], returnCount);
    } else {
      updateReturnCount(typeof obj[key]);
    }
  }

  return returnCount;
}

module.exports = countData;
