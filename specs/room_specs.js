const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  let room;


beforeEach(function(){
room = new Room(10);
})
it('should start unpainted', function(){
  const actual = room.painted;
  assert.strictEqual(actual, false);
});

it('should finish as painted', function(){
  room.painted = true;
  const actual = room.painted;
  assert.strictEqual(actual, true);
})

it('should measure 10 metres square', function(){
  const actual = room.area;
  assert.strictEqual(actual, 10);
});


});
