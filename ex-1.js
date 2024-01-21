function pivotIndex(nums) {
  let leftEdge = 0;
  let rightEdge = nums.slice(1).reduce((acc, val) => acc + val, 0);
  for (let i = 0; i < nums.length; i++) {
    // set rightEdge to 0 if iterating over the last index of nums.
    rightEdge = i === nums.length - 1 ? 0 : rightEdge;
    // return if current index is the pivot
    if (leftEdge === rightEdge) {
      return i;
    }
    // add the current pivot to leftEdge
    // remove the next index from rightEdge;
    leftEdge += nums[i];
    rightEdge -= nums[i + 1];
  }
  return - 1;
}


function test(description, func, input, expectedOutput) {
  console.log("---------")
  console.log("Testing: " + description)
  const result = func(input);
  console.log(`Input: ${JSON.stringify(input)}`);
  console.log(`Expected Output: ${expectedOutput}`);
  console.log(`Actual Output: ${result}`);
  console.log(`Test Result: ${result === expectedOutput ? 'Passed' : 'Failed'}`);
}

test("Testing for normal case", pivotIndex, [1, 7, 3, 6, 5, 6], 3);
test("Testing when zeroeth index is the pivot", pivotIndex, [5, 1, -1], 0);
test("Testing when there is no pivot index", pivotIndex, [1, 2, 3], -1);
test("Testing when the last index is the pivot", pivotIndex, [3, -3, 15], 2);
test("Testing with a lonely array", pivotIndex, [69], 0);
test("Testing with an array of two elements", pivotIndex, [5, 5], -1);

