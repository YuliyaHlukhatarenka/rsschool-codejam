function recursion(tree) {
  const resultArr = [];
  const workTree = JSON.parse(JSON.stringify(tree));
  function addLeafToArray(leaf, curLevel) {
    if (!resultArr[curLevel]) {
      resultArr[curLevel] = [];
    }

    resultArr[curLevel].push(leaf.value);

    if (!leaf.left && !leaf.right) {
      return;
    }

    const addedLvl = curLevel + 1;
    addLeafToArray(leaf.left, addedLvl);
    addLeafToArray(leaf.right, addedLvl);
  }

  addLeafToArray(workTree, 0);
  return resultArr;
}
