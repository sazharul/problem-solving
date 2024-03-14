let nums = [1, 2, 3, 4, 5];
let target = 9;

let twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return null;
}

console.log(twoSum(nums, target));