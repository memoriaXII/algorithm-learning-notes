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

```
function addUpTo(n){
  return n * (n + 1) / 2;
}

```

### O(n) :

Numbers of operations: O(n) (big O of n)

```
function addUpTo(n){
  let total=0;
  for(let i=0;i<n;i++){
    total+=i;
  }
  return total;

}

```
