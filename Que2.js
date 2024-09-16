function DomIdx(nums) {
  if (nums.length === 0) return -1;

  let maxIdx = 0;

  // Find the index of the maximum element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }

  // Check if the maximum element is at least twice as large as every other element
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIdx && nums[maxIdx] < 2 * nums[i]) {
      return -1;
    }
  }

  return maxIdx;
}

// Input
let nums = [3, 6, 1, 0];
console.log(DomIdx(nums)); // Output: 1
