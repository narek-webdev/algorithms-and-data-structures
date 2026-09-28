function mergeSort (arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, high, mid);
  }

  return arr;
}

function merge (arr, low = 0, high = 0, mid = 0) {
  const result = [];
  
  let i = low;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= high) {    
    if (arr[i] < arr[j]) {
      result[k++] = arr[i++];
    } else {
      result[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    result[k++] = arr[i++];
  }

  while (j <= high) {
    result[k++] = arr[j++];
  }

  for (let m = 0; m < result.length; ++m) {
    arr[low + m] = result[m];
  }

  return result;
}