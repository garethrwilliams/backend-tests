function updateInventory(arr1, arr2) {
  // Create a function to convert 2d array to obj
  function arrto2Obj(arr) {
    const tempObj = {};
    for (let i of arr) {
      tempObj[i[1]] = i[0];
    }
    return tempObj;
  }

  //   Convert
  const obj1 = arrto2Obj(arr1);
  const obj2 = arrto2Obj(arr2);

  //   Update
  for (let i in obj2) {
    obj1[i] ? (obj1[i] += obj2[i]) : (obj1[i] = obj2[i]);
  }

  //   Return arr
  return Object.keys(obj1)
    .sort()
    .map((e) => {
      return (e = [obj1[e], e]);
    });
}

const items1 = [
  [20, 'jeans'],
  [30, 'mobile phones'],
  [10, 'shoes'],
];

const items2 = [
  [1, 'jeans'],
  [12, 'mobile phones'],
  [20, 'shoes'],
];

console.log(updateInventory(items1, items2));

module.exports = updateInventory;
