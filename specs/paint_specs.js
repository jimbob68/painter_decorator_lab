const assert = require('assert');
const Paint = require('../paint.js');

describe('paint', function(){
  let paint;

beforeEach(function(){
  paint = new Paint(2)
})
it('should start full', function(){
  const actual = paint.volume;
  assert.strictEqual(actual, 2);
})
it('check if it is empty', function(){
  paint.volume = 0;
  const actual = paint.volume;
  assert.strictEqual(actual, 0)
})
it('check it can empty itself', function(){
  paint.reducePaint();
  const actual = paint.volume;
  assert.strictEqual(actual, 0)
})







})
