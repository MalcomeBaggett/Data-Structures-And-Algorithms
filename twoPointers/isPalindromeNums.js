// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

var isPalindrome = function (x) {
  let numString = x + ""
  let left = 0
  let right = numString.length - 1
  while (left <= right) {
    if (numString[left] != numString[right]) return false
    left++
    right--
  }
  return true
}
