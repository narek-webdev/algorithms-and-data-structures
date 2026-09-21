function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let flag = false;

    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (!flag) return arr;
  }

  return arr;
}