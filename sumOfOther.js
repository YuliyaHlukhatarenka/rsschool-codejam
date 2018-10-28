function sumOfOther(arr) {
  const tempArr = arr;
  const sumAll = tempArr.reduce((acc, cur) => acc + cur);
  return tempArr.map(cur => sumAll - cur);
}
