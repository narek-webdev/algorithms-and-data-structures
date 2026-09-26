function countingSort(arr) {
  if (arr.length <= 1) return arr;

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const countArr = new Array(max - min + 1).fill(0);

  let result = [];

  for (let i = 0; i < arr.length; ++i) {
    countArr[arr[i] - min]++;
  }

  for (let j = 0; j < countArr.length; ++j) {
    if (countArr[j] === 0) continue;

    for (let k = 0; k < countArr[j]; ++k) {
      result.push(j + min);
    }
  }

  return result;
}