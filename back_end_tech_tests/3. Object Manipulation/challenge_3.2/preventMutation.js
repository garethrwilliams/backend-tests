function preventMutation(input) {
  // Work out what the object is
  const into = Array.isArray(input)
    ? []
    : typeof input === 'object' && input !== null
    ? {}
    : 'Please provide and object or array';

  // Iterate through object and call on recursion if it
  // contains an object
  for (let key in input) {
    if (typeof input[key] === 'object') {
      into[key] = preventMutation(input[key]);
    } else {
      Array.isArray(into) ? into.push(input[key]) : (into[key] = input[key]);
    }
  }

  // Return results
  return into;
}

console.log(preventMutation([1, [3, 4], 'hello']));

module.exports = preventMutation;
