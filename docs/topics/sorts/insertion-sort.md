---
sidebar_position: 1
tags:
  - insertion-sort
---

## Insertion sort

Insertion Sort is another simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted sub-list. Here are the steps for performing Insertion Sort on a list of elements:

Starting with the second element (index 1) of the list, compare it with the first element (index 0). If the second element is smaller, swap the two elements to put them in sorted order.
Move to the next element (index 2) and compare it with the elements before it (elements at indices 0 and 1). Insert the element into its correct position in the sorted sub-list of the previous elements, by swapping it with the elements before it until it is in its correct position.
Continue this process for each remaining element of the list, each time comparing the current element with the sorted sub-list before it, and inserting it into the correct position by swapping with the elements before it.

Here is an example of how Insertion sort works:

```jsx
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
```
