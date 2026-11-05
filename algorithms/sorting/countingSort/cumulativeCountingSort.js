function countingSort(arr) {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const countArr = new Array(max - min + 1).fill(0);
  const result = new Array(arr.length);

  for (let i = 0; i < arr.length; ++i) {
    countArr[arr[i] - min]++;
  }

  for (let i = 1; i < countArr.length; ++i) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; --i) {
    const index = arr[i] - min;

    const position = countArr[index] - 1;

    result[position] = arr[i];

    countArr[index]--;
  }

  return result;
}