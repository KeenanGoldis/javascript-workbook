'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
var ring = stacks[startStack].pop();
function movePiece(startStack, endStack) {
  var ring = stacks[startStack].pop();
  stacks[endStack].push(ring);
  return stacks;
};
console.log(stacks);
movePiece('a', 'c');
console.log(stacks);

  function isLegal(startStack, endStack) {
    // Your code here ---  if piece moved is !< last variable in
    var startStackLength = stacks[startStack].length;

    if(stacks[startStack].length-1 > stacks[endStack.length-1]){
    return false
  } else{
    return true;
  }
  };

  function checkForWin(endStack) {
  // Your code here -- make sure the the b or c stack has a length of 4
    if ((stacks.b.length === 4) || (stacks.c.length === 4)){
    return true;
    } else{
      return false;
    }
  };

function towersOfHanoi(startStack, endStack) {
  // Your code here -- this is the overall function
  if (isLegal(startStack,endStack)){
    movePiece(startStack,endStack);
    checkForWin(endStack);
  }
};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
