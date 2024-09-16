function flatArr(arr) {
  let result = [];

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          // If the element is an array, recursively flatten it
          result = result.concat(flatArr(arr[i]));
      } else {
          // If it's not an array, push it to the result
          result.push(arr[i]);
      }
  }
  return result;
}

// Input
let input = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flatArr(input));  
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]