function heapify(arr, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < N && arr[l] > arr[largest])
        largest = l;

    if (r < N && arr[r] > arr[largest])
        largest = r;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, N, largest);
    }
}

function heapSort(arr) {
    const N = arr.length;

    for (let i = (N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    for (let i = N - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

function printArray(arr) {
    console.log(arr.join(' '));
}

let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log("Sorted array is");
printArray(arr);
