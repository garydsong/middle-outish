function middleOut(arr) {
  let left = 0;
  let right = arr.length - 1;
  let pivot;

  while (left <= right) {
    // pivot element is middle element of array
    pivot = arr[Math.floor((left + right) / 2)];

    // partition the array around the pivot element
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    // swap elements that are on the wrong side of the pivot
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  // recursively sort the left and right partitions with shallow copies of arrays
  if (right > 0) {
    middleOut(arr.slice(0, right + 1));
  }
  if (left < arr.length - 1) {
    middleOut(arr.slice(left));
  }

  return arr;
}


console.log(middleOut([3, 5, 2, 7, 88, 33, 42]))
