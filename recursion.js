function recursion(tree) {
  let resultArr = [];
  let workTree = JSON.parse(JSON.stringify(tree));
  function addLeafToArray(leaf, curLevel) {
    if (!resultArr[curLevel]) {
      resultArr[curLevel] = [];
    }

    resultArr[curLevel].push(leaf.value);

    if (!leaf.left && !leaf.right) {
      return;
    }

    let addedLvl = curLevel + 1;
    addLeafToArray(leaf.left, addedLvl);
    addLeafToArray(leaf.right, addedLvl);

    return;
  }

  addLeafToArray(workTree, 0);
  return resultArr;
}
