---
sidebar_position: 1
tags:
  - bonus
---

# Min Sub ArrayLen (Bonus)

Write a function called <code>minSubArrayLen</code> which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:

### Example 1

```
Input: [2,3,1,2,4,3],7
Output: 2 -> because [4,3] is the smallest
```

### Example 2

```
Input: nums =[2,1,6,5,4], 9
Output: 2 -> because [5,4] is the smallest
```

### Example 3

```
Input: nums = [3,1,7,11,2,9,8,21,62,33,19], 52
Output: 1 -> because [62] is greater than 52
```

### Example 4

```
Input: nums = [1,4,16,22,5,7,8,9,10],39
Output: 3
```

### Example 5

```
Input: nums = [1,4,16,22,5,7,8,9,10],55
Output: 5
```

### Solution

```jsx
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

function minSubArrayLen(arr, target) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let start = 0;
  let end = 0;
  // This allows the minLen variable to store the length of the smallest subarray that meets the sum condition while iterating through the array nums.
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given target then
    // move the window to right
    if (target > sum) {
      sum += arr[end];
      end++;
    }
    // if current window adds up to at least the target given then
    // we can shrink the window
    else if (sum >= target) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```
