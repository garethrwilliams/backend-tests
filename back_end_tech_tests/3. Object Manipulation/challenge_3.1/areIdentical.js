function areIdentical(obj1, obj2) {
  const obj1Arr = Object.entries(obj1).flat();
  const obj2Arr = Object.entries(obj2).flat();

  if (obj1Arr.length !== obj2Arr.length) return false;

  function flatten(into, node) {
    if (node == null) return into;
    if (typeof node === 'object' && !Array.isArray(node) && node !== null)
      node = Object.entries(node);
    if (Array.isArray(node)) return node.reduce(flatten, into);
    into.push(node);
    return flatten(into);
  }

  const obj1FlatArr = flatten([], obj1Arr);
  const obj2FlatArr = flatten([], obj2Arr);

  for (let i in obj1FlatArr) {
    if (obj1FlatArr[i] !== obj2FlatArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  areIdentical(
    { 1: 1, 2: 2, 3: { 4: 4, 5: { 7: 7 } } },
    { 1: 1, 2: 2, 3: { 4: 4, 5: { 7: 6 } } }
  )
);

module.exports = areIdentical;
