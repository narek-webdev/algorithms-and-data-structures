function jumpSearch(arr, target) {
  const sqrtNum = Math.floor(Math.sqrt(arr.length));
  let prevIndex = 0;
  let stepIndex = sqrtNum;

  if (arr[arr.length - 1] < target || arr[0] > target) return -1;

  while (arr[stepIndex] < target) {
    prevIndex = stepIndex;
    stepIndex = Math.min(sqrtNum + stepIndex, arr.length - 1);
  }

  for (let i = prevIndex; i <= stepIndex; ++i) {
    if (arr[i] === target) return i;
  }

  return -1;
}