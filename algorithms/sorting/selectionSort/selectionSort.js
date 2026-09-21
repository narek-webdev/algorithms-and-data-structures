function selectionSort(arr) {
  let startingPosition = 0;

  for (let i = 0; i < arr.length; ++i) {
    let currentMinElementIndex = startingPosition;

    for (let j = i; j < arr.length; ++j) {
      if (arr[j] < arr[currentMinElementIndex]) {
        currentMinElementIndex = j;
      }
    }

    [arr[startingPosition], arr[currentMinElementIndex]] = [
      arr[currentMinElementIndex],
      arr[startingPosition],
    ];

    ++startingPosition;
  }

  return arr;
}