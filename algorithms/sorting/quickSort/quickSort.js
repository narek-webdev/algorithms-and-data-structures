function partition (arr, low, high) {
    let pivot = arr[low];

    let i = low;
    let j = high;

    while (i < j) {
        while (i <= high && arr[i] <= pivot) {
            ++i;
        }

        while (arr[j] > pivot) {
            --j;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    const foundPivotIndex = j;
    [arr[foundPivotIndex], arr[low]] = [arr[low], arr[foundPivotIndex]];

    return foundPivotIndex;
}

function quickSort (arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
    
    return arr;
}