function objFilter(obj, func) {
  // Do not mutate original
  const returnObj = { ...obj };

  // Iterate through the object
  for (let key in returnObj) {
    // If the function returns false delete the key
    if (!func(returnObj[key])) {
      delete returnObj[key];
    }
  }

  // Return the object
  return returnObj;
}

module.exports = objFilter;
