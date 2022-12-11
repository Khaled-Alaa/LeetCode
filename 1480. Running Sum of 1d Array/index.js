/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    newArr.push(newArr[newArr.length - 1] + nums[i]);
  }
  return newArr;
};

runningSum([1, 2, 3, 4]);
