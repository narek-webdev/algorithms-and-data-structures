function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let key = arr[i];
    let index = i;

    for (let j = i - 1; j >= 0; --j) {
      if (key >= arr[j]) break;
      arr[j + 1] = arr[j];
      index = j;
    }

    arr[index] = key;
  }

  return arr;
}