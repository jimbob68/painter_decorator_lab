const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('decorator', function(){

let decorator;
let paint;

beforeEach(function(){
  decorator = new Decorator()
  paint = new Paint(2)
});

it('starts with an empty paint stock', function(){
  const actual = decorator.stock;
  assert.deepStrictEqual(actual, [])
});

it('can add can of paint', function(){
decorator.stock.push(paint)
const actual = decorator.stock.length;
assert.strictEqual(actual, 1)
})
it('can calculate total litres in stock', function(){
  decorator.stock.push(paint)
  const actual = decorator.totalLitres()
  assert.strictEqual(actual, 2)
});

it('can calculate if enough paint for room', function(){
  const actual = decorator.enoughForRoom();
  assert.strictEqual(actual, true )
})

it('can paint room if enough paint', function(){
  const actual = decorator.canPaintRoom();
  assert.strictEqual(actual, true)
});






})
