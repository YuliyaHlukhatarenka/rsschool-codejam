function make(...arg) {
  let arg1 = arg;
  function f(...arg2) {
    if (arg2[0] instanceof Function) {
      return arg1.reduce((acc, cur) => arg2[0](acc, cur));
    }
    arg1 = [...arg1, ...arg2];
    return f;
  }
  return f;
}
