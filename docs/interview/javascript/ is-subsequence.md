---
sidebar_position: 1
tags:
  - javascript
---

# Almost Increasing Sequence (Bonus)

### Example 1

```
Input: nums = [1,2,4,5,-1]
Output: false

```

### Solution

```jsx
function solution(sequence) {
  // Initialize a variable to keep track of the number of times the sequence violates the increasing property
  let count = 0;

  // Iterate over each number in the sequence
  for (let i = 0; i < sequence.length; i++) {
    // If the current number is less than or equal to the previous number, increment the count
    if (sequence[i] <= sequence[i - 1]) {
      count++;

      // If the count is greater than 1, the sequence cannot be made increasing by removing only one number
      if (count > 1) {
        return false;
      }

      // If the current number cannot be removed to make the sequence increasing, return false
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  // If the count is 0 or 1, the sequence is almost increasing or already increasing
  return true;
}
```
