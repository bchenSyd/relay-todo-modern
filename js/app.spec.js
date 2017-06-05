import React from 'react';
import expect from 'expect';
/*  mocha with babel
"debug-mocha": "mocha --compilers js:babel-register --source-maps  ..."
    mocha with typescript
"debug-mocha": "mocha --compilers ts:ts-node/register --source-maps  ..."
see: https://github.com/bochen2014/graphql-tools/blob/develop/package.json
 */
describe('test', () => {
  it('should pass', () => {
    debugger;
    expect(true).toBeTruthy();
  })
})
