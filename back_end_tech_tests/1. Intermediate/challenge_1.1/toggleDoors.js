const toggleDoors = (numDoors) => {
  // Create and array of 0's
  const doorArr = new Array(numDoors).fill(0);

  let count = 1;

  //   Wile the counter is less than the array length, loop
  while (count <= numDoors) {
    for (let i = 0; i < doorArr.length; i++) {
      if (!((i + 1) % count)) {
        doorArr[i] = doorArr[i] ? 0 : 1;
      }
    }
    count++;
  }

  //   Return 1s
  return doorArr.reduce((sumArr, e, i) => {
    if (e === 1) {
      sumArr.push(i + 1);
    }
    return sumArr;
  }, []);
};

module.exports = toggleDoors;

toggleDoors(5);
// new Array(MAX_GUESSES).fill(new Array(letters.length).fill(''))
