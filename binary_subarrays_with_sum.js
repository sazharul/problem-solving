// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
//
// A subarray is a contiguous part of the array.

// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]

var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - goal)) {
            count += map.get(sum - goal);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // 4