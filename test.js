const assert = require('assert');
const describe = require('mocha');
const it = require('mocha');

const make = require('./make');

describe(('make function'), () => {
  it('work well', async () => {
    function sum(a, b) {
      return a + b;
    }

    const expectedResult = 777;
    const actualResult = make(15)(34, 21, 666)(41)(sum);

    assert.equal(expectedResult, actualResult);
  });
});
