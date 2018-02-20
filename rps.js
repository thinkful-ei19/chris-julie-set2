const weapons = ['rock', 'paper', 'scissors']

const getUserChoice = () => {
  const validAnswers = ['1', '2', '3'];
  const userChoice = prompt('Pick 1-(rock), 2-(paper) or 3-(scissors)');

  if (validAnswers.includes(userChoice)) {
    return Number(userChoice);
  } else { 
    throw new Error(`'${userChoice}' is an invalid Selection`);
  }
}

const didIwin = (a,b) => { // 1 ,2 = 
  // 1 rock
  // 2 paper
  // 3 scissors

  if (a > b) {
    if (a == 2) {
      return true;
    } 
    if (b == 1) {
      return false;  
    }
    return true;
  } else {
    return !didIwin(b, a); 
  }
}
 
const playAgainstComputer = (input) => { 
  const compChoice = Math.floor(Math.random() * 3) + 1;
  console.log(`Computer chose ${weapons[compChoice - 1]}`);
  if (input == compChoice) {
    console.log('it\'s a tie!');
  } else {
    const won = didIwin(input, compChoice);   
    if (won) {
      console.log('User won!');
    } else {
      console.log('You lost, Computer won!')
    }
  }
}

// phase 1: ask user for a number

const userChoice = getUserChoice();  
console.log(`You chose ${weapons[userChoice - 1]}`);

// phase 2: determine if computer beats user

playAgainstComputer(userChoice);
// function rpc() {
//   const randomNo = Math.floor(Math.random() * 3) + 1;
//   let user = prompt("1, 2, or 3");
//   if (randomNo === user) {
//     return "we have a tie";    
//   }
//   if ()
// }

// // 1=rock, 2=paper, 3=scissors
