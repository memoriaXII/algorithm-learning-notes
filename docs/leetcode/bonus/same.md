---
sidebar_position: 1
tags:
  - bonus
---

# same

[LeetCode: same ](https://leetcode.com/problems/same)

Write a function called same, which accepts two arrays. This should return true if every value in the array has it's corresponding value sqared in the second array. The frequency of values must be the same.

### Example 1

```
Input: nums = [1,2,3], [4,1,9]
Output: true

```

### Example 2

```
Input: nums = [1,2,3], [1,9]
Output: false
```

### Solution

```jsx title="same (naive solution)"
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
function same(arr1: any, arr2: any) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const findIndex = arr2.indexOf(arr1[i] ** 2);
    if (findIndex === -1) {
      return false;
    }
    arr2.splice(findIndex, 1);
  }
  return true;
}
```
