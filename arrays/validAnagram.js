// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function solution(s, t) {
  if (t.length != s.length) return false
  let stringMapOne = {}
  let stringMapTwo = {}
  for (let i = 0; i <= s.length - 1; i++) {
    if (stringMapOne[s[i]]) stringMapOne[s[i]]++
    else {
      stringMapOne[s[i]] = 1
    }
  }
  for (let i = 0; i <= t.length - 1; i++) {
    if (stringMapTwo[t[i]]) stringMapTwo[t[i]]++
    else {
      stringMapTwo[t[i]] = 1
    }
  }

  for (val of t) {
    if (stringMapTwo[val] != stringMapOne[val]) return false
  }
  return true
}
