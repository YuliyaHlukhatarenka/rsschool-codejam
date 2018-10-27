function sumOfOther(arr) {
    let tempArr = arr;
    let sumAll = tempArr.reduce((acc, cur) => acc + cur);
    return tempArr.map(cur => sumAll - cur);
}
