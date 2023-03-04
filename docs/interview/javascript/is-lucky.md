---
sidebar_position: 1
tags:
  - javascript
---

# is lucky number (Bonus)

/_
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first
half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.
Example
For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
_/

### Solution

```jsx
function isLucky(n) {
  // Convert integer to string
  let str = n.toString();

  let len = str.length;

  // Calculate sum of first half of digits
  let sum1 = 0;
  for (let i = 0; i < len / 2; i++) {
    sum1 += parseInt(str[i]);
  }

  // Calculate sum of second half of digits
  let sum2 = 0;
  for (let i = len / 2; i < len; i++) {
    sum2 += parseInt(str[i]);
  }

  // Check if sums are equal
  return sum1 === sum2;
}
```
