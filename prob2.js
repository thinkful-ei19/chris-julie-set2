'use strict';
const MESSAGE = 'craft block argon meter bells brown croon droop';

function decode(msg) {
  const WORDS = msg.split(' ');
  const CIPHER_KEY = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  let output = '';
  let word, firstLetter, desiredLetter;
  
  for (word of WORDS) {
    firstLetter = word[0];
    desiredLetter = CIPHER_KEY[firstLetter];
    
    if (desiredLetter) {
      output += word[desiredLetter];
    } else {
      output += ' ';
    }
  }

  return output;
}

console.log(decode(MESSAGE));
