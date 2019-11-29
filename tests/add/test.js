const add = require('../src/lib/addLib.js');

var assert = require('chai').assert;

describe('Test Addlib plus',function(){
  it('1 plus 1 equal 2',function(){
    assert.equal(add(1,1),2);
  });
});