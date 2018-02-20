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
