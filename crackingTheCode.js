function beyond(num) {
  if (num === isFinite) {
    console.log("And beyond");
  }
  if (num > 0) {
    console.log("To infinity");
  }
  if (num < 0) {
    console.log("To negative infinity");
  }
  if (num === 0) {
    console.log("Staying home");
  }
}
beyond(0);




// takes a letter, and returns an index
function returnIndex(letter) {
  return {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }[letter];
}

// decode function
function decode(sentence) {
const words = sentence.split(" ");
return words.map((word) => {
  const firstLetter = word[0];  
  const index = returnIndex(firstLetter);
 
  return word[index] || ' '; 
}).join('');
}

const decodedMessage = decode('craft block argon meter bells brown croon droop');
console.log(decodedMessage);
