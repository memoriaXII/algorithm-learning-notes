---
sidebar_position: 1
tags:
  - bonus
---

# Count Unique Values (Bonus)

Write a function called <code>countUniqueValues</code>, which accepts a sorted arrray, and counts the unique values in the array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

### Example 1

```
Input: nums = [1,1,1,1,1,2]
Output: 2

```

### Example 2

```
Input: nums = [1,2,3,4,4,4,7,7,12,12,13]
Output: 7
```

### Example 3

```
Input: nums = []
Output: 0
```

### Example 4

```
Input: nums = [-2,-1,-1,0,1]
Output: 4
```

### Solution

```jsx
/**
 * @param {number[]} arr
 * @return {number[] }
 */
function countUniqueValues(arr) {
  let uniqueCount = 1;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueCount++;
    }
  }
  return uniqueCount;
}
```

```jsx
/**
 * @param {number[]} arr
 * @return {number}
 */
function countUniqueValues(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]);
    if (count) {
      // always only settle once
      map.set(arr[i], count);
    } else {
      // record count
      map.set(arr[i], 1);
    }
  }
  return map.size;
}
```
