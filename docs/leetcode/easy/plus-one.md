---
sidebar_position: 1
tags:
  - easy
---

# plus-one

[LeetCode: plus-one ](https://leetcode.com/problems/plus-one)

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

### Example 1

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

```

### Example 2

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

```

### Example 3

```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

```

### Solution

```jsx title="plus-one"
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // we start iterating from the end of array.
  for (let i = digits.length - 1; i >= 0; i--) {
    // if the current digit[i] is under 9  we just increment it by one and breaking the loop.
    if (digits[i] < 9) {
      digits[i]++;
      break;
    }

    // else if the current (digit[i])  equal 9 but not the the first digit in the array, we make it zero
    else if (digits[i] === 9 && i !== 0) digits[i] = 0;
    // else if we reached the first digit in the array and it is equal 9, we make it 1 and push a new digit to the end of array which is 0
    else if (digits[i] === 9 && i == 0) {
      digits[i] = 1;
      digits.push(0);
    }
  }

  return digits;
};
```
