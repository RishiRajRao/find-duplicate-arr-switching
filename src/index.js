function findDuplicate(arr) {
  var dup = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs(arr[i]) - 1] < 0) {
      dup = Math.abs(arr[i]);
      break;
    }
    arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]);
  }
  console.log("res==", arr, dup);
}

findDuplicate([1, 3, 4, 2, 2]);
