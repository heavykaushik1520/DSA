// pushing all zeroes at last in array
let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let n = arr.length;

pushZeroesToEnd(arr, n);

function pushZeroesToEnd(arr, n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < n) {
    arr[count++] = 0;
  }
}

console.log("Resulted Array : ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + " ");
}
