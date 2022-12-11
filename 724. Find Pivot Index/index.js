/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((previous, current) => previous + current, 0);
  var lArr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (lArr === sum - lArr - nums[i]) return i;
    lArr += nums[i];
  }
  return -1;
};

pivotIndex([-1, -1, -1, -1, -1, -1]);