---
sidebar_position: 1
tags:
  - medium
---

# Sort Colors

[LeetCode: Sort Colors ](https://leetcode.com/problems/sort-colors)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

### Solution

```jsx title="Sort Colors" :
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let n = nums.length;
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (nums[i] < nums[i - 1]) {
        // swap adjacent elements
        let temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
        swapped = true;
      }
    }
    n--; // reduce the size of the unsorted portion of the array
  }
  return nums;
};
Input: nums = [2, 0, 1];
Output: [0, 1, 2];
```
