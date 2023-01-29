---
sidebar_position: 1
tags:
  - intro
---

# Intro

Let's discover algorithms and data structures.

# Big O notation

### O(1) :

Always 3 operations: O(1) (big O of one)

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

### O(n) :

Numbers of operations: O(n) (big O of n)

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
```

### O(n2) :

O(n) operation inside of an O(n) operation, will be O of n sqaure

O(n2)

```javascript
function printALlPairs(n)=>{

  for(let i=0;i<n;i++){
     for(let j=0;j<n.length;j++){
      console.log(j,n);
     }
  }

}

```
