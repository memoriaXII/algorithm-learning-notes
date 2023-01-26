---
sidebar_position: 1
tags:
  - test
---

# Intersection of Two Arrays II

[LeetCode: Intersection of Two Arrays II ](https://leetcode.com/problems/intersection-of-two-arrays-ii)

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

```jsx title="Intersection of Two Arrays II"
function countMap(nums: number[]) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }
  return map;
}
/** x
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersectArr = (nums1: number[], nums2: number[]) => {
  const map1 = countMap(nums1);
  const map2 = countMap(nums2);
  const res = [];
  for (const num of map1.keys()) {
    const count1 = map1.get(num);
    const count2 = map2.get(num);
    if (count2) {
      const pushCount = Math.min(count1, count2);
      for (let i = 0; i < pushCount; i++) {
        res.push(num);
      }
    }
  }

  return res;
};

intersectArr([1, 5, 5, 1], [5, 5, 5]);
```

A new page is now available at `http://localhost:3000/my-react-page`.
