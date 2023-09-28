// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function solutution(nums, target) {
  let map = {}
  for (let i = 0; i <= nums.length - 1; i++) {
    map[nums[i]] = i
  }
  for (let i = 0; i <= nums.length - 1; i++) {
    let difference = target - nums[i]
    if (map[difference] && i != map[difference]) {
      return [i, map[difference]]
    }
  }
}
