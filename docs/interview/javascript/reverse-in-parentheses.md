---
sidebar_position: 1
tags:
  - javascript
---

# sort by height

/\*
Write a function that reverses characters in (possibly nested)
parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";

### Solution

```jsx
function reverseInParentheses(inputString: any) {
  const stack = [];
  let currStr = "";

  for (let i = 0; i < inputString.length; i++) {
    const currChar = inputString[i];

    if (currChar === "(") {
      // push current string onto the stack and start a new one
      console.log(currStr, "current----------------");
      stack.push(currStr);
      currStr = "";
    } else if (currChar === ")") {
      // reverse the current string and append it to the previous one
      currStr = currStr.split("").reverse().join("");
      const prevStr = stack.pop();
      currStr = prevStr + currStr;
    } else {
      // add the current character to the current string
      // console.log(currChar, 'currChar')
      currStr += currChar;
    }
  }
  console.log(stack, "stack");
  return currStr;
}
console.log(reverseInParentheses("foora(rab)"));
```
