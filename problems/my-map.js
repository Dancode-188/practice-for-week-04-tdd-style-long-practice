function myMap(inputArray, callback) {
  // Your code here
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    newArray.push(callback(inputArray[i]));
  }
  return newArray;
}

module.exports = myMap;